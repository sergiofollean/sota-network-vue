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
              <template v-slot:item.actions="{item}">
                <v-btn color="danger" small text>Видалити</v-btn>
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
      priceDrivers: [],
    }
  },
  created() {
    var db = firebase.firestore();
    // console.log(this.$store.state.userData.email);
    firebase.auth().onAuthStateChanged(async user => {
      var priceDrivers = db.collection('users').doc(user.uid).collection('PriceDrivers');
      priceDrivers.onSnapshot(snapshot => {
        this.priceDrivers = [];
        snapshot.forEach(doc => {
          this.priceDrivers.push({
            AccountName: doc.data()['AccountName'],
            AccountPlatform: doc.data()['AccountPlatform'],
            AccountType: doc.data()['AccountType'],
          });
        });
      });
    });
  }
}
</script>