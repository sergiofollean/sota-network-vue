<template>
  <v-card>
    <v-container ali>
      <v-row>
        <v-col cols="2">Plan</v-col>
        <v-col cols="3" v-for="subscription in subscriptions" align="'center'">
          {{ $t(subscription.title) }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">Pricing</v-col>
        <v-col cols="3" v-for="subscription in subscriptions">
          <v-card>
            <v-card-text :align="'center'">
              Starting at {{ $t(subscription.price) }}$ a month

              <form id="payment" name="payment" method="post" action="https://sci.interkassa.com/" enctype="utf-8">
                <input type="hidden" name="ik_co_id" value="5907f7bc3d1eaf4d668b4567"/>
                <input type="hidden" name="ik_pm_no" value="ID_4233"/>
                <input type="hidden" name="ik_am" :value="subscription.price * 26"/>
                <input type="hidden" name="ik_cur" value="uah"/>
                <input type="hidden" name="ik_desc" value="Payment Description"/>
                <v-btn type="submit" value="pay">Select</v-btn>
              </form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">Top feature</v-col>
        <v-col cols="3" v-for="subscription in subscriptions" align="'center'">
          <v-list>
            <v-list-item v-for="option in subscription.availableOptions">
              {{ $t(option) }}
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import axios from "axios";

var db = firebase.firestore();
var realdb = firebase.database();

export default {
  data() {
    return {
      options: [
        'subscriptions.options.telegram',
        'subscriptions.options.futureBot',
        'subscriptions.options.spotBot',
        'subscriptions.options.botsConfigure'
      ],
      subscriptions: [
        {
          title: 'subscriptions.default',
          availableOptions: ['subscriptions.options.telegram'],
          price: 0,
        },
        {
          title: 'subscriptions.light',
          availableOptions: ['subscriptions.options.telegram', 'subscriptions.options.spotBot'],
          price: 15
        },
        {
          title: 'subscriptions.pro',
          availableOptions: [
            'subscriptions.options.telegram',
            'subscriptions.options.futureBot',
            'subscriptions.options.spotBot',
            'subscriptions.options.botsConfigure'
          ],
          price: 100,
        }
      ],
      id: 0,
    }
  }
}
</script>
