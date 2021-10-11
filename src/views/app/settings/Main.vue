<template>
  <v-row>
    <v-col sm="12">
      <base-card>
        <v-card-title>Біржеві акаунти</v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Назва</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in priceDrivers">
                  <td>{{ item.id }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
      priceDrivers: [],
    }
  },
  created() {
    var db = firebase.firestore();
    // console.log(this.$store.state.userData.email);
    firebase.auth().onAuthStateChanged(async user => {
      var priceDrivers = db.collection('users').doc(user.uid).collection('PriceDrivers');
      priceDrivers.onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          this.priceDrivers.push({id: doc.id, data: doc.data()});
        });
      });
    });
  }
}
</script>