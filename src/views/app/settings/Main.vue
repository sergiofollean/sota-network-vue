<template>
  <v-row>
    <v-col sm="12">
      <base-card>
        <v-card-title>
          {{ $t('profile.accountSettings') }}
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col lg="4" sm="6">
                <v-text-field
                    label="email"
                    v-model="userData.email"
                    required
                    disabled
                />
              </v-col>
              <v-col lg="4" sm="6">
                <v-text-field
                    :label="this.$t('register.firstAddress')"
                    v-model="userData.firstAddress"
                    required
                    disabled
                />
              </v-col>
              <v-col lg="4" sm="6">
                <v-text-field
                    :label="this.$t('register.secondAddress')"
                    v-model="userData.firstAddress"
                    required
                    disabled
                />
              </v-col>
              <v-col lg="4" sm="6">
                <v-text-field
                    :label="this.$t('register.city')"
                    v-model="userData.city"
                    required
                    disabled
                />
              </v-col>
              <v-col lg="4" sm="6">
                <v-text-field
                    :label="this.$t('register.state')"
                    v-model="userData.state"
                    required
                    disabled
                />
              </v-col>
              <v-col lg="4" sm="6">
                <v-text-field
                    :label="this.$t('register.zip')"
                    v-model="userData.zip"
                    required
                    disabled
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col sm="12">
      <base-card>
        <v-card-text>
            <v-data-table
                :headers="headers"
                :items="priceDrivers"
                hide-default-footer
                disable-sort
                no-data-text="Немає жодного акаунта"
                :loading="bussy"
            >
              <template v-slot:top>
                <v-toolbar
                    flat
                >
                  <v-toolbar-title>{{ $t('profile.tradingSettings') }}</v-toolbar-title>
                  <v-divider
                      class="mx-4"
                      inset
                      vertical
                  ></v-divider>
                  <!--                <v-spacer></v-spacer>-->
<!--                  <v-btn color="primary" to="settings/add_account">Додати</v-btn>-->
                  <v-dialog
                      v-model="addDialog"
                      max-width="600px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          color="primary"
                          v-bind="attrs"
                          v-on="on"
                          depressed
                      >Додати</v-btn>
                    </template>

                    <v-card>
                      <v-card-title>
                        <span class="text-h5">Додати акаунт</span>
                      </v-card-title>

                      <v-card-text class="pt-4">
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
                          <v-checkbox
                              v-model="Simulated"
                              label="Simulated"
                          />
                          <template v-if="Simulated === false">
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
                          </template>
                          <v-btn color="success" class="my-4" @click="addAccount" :disabled="bussy">Відправити</v-btn>
                        </v-form>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
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
                <v-btn color="danger" small text @click="removeAccount(item.id)" :disabled="bussy">Видалити</v-btn>
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

var db = firebase.firestore();
var realdb = firebase.database();

export default {
  data() {
    return {
      addDialog: false,
      bussy: false,
      headers: [
        { text: "Назва", value: "AccountName" },
        { text: "Біржа", value: "AccountPlatform" },
        { text: "Тип", value: "AccountType" },
        { text: "Статус", value: "Status", align: "center", width: "1%" },
        { text: "Дії", value: "actions", align: "center", width: "1%" }
      ],
      priceDrivers: [],
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
      AccountPub: '',
      Simulated: false,
      userData: {
        email: '',
        firstAddress: '',
        secondAddress: '',
        city: '',
        state: '',
        zip: '',
      },
    }
  },
  async created() {
    firebase.auth().onAuthStateChanged(async user => {
      realdb.ref('tasks').orderByChild('user').equalTo(user.uid).on('value', (snapshot) => {
        if (snapshot.exists()) {
          this.bussy = true;
        } else {
          this.bussy = false;
        }
      });

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

    let documentReference = await db.collection('users').doc(firebase.auth().currentUser.uid).get();
    this.userData.email = documentReference.get('email');
    this.userData.firstAddress = documentReference.get('firstAddress');
    this.userData.secondAddress = documentReference.get('secondAddress');
    this.userData.city = documentReference.get('city');
    this.userData.state = documentReference.get('state');
    this.userData.zip = documentReference.get('zip');
  },
  methods: {
    removeAccount(id) {
      this.bussy = true;

      firebase.auth().onAuthStateChanged(async user => {
        var priceDrivers = db.collection('users').doc(user.uid).collection('PriceDrivers');

        var realdb = firebase.database();
        await realdb.ref('tasks').push().set({
          task: 'delete_account',
          user: user.uid,
          data: {
            account_id: id
          }
        });

        // priceDrivers.doc(id).delete();
      });
    },
    addAccount() {
      if(!this.$refs.AccountForm.validate()) return false;
      if(!this.bussy) {
        this.bussy = true;
      }
      else if(this.bussy === true) {
        return false;
      }

      firebase.auth().onAuthStateChanged(async user => {
        await db.collection('users').doc(user.uid).collection('PriceDrivers').add({
          AccountName: this.AccountName,
          AccountPlatform: this.AccountPlatform,
          AccountType: this.AccountType.value,
          AccountPub: this.AccountPub,
          AccountPriv: this.AccountPriv,
          Simulated: this.Simulated
        }).then(async data => {
          await realdb.ref('tasks').push().set({
            task: "add_account",
            user: user.uid,
            data: {
              PriceDriver: data.id,
              AccountType: this.AccountType.value,
              AccountPub: this.AccountPub,
              AccountPriv: this.AccountPriv,
              Simulated: this.Simulated
            }
          });
          this.addDialog = false;
          this.bussy = false;
        }).catch(data => {
          /* Error if can't add the Account */
        });

      });

      // this.$router.push('/settings');
    }
  }
}
</script>