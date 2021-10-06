<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-one-card
          main-icon-name="mdi-hand-pointing-up"
          main-icon-background-color-class="bg-indigo-200"
          main-icon-text-color="text-primary"
          sub-heading-text="Impressions"
          heading-text="9.2k"
          bottom-button-text="10.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-primary"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-one-card
          floating-button-icon-name="mdi-plus"
          floating-button-icon-text-color="text-white"
          floating-button-background-color="success"
          main-icon-name="mdi-hand-pointing-up"
          main-icon-background-color-class="bg-green-200"
          main-icon-text-color="text-success"
          sub-heading-text="Impressions"
          heading-text="9.2k"
          bottom-button-text="10.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-success"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-one-card
          floating-button-icon-name="mdi-plus"
          floating-button-icon-text-color="text-white"
          floating-button-background-color="info"
          main-icon-name="mdi-hand-pointing-up"
          main-icon-background-color-class="bg-purple-200"
          main-icon-text-color="text-info"
          sub-heading-text="Visitors"
          heading-text="4.2k"
          bottom-button-text="20.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-info"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-one-card
          floating-button-icon-name="mdi-plus"
          floating-button-icon-text-color="text-white"
          floating-button-background-color="warning"
          main-icon-name="mdi-hand-pointing-up"
          main-icon-background-color-class="bg-red-200"
          main-icon-text-color="text-warning"
          sub-heading-text="Visitors"
          heading-text="4.2k"
          bottom-button-text="20.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-warning"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="flex pr-1">
          <div class="flex items-center">
            <h5 class="mb-0 mr-2 font-medium">Most</h5>
            <a href="#" class="font-semibold">Recent Media</a>
          </div>
          <div>
            <v-menu left bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                  <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card>
          <v-img src="@/assets/images/gallery/sq-10.jpg" />
          <v-card-actions class="p-4">
            <div class="flex">
              <div class="flex items-center">
                <v-icon class="text-base mr-1">mdi-cards-heart</v-icon>
                <v-card-subtitle class="p-0 mr-2">2.3k</v-card-subtitle>
                <v-icon class="text-base mr-1">mdi-comment-text</v-icon>
                <v-card-subtitle class="p-0">900</v-card-subtitle>
              </div>
              <v-card-subtitle class="p-0">23 days ago</v-card-subtitle>
            </div>
          </v-card-actions>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card>
          <v-img src="@/assets/images/gallery/sq-8.jpg" />
          <v-card-actions class="p-4">
            <div class="flex">
              <div class="flex items-center">
                <v-icon class="text-base mr-1">mdi-cards-heart</v-icon>
                <v-card-subtitle class="p-0 mr-2">2.3k</v-card-subtitle>
                <v-icon class="text-base mr-1">mdi-comment-text</v-icon>
                <v-card-subtitle class="p-0">900</v-card-subtitle>
              </div>
              <v-card-subtitle class="p-0">23 days ago</v-card-subtitle>
            </div>
          </v-card-actions>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card>
          <v-img src="@/assets/images/gallery/sq-6.jpg" />
          <v-card-actions class="p-4">
            <div class="flex">
              <div class="flex items-center">
                <v-icon class="text-base mr-1">mdi-cards-heart</v-icon>
                <v-card-subtitle class="p-0 mr-2">2.3k</v-card-subtitle>
                <v-icon class="text-base mr-1">mdi-comment-text</v-icon>
                <v-card-subtitle class="p-0">900</v-card-subtitle>
              </div>
              <v-card-subtitle class="p-0">23 days ago</v-card-subtitle>
            </div>
          </v-card-actions>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card>
          <v-img src="@/assets/images/gallery/sq-4.jpg" />
          <v-card-actions class="p-4">
            <div class="flex">
              <div class="flex items-center">
                <v-icon class="text-base mr-1">mdi-cards-heart</v-icon>
                <v-card-subtitle class="p-0 mr-2">2.3k</v-card-subtitle>
                <v-icon class="text-base mr-1">mdi-comment-text</v-icon>
                <v-card-subtitle class="p-0">900</v-card-subtitle>
              </div>
              <v-card-subtitle class="p-0">23 days ago</v-card-subtitle>
            </div>
          </v-card-actions>
        </base-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <base-card class>
          <div class="flex items-center justify-between pr-2">
            <v-card-title>Follower Growth</v-card-title>
            <div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-row>
            <v-col cols="12" md="12" lg="5" class="flex">
              <div class="flex justify-center flex-col">
                <div class="px-6 flex items-center">
                  <div class="flex-grow-1">
                    <h2 class="font-weight-bold display-2 m-0">4,829</h2>
                    <p class="mb-4 text-sm">Gained Followers (last 360 days)</p>
                  </div>
                  <div>
                    <div class="flex items-center mb-3">
                      <span class="bg-green-200 px-1 mr-2">
                        <v-icon class="text-green-500 text-xs">mdi-call-made</v-icon>
                      </span>
                      <p class="m-0 heading-muted">
                        You have a
                        <span class="text-success mr-1">20% Growth</span>compare
                        to last year
                      </p>
                    </div>
                    <div class="flex items-center">
                      <span class="bg-orange-200 px-1 mr-2 mr-2">
                        <v-icon class="text-orange-500 text-xs">mdi-call-received</v-icon>
                      </span>
                      <p class="m-0 heading-muted">
                        You have a reached
                        <span class="text-warning mr-1">10%</span>of your
                        follower goal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="12" lg="7">
              <apexchart
                type="line"
                width="100%"
                height="365"
                :options="analyticOne.chartOptions"
                :series="analyticOne.series"
              />
            </v-col>
          </v-row>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-two-card
          main-icon-name="mdi-account-multiple"
          main-icon-background-color-class="bg-indigo-200"
          main-icon-text-color="text-primary"
          sub-heading-text="Reach"
          heading-text="30.2k"
          bottom-button-text="0.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-primary"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-two-card
          main-icon-name="mdi-hand-pointing-up"
          main-icon-background-color-class="bg-green-200"
          main-icon-text-color="text-success"
          sub-heading-text="Engagement"
          heading-text="20.3k"
          bottom-button-text="10.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-success"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-two-card
          main-icon-name="mdi-alert-plus-outline"
          main-icon-background-color-class="bg-purple-200"
          main-icon-text-color="text-info"
          sub-heading-text="Rate per Click"
          heading-text="1.25K"
          bottom-button-text="09.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-info"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-two-card
          main-icon-name="mdi-alert-plus-outline"
          main-icon-background-color-class="bg-red-200"
          main-icon-text-color="text-warning"
          sub-heading-text="Average rate per cost"
          heading-text="3.25K"
          bottom-button-text="19.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-warning"
        />
      </v-col>
      <v-col cols="12">
        <base-card>
          <div class="flex items-center justify-between pr-3">
            <v-card-title>Reach Impressions history</v-card-title>
            <div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-card-text>
            <apexchart
              type="area"
              width="100%"
              height="365"
              :options="analyticTwo.chartOptions"
              :series="analyticTwo.series"
            />
          </v-card-text>
        </base-card>
      </v-col>
      <v-col cols="12" md="6">
        <base-card>
          <div class="flex items-center justify-between pr-3">
            <v-card-title>Reach Impressions history</v-card-title>
            <div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-card-text>
            <apexchart
              type="line"
              width="100%"
              height="365"
              :options="analyticThree.chartOptions"
              :series="analyticThree.series"
            />
          </v-card-text>
        </base-card>
      </v-col>
      <v-col cols="12" md="6">
        <base-card>
          <div class="flex items-center justify-between pr-3">
            <v-card-title>Comment History</v-card-title>
            <div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-card-text>
            <apexchart
              type="line"
              width="100%"
              height="365"
              :options="analyticFour.chartOptions"
              :series="analyticFour.series"
            />
          </v-card-text>
        </base-card>
      </v-col>
      <v-col cols="12">
        <base-card>
          <div class="flex items-center justify-between pr-3">
            <v-card-title>Posting Habits</v-card-title>
            <div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-card-text>
            <apexchart
              type="heatmap"
              width="100%"
              height="365"
              :options="analyticFive.chartOptions"
              :series="analyticFive.series"
            />
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import analyticOneCard from "@/components/card/AnalyticCardVersionOne";
import analyticTwoCard from "@/components/card/AnalyticCardVersionTwo";
import {
  analyticOne,
  analyticTwo,
  analyticThree,
  analyticFour,
  analyticFive,
} from "@/data/analytic2";
export default {
  name: "Analytic",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Analytic",
  },
  components: {
    "analytic-one-card": analyticOneCard,
    "analytic-two-card": analyticTwoCard,
  },
  data() {
    return {
      analyticOne,
      analyticTwo,
      analyticThree,
      analyticFour,
      analyticFive,
    };
  },
};
</script>
