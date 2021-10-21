<template>
  <v-row>
    <v-col sm="12">
      <base-card>
        <v-card-title>
          Біржеві акаунти
          <v-btn color="primary" class="ml-4" to="settings/add_account">Додати</v-btn>
        </v-card-title>
        <v-card-text>
            <v-data-table
                :headers="headers"
                :items="priceDrivers"
                hide-default-footer
                disable-sort
                no-data-text="Немає жодного акаунта"
            >
              <template v-slot:item.Status="{item}">
                <template v-if="item.Status === 'true'">
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
                <v-btn color="danger" small text @click="removeAccount(item.id)">Видалити</v-btn>
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
        { text: "Назва", value: "AccountName" },
        { text: "Біржа", value: "AccountPlatform" },
        { text: "Тип", value: "AccountType" },
        { text: "Статус", value: "Status", align: "center", width: "1%" },
        { text: "Дії", value: "actions", align: "center", width: "1%" }
      ],
      priceDrivers: [],
    }
  },
  created() {
    var db = firebase.firestore();
    firebase.auth().onAuthStateChanged(async user => {
      var priceDrivers = db.collection('users').doc(user.uid).collection('PriceDrivers');
      priceDrivers.onSnapshot(snapshot => {
        this.priceDrivers = [];

        snapshot.forEach(doc => {
          this.priceDrivers.push({
            id: doc.id,
            AccountName: doc.data()['AccountName'],
            AccountPlatform: doc.data()['AccountPlatform'],
            AccountType: doc.data()['AccountType'],
            Status: doc.data()['Status']
          });
        });
      });
    });
  },
  methods: {
    removeAccount(id) {
      var db = firebase.firestore();

      firebase.auth().onAuthStateChanged(async user => {
        var priceDrivers = db.collection('users').doc(user.uid).collection('PriceDrivers');
        priceDrivers.doc(id).delete();
      });
    }
  }
}
</script>