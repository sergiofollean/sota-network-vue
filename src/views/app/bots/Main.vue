<template>
  <v-row>
    <v-col sm="12">
      <base-card>
        <v-card-title>
          Боти
          <v-btn color="primary" class="ml-4" to="bots/bot">Додати</v-btn>
        </v-card-title>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="Bots"
              hide-default-footer
              disable-sort
              no-data-text="Немає жодного бота"
          >
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
        { text: "Дії", value: "actions", align: "center", width: "1%" }
      ],
      Bots: [],
    }
  },
  created() {
    var db = firebase.firestore();
    firebase.auth().onAuthStateChanged(async user => {
      var priceDrivers = db.collection('users').doc(user.uid).collection('Bots');
      priceDrivers.onSnapshot(snapshot => {
        this.priceDrivers = [];
        snapshot.forEach(doc => {
          // this.priceDrivers.push({
          //   id: doc.id,
          //   AccountName: doc.data()['AccountName'],
          //   AccountPlatform: doc.data()['AccountPlatform'],
          //   AccountType: doc.data()['AccountType'],
          // });
        });
      });
    });
  },
  methods: {

  }
}
</script>