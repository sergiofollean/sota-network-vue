<template>
  <v-row>
    <v-col sm="12">
      <base-card>
        <v-card-title>
          Додавання нового боту
        </v-card-title>

          <v-form>
            <v-card-text>
              <v-text-field
                  label="Назва"
                  :rules="[v => !!v || 'Вкажіть назву']"
                  required
                  outlined
              />
              <v-row>
                <v-col sm="6">
                  <v-select
                      outlined
                      label="Маркет"
                  />
                </v-col>
                <v-col sm="6">
                  <v-select
                      outlined
                      label="Акаунт"
                  />
                </v-col>
              </v-row>
            </v-card-text>
            <v-subheader>Нашалтування торгів</v-subheader>
            <v-card-text>
              <v-row>
                <v-col md="6">
                  <v-slider
                      class="my-4"
                      :tick-labels="level"
                      :max="2"
                      ticks="always"
                  />
                </v-col>
              </v-row>
              <v-text-field
                  outlined
                  label="Баланс для торгівлі"
              />
            </v-card-text>
            <v-card-text>
              <v-btn color="success">Зберегти</v-btn>
              <v-btn color="primary" disabled class="ml-3">Запустити</v-btn>
            </v-card-text>
          </v-form>
      </base-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      level: [ "Низький ризик", "Середній ризик", "Високий ризик" ]
    }
  },
  created() {
    axios.get('http://34.116.142.95/GetPriceMarkets').then(response => {
      console.log(response);
    });
  }
}
</script>