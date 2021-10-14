<template>
  <v-row>
    <v-col sm="12">
      <base-card>
        <v-card-title>
          Додати акаунт
        </v-card-title>

        <v-card-text>
          <v-form
              ref="AccountForm"
              lazy-validation
          >
            <v-text-field
                v-model="AccountName"
                label="Назва"
                :rules="[v => !!v || 'Вкажіть назву']"
                required
                outlined
            />
            <v-row>
              <v-col md="6">
                <v-select
                    v-model="AccountPlatform"
                    :items="AccountPlatforms"
                    placeholder="Оберіть біржу"
                    required
                    outlined
                />
              </v-col>
              <v-col md="6">
                <v-select
                    v-model="AccountType"
                    placeholder="Тип акаунту"
                    :items="AccountTypes"
                    return-object
                    required
                    outlined
                />
              </v-col>
            </v-row>
            <v-text-field
                v-model="AccountPub"
                label="Public Key"
                :rules="[v => !!v || 'Це поле не може бути порожнє!']"
                required
                outlined
            />
            <v-text-field
                v-model="AccountPriv"
                label="Private Key"
                :rules="[v => !!v || 'Це поле не може бути порожнє!']"
                required
                outlined
            />
            <v-btn color="success" class="my-4" @click="addAccount">Відправити</v-btn>
          </v-form>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>

<script>

import router from "@/router";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
  data() {
    return {
      AccountPlatforms: [
        'Binance',
        'Bybit'
      ],
      AccountTypes: [
        { text: 'Спот', value: 'Spot Trading' },
        { text: 'Фьючерси', value: 'Leverage Trading' }
      ],
      AccountName: '',
      AccountPlatform: '',
      AccountType: { text: 'Спот', value: 'spot' },
      AccountPriv: '',
      AccountPub: ''
    }
  },
  methods: {
    addAccount() {
      if(!this.$refs.AccountForm.validate()) return false;

      var db = firebase.firestore();
      firebase.auth().onAuthStateChanged(async user => {
        await db.collection('users').doc(user.uid).collection('PriceDrivers').add({
          AccountName: this.AccountName,
          AccountPlatform: this.AccountPlatform,
          AccountType: this.AccountType.value,
          AccountPub: this.AccountPub,
          AccountPriv: this.AccountPriv
        }).then(data => {
          this.$router.push('/settings');
        }).catch(data => {
          /* Error if can't add the Account */
        });

      });

      // this.$router.push('/settings');
    }
  }
}

</script>