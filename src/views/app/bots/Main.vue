<template>
  <v-row>
    <v-col sm="12">
      <base-card>
<!--        <v-card-title>-->
<!--          Боти-->
<!--          <v-btn color="primary" class="ml-4" to="bots/bot">Додати</v-btn>-->
<!--        </v-card-title>-->
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="Bots"
              hide-default-footer
              disable-sort
              no-data-text="Немає жодного бота"
          >
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
<!--                <v-spacer></v-spacer>-->
                <v-btn color="primary" to="bots/bot">Додати</v-btn>
              </v-toolbar>
            </template>
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
    }
  },
  created() {
    var db = firebase.firestore();
    firebase.auth().onAuthStateChanged(async user => {
      var Bots = db.collection('users').doc(user.uid).collection('Bots');
      Bots.onSnapshot(snapshot => {
        this.Bots = [];

        snapshot.forEach(async doc => {
          var priceDriver = await db
              .collection('users')
              .doc(user.uid)
              .collection('PriceDrivers')
              .doc(doc.data()['PriceDriver']).get();;

          this.Bots.push({
            id: doc.id,
            Name: doc.data()['Name'],
            AccountPlatform: await priceDriver.data()['AccountPlatform'],
            AccountType: await priceDriver.data()['AccountType'],
            Status: doc.data()['Status']
          });
        });
      });
    });
  },
  methods: {
    removeBot(id) {
      var firestore = firebase.firestore();

      firebase.auth().onAuthStateChanged(async user => {
        var Bots = firestore.collection('users').doc(user.uid).collection('Bots');
        Bots.doc(id).delete();
      });
    }
  }
}
</script>