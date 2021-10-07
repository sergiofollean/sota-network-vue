<template>
  <div>
    <v-row>
      <v-col
          cols="12"
      >
        <base-card>
          <v-card-text>
            <div class="ul-donation-item flex items-center justify-between py-lg flex-wrap">
              <div class="flex-grow-1 py-4">
                <div class="card-title m-0 text-xl">
                  Ліцензія - PRO
                </div>
                <p class="text-muted mb-0">
                  Залишилося днів - 14
                </p>
              </div>
              <v-btn
                  outlined
                  color="primary"
              >
                Керування підписками
              </v-btn>
            </div>
          </v-card-text>
        </base-card>
      </v-col>

      <v-col cols="12" md="6" lg="4" sm="6">
        <analytic-one-card
            main-icon-name="mdi-robot"
            main-icon-background-color-class="bg-indigo-200"
            main-icon-text-color="text-primary"
            sub-heading-text="Активні боти"
            heading-text="3"
        />
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="6">
        <analytic-one-card
            main-icon-name="mdi-cash-multiple"
            main-icon-background-color-class="bg-green-200"
            main-icon-text-color="text-success"
            sub-heading-text="Сумарний баланс"
            heading-text="2300 $"
        />
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="6">
        <analytic-one-card
            main-icon-name="mdi-alarm"
            main-icon-background-color-class="bg-purple-200"
            main-icon-text-color="text-info"
            sub-heading-text="Нереалізований прибуток"
            heading-text="+ 79,23 $"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import analyticOneCard from "@/components/card/AnalyticCardVersionOne";

export default {
  name: "Dashboard",
  components: {
    "analytic-one-card": analyticOneCard,
  },
}
</script>