<template>
  <v-row>
    <v-col sm="12" v-if="validation === false">
      <v-alert
          type="error"
          text
          prominent
      >
        <v-row align="center">
          <v-col sm="12" class="text-center">
            Перед початком необхідно додати акаунт біржі.
          </v-col>

          <v-col sm="12" class="text-center">
            <v-btn to="/settings">Налаштування</v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-col>
    <v-col sm="12">
      <base-card>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="Bots"
              hide-default-footer
              disable-sort
              no-data-text="Немає жодного бота"
              :loading="loading"
          >
            <!--      Top {      -->
            <template v-slot:top>
              <v-toolbar
                  flat
              >
                <v-toolbar-title>Боти</v-toolbar-title>
                <v-divider
                    class="mx-4"
                    inset
                    vertical
                ></v-divider>
                <v-btn color="primary" to="bots/bot" :disabled="validation === false">Додати</v-btn>
              </v-toolbar>
            </template>
            <!--      } Top      -->
            <!--      Table {      -->
            <template v-slot:item.Status="{item}">
              <template v-if="item.Status === 'active'">
                <v-chip
                    class=""
                    color="success"
                    label
                    small
                    text-color="white"
                >
                  <v-icon small left >mdi-check</v-icon>
                  Активний
                </v-chip>
              </template>
              <template v-else-if="item.Status === 'paused'">
                <v-chip
                    class=""
                    color="warning"
                    label
                    small
                    text-color="white"
                >
                  <v-icon class="mr-2" size="15">mdi-pause</v-icon>
                  Зупинений
                </v-chip>
              </template>
              <template v-else>
                <v-chip
                    class=""
                    color="info"
                    label
                    small
                    text-color="white"
                >
                  <v-progress-circular
                      indeterminate
                      :value="100"
                      color="white"
                      :size="15"
                      :width="2"
                      class="mr-2"
                  ></v-progress-circular>
                  Обробка
                </v-chip>
              </template>
            </template>

            <template v-slot:item.actions="{item}">
              <div class="flex">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        v-bind="attrs"
                        v-on="on"
                        icon
                        :to="{name: 'Bot', params: {id: item.id}}"
                    >
                      <v-icon>mdi-eye</v-icon>
                    </v-btn>
                  </template>
                  <span>Відкрити</span>
                </v-tooltip>

                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        v-bind="attrs"
                        v-on="on"
                        icon
                        @click="removeBot(item.id)"
                    >
                      <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Видалити</span>
                </v-tooltip>
              </div>
            </template>
            <!--      } Table      -->
          </v-data-table>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firestore = firebase.firestore();
var database = firebase.database();

export default {
  data() {
    return {
      headers: [
        { text: "Назва", value: "Name" },
        { text: "Біржа", value: "AccountPlatform" },
        { text: "Тип", value: "AccountType" },
        { text: "Статус", value: "Status", width: "1%", align: "center" },
        { text: "Дії", value: "actions", align: "center", width: "1%" }
      ],
      Bots: [],
      loading: true,
      // requireAccount: true,
      validation: true
    }
  },
  mounted() {
    var db = firebase.firestore();
    firebase.auth().onAuthStateChanged(async user => {
      var priceDrivers = db.collection('users').doc(user.uid).collection('PriceDrivers');
      priceDrivers = await priceDrivers.where('Status', '==', "true");
      priceDrivers = await priceDrivers.where('AccountPriv', '!=', '');

      if((await priceDrivers.get()).size === 0) {
        this.validation = false;
        return false;
      }

      this.validation = true;
      var Bots = db.collection('users').doc(user.uid).collection('Bots');
      Bots.onSnapshot(snapshot => {
        this.loading = true;
        // this.Bots = [];
        let Bots = [];

        snapshot.forEach(async doc => {
          var priceDriver = await db
              .collection('users')
              .doc(user.uid)
              .collection('PriceDrivers')
              .doc(doc.data()['PriceDriver']).get();

          Bots.push({
            id: doc.id,
            Name: doc.data()['Name'],
            AccountPlatform: await priceDriver.data()['AccountPlatform'],
            AccountType: await priceDriver.data()['AccountType'],
            Status: doc.data()['Status']
          });
        });

        this.Bots = Bots;
        this.loading = false;
      });
    });
  },
  methods: {
    removeBot(id) {

      firebase.auth().onAuthStateChanged(async user => {
        var Bot = firestore.collection('users').doc(user.uid).collection('Bots').doc(id);

        if(Bot) {
          database.ref('tasks').push().set({
            task: 'remove_bot',
            user: user.uid,
            data: {
              id: Bot.id
            }
          });
          Bot.delete();
        }
      });
    }
  }
}
</script>