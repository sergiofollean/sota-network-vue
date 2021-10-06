<template>
  <v-row>
    <v-col cols="12" md="6">
      <base-card>
        <v-img
          src="@/assets/images/dots.png"
          class="white--text align-end"
          gradient="to bottom, rgba(90deg,0,#7467ef,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title>asdasd</v-card-title>
        </v-img>
      </base-card>
    </v-col>
    <v-col cols="12" md="3">
      <base-card>
        <div class="p-4">
          <div class="mb-8">
            <div class="font-medium text-xl mb-0">
              Total Revenue
            </div>
            <p class="text-muted">
              $10345
            </p>
          </div>
          <div class="my-2">
            <v-btn color="primary" small>
              + 180 sales
            </v-btn>
          </div>
        </div>
        <apexchart
          type="area"
          height="160"
          :options="spark3.chartOptions"
          :series="spark3.series"
        />
      </base-card>
    </v-col>
    <v-col cols="12" md="3">
      <base-card>
        <div class="p-4">
          <div class="mb-8">
            <div class="font-medium text-xl mb-0">
              Todays Traffic
            </div>
            <p class="text-muted">
              500
            </p>
          </div>
          <div class="my-2">
            <v-btn color="warning" small>
              + 300 new
            </v-btn>
          </div>
        </div>
        <apexchart
          type="area"
          height="160"
          :options="spark4.chartOptions"
          :series="spark4.series"
        />
      </base-card>
    </v-col>
    <v-row>
      <v-col cols="12" md="8">
        <v-row class="flex-wrap flex">
          <v-col cols="4" class="flex items-center">
            <v-checkbox v-model="checkbox" class="ml-4" />
            <span>Name</span>
          </v-col>
          <v-col cols="3" class="text-muted flex items-center">
            Date
          </v-col>
          <v-col cols="3" class="text-muted flex items-center">
            Members
          </v-col>
          <v-col cols="1" class="text-muted flex items-center" />
        </v-row>
        <base-card class="mb-4">
          <v-card-text>
            <v-row class="flex-wrap flex">
              <v-col cols="4" class="flex items-center">
                <v-checkbox />
                <v-icon>mdi-star-outline</v-icon>
              </v-col>
              <v-col cols="3" class="flex items-center">
                12/23/2019 01:02PM
              </v-col>
              <v-col cols="4" class="flex items-center">
                <v-avatar class="">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
                <v-avatar class="border-white -m-3">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
                <v-avatar class="border-white">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="1">
                <div class="my-2">
                  <v-btn fab small class="shadow-none bg-white">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </base-card>
        <base-card class="mb-4">
          <v-card-text>
            <v-row class="flex-wrap flex">
              <v-col cols="4" class="flex items-center">
                <v-checkbox />
                <v-icon>mdi-star-outline</v-icon>
              </v-col>
              <v-col cols="3" class="flex items-center">
                12/23/2019 01:02PM
              </v-col>
              <v-col cols="4" class="flex items-center">
                <v-avatar class="">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
                <v-avatar class="border-white -m-3">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
                <v-avatar class="border-white">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="1">
                <div class="my-2">
                  <v-btn fab small class="shadow-none bg-white">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </base-card>
        <base-card class="mb-4">
          <v-card-text>
            <v-row class="flex-wrap flex">
              <v-col cols="4" class="flex items-center">
                <v-checkbox />
                <v-icon>mdi-star-outline</v-icon>
              </v-col>
              <v-col cols="3" class="flex items-center">
                12/23/2019 01:02PM
              </v-col>
              <v-col cols="4" class="flex items-center">
                <v-avatar class="">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
                <v-avatar class="border-white -m-3">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
                <v-avatar class="border-white">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="1">
                <div class="my-2">
                  <v-btn fab small class="shadow-none bg-white">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </base-card>
        <base-card class="mb-4">
          <v-card-text>
            <v-row class="flex-wrap flex">
              <v-col cols="4" class="flex items-center">
                <v-checkbox />
                <v-icon>mdi-star-outline</v-icon>
              </v-col>
              <v-col cols="3" class="flex items-center">
                12/23/2019 01:02PM
              </v-col>
              <v-col cols="4" class="flex items-center">
                <v-avatar class="">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
                <v-avatar class="border-white -m-3">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
                <v-avatar class="border-white">
                  <img
                    src="@/assets/images/faces/2.jpg"
                    alt="John"
                    class="border border-solid border-white"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="1">
                <div class="my-2">
                  <v-btn fab small class="shadow-none bg-white">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </base-card>

        <v-col cols="12">
          <base-card>
            <v-card-text>
              <apexchart
                type="area"
                height="350"
                :options="analyticFour.chartOptions"
                :series="analyticFour.series"
              />
            </v-card-text>
          </base-card>
        </v-col>
      </v-col>
      <v-col cols="12" md="4">
        <base-card class="mb-4">
          <v-card-text>
            <div class="flex align-items-center mb-2">
              <v-icon class="mr-2">
                mdi-trending-up
              </v-icon>
              <p class="m-0 text-xs text-success">
                Active Users
              </p>
            </div>
            <div class="flex justify-between">
              <h4 class="text-muted m-0">
                10.8K
              </h4>
              <div class="d-flex items-center">
                <v-chip class="ma-2" color="success" label text-color="white">
                  <v-icon left>
                    mdi-chevron-up
                  </v-icon>
                  + 21%
                </v-chip>
              </div>
            </div>
          </v-card-text>
        </base-card>
        <base-card class="mb-4">
          <v-card-text>
            <div class="flex align-items-center mb-2">
              <v-icon class="mr-2">
                mdi-star-outline
              </v-icon>
              <p class="m-0 text-xs text-danger">
                Transactions
              </p>
            </div>
            <div class="flex justify-between">
              <h4 class="text-muted m-0">
                $2.8M
              </h4>
              <div class="d-flex items-center">
                <v-chip class="ma-2" color="danger" label text-color="white">
                  <v-icon left>
                    mdi-chevron-down
                  </v-icon>
                  - 21%
                </v-chip>
              </div>
            </div>
          </v-card-text>
        </base-card>
        <base-card class="mb-4">
          <v-card-title>Campaigns</v-card-title>
          <v-card-text>
            <p class="text-muted">
              Today
            </p>
            <v-row align="center">
              <v-col md="8">
                <v-progress-linear
                  v-model="valueDeterminate"
                  class="flex-grow-1"
                  color="deep-purple accent-4"
                />
              </v-col>
              <v-col md="4">
                Google (102k)
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col md="8">
                <v-progress-linear
                  v-model="valueDeterminate2"
                  class="flex-grow-1"
                  color="warning"
                />
              </v-col>
              <v-col md="4">
                Facebook (80k)
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col md="8">
                <v-progress-linear
                  v-model="valueDeterminate"
                  class="flex-grow-1"
                  color="deep-purple accent-4"
                />
              </v-col>
              <v-col md="4">
                Google (102k)
              </v-col>
            </v-row>

            <p class="text-muted">
              Yesterday
            </p>
            <v-row align="center">
              <v-col md="8">
                <v-progress-linear
                  v-model="valueDeterminate"
                  class="flex-grow-1"
                  color="deep-purple accent-4"
                />
              </v-col>
              <v-col md="4">
                Google (102k)
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col md="8">
                <v-progress-linear
                  v-model="valueDeterminate2"
                  class="flex-grow-1"
                  color="warning"
                />
              </v-col>
              <v-col md="4">
                Facebook (80k)
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col md="8">
                <v-progress-linear
                  v-model="valueDeterminate"
                  class="flex-grow-1"
                  color="deep-purple accent-4"
                />
              </v-col>
              <v-col md="4">
                Google (102k)
              </v-col>
            </v-row>
            <p class="text-muted">
              2 days later
            </p>
            <v-row align="center">
              <v-col md="8">
                <v-progress-linear
                  v-model="valueDeterminate"
                  class="flex-grow-1"
                  color="deep-purple accent-4"
                />
              </v-col>
              <v-col md="4">
                Google (102k)
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col md="8">
                <v-progress-linear
                  v-model="valueDeterminate2"
                  class="flex-grow-1"
                  color="warning"
                />
              </v-col>
              <v-col md="4">
                Facebook (80k)
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col md="8">
                <v-progress-linear
                  v-model="valueDeterminate"
                  class="flex-grow-1"
                  color="deep-purple accent-4"
                />
              </v-col>
              <v-col md="4">
                Google (102k)
              </v-col>
            </v-row>
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
  </v-row>
</template>
<script>
import { spark3, spark4, analyticFour } from "@/data/analytic";

export default {
  data() {
    return {
      spark3,
      spark4,
      analyticFour,
      checkbox: false,
      valueDeterminate: 70,
      valueDeterminate2: 30,
    };
  },
};
</script>
