<template>
  <v-row>
    <v-col cols="12" md="12" lg="8">
      <v-row>
        <v-col cols="12">
          <base-card class="px-4 pt-4">
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-card-title class="pb-0 mb-2"
                  >Welcome Back! Watson</v-card-title
                >
                <v-card-text class="pb-0">
                  <p class="text-sm ">
                    You have completed
                    <span class="font-bold">70%</span> of your goal this week!
                    Start a new goal and improve your result.
                  </p>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-card-text class="p-0">
                  <apexchart
                    type="radialBar"
                    :options="welcomeProgressChart.chartOptions"
                    :series="welcomeProgressChart.series"
                    height="250"
                  />
                </v-card-text>
              </v-col>
            </v-row>
          </base-card>
        </v-col>
        <v-col cols="12" md="6">
          <base-card>
            <v-card-title>Results</v-card-title>
            <v-card-text>
              <div class="flex justify-between items-baseline">
                <div class="mr-2">
                  <v-icon class="text-xs orange--text text--darken-1"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-semibold mb-0">React</p>
                  <p class="text-xs">20 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="text-xs font-semibold m-0 text-right">40%</p>
                  <v-progress-linear
                    v-model="valueDeterminate"
                    rounded
                    color="orange darken-1"
                  />
                </div>
              </div>
              <div class="flex justify-between items-baseline">
                <div class="mr-2">
                  <v-icon class="text-xs blue--text text--darken-1"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-semibold mb-0">Angular</p>
                  <p class="text-xs">10 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="text-xs font-semibold m-0 text-right">80%</p>
                  <v-progress-linear
                    v-model="valueDeterminate2"
                    rounded
                    color="blue darken-1"
                  />
                </div>
              </div>
              <div class="flex justify-between items-baseline">
                <div class="mr-2">
                  <v-icon class="text-xs blue--text text--darken-1"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-semibold mb-0">React</p>
                  <p class="text-xs">20 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="text-xs font-semibold m-0 text-right">40%</p>
                  <v-progress-linear
                    v-model="valueDeterminate"
                    rounded
                    color="blue darken-1"
                  />
                </div>
              </div>
              <div class="flex justify-between items-baseline">
                <div class="mr-2">
                  <v-icon class="text-xs orange--text text--darken-1"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-semibold mb-0">Vue</p>
                  <p class="text-xs">10 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="text-xs font-semibold m-0 text-right">80%</p>
                  <v-progress-linear
                    v-model="valueDeterminate2"
                    rounded
                    color="bg-purple-500 accent-4"
                  />
                </div>
              </div>
              <div class="flex justify-between items-baseline">
                <div class="mr-2">
                  <v-icon class="text-xs text-red-500"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>

                <div class="lm-title flex-grow-1">
                  <p class="font-semibold mb-0">HTML</p>
                  <p class="text-xs">06 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="text-xs font-semibold m-0 text-right">80%</p>
                  <v-progress-linear
                    v-model="valueDeterminate2"
                    rounded
                    color="bg-red-500 accent-4"
                  />
                </div>
              </div>
              <div class="flex justify-between items-baseline">
                <div class="mr-2">
                  <v-icon class="text-xs blue--text text--darken-1"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-semibold mb-0">CSS</p>
                  <p class="text-xs">20 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="text-xs font-semibold m-0 text-right">40%</p>
                  <v-progress-linear
                    v-model="valueDeterminate"
                    rounded
                    color="blue darken-1"
                  />
                </div>
              </div>
            </v-card-text>
          </base-card>
        </v-col>
        <v-col cols="12" md="6">
          <base-card>
            <v-card-title>Study Time Last Week</v-card-title>
            <v-card-text>
              <apexchart
                type="bar"
                height="340"
                :options="studyChart.chartOptions"
                :series="studyChart.series"
              />
            </v-card-text>
          </base-card>
        </v-col>
        <v-col cols="12" md="6">
          <lm-card
            card-color="primary darken-1"
            badge-color="primary lighten-1"
            badge-text="V"
            badge-text-color="text-white"
            text="You watched today"
            text-small="Vue tutorial"
            btn-icon="mdi-play"
            btn-color="primary darken-1"
          />
        </v-col>
        <v-col cols="12" md="6">
          <lm-card
            card-color="danger darken-1"
            badge-color="danger lighten-1"
            badge-text="P"
            badge-text-color="text-white"
            text="You watched today"
            text-small="Python tutorial"
            btn-icon="mdi-play"
            btn-color="danger darken-1"
          />
        </v-col>
        <v-col cols="12">
          <base-card>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Icon</th>
                    <th class="text-left">Started</th>
                    <th class="text-left">Course</th>
                    <th class="text-left">Progress</th>
                    <th class="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>
                      <v-img
                        class="w-10 h-10 object-cover"
                        :src="item.logo"
                        alt
                      />
                    </td>
                    <td class="whitespace-no-wrap">{{ item.started }}</td>
                    <td class="font-semibold text--disabled whitespace-no-wrap">
                      {{ item.course }}
                    </td>
                    <td>
                      <v-progress-linear
                        v-model="item.progress"
                        rounded
                        color="blue darken-1"
                      />
                    </td>
                    <td>
                      <v-btn
                        class="mx-2 shadow-none orange darken-1"
                        fab
                        dark
                        x-small
                      >
                        <v-icon>mdi-play</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </base-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" md="12" lg="4" class="mt-3">
      <base-card>
        <v-card-text class>
          <v-sheet 
            
            color="grey lighten-4"  
           
            class="text-center  mb-6  p-4 rounded-lg">
            <v-img
              class="mx-auto"
              max-width="100"
              min-width="100"
              src="@/assets/images/illustrations/upgrade.svg"
            />
            <p class="m-0 pt-4 pb-4 font-normal">
              Upgrade to
              <b>PRO</b> for <br />more resources
            </p>
            <div class="">
              <v-btn color="primary">UPGRADE NOW</v-btn>
            </div>
          </v-sheet>

          <div class="mb-10">
            <h6 class="text-xs text--disabled tracking-widest">ACHIEVEMENTS</h6>
            <div class="flex items-center">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar>
                    <img
                      v-bind="attrs"
                      class="w-6 h-6 mr-4"
                      src="@/assets/images/illustrations/badge-1.svg"
                      v-on="on"
                    />
                  </v-avatar>
                </template>
                <span>Completed First Course</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar>
                    <img
                      v-bind="attrs"
                      class="w-6 h-6 mr-4"
                      src="@/assets/images/illustrations/badge-2.svg"
                      v-on="on"
                    />
                  </v-avatar>
                </template>
                <span>Won a challenge</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar>
                    <img
                      v-bind="attrs"
                      class="w-6 h-6 mr-4"
                      src="@/assets/images/illustrations/badge-3.svg"
                      v-on="on"
                    />
                  </v-avatar>
                </template>
                <span>Won a competition</span>
              </v-tooltip>
            </div>
          </div>

          <div class="mb-10">
            <h6 class="text-xs text--disabled tracking-widest">ACHIEVEMENTS</h6>

            <v-list-item class="p-0" v-for="item in items" :key="item.title">
              <v-list-item-avatar>
                <v-icon :class="[item.iconClass]" v-text="item.icon" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  class="text-sm font-semibold"
                  v-text="item.title"
                />
                <v-list-item-subtitle v-text="item.subtitle" />
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="text-gray-700 blue-grey--text text--darken-1"
                    >mdi-dots-horizontal</v-icon
                  >
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </div>
          <div class="mb-10">
            <h6 class="text-xs text--disabled tracking-widest">
              UPCOMING CHALLENGES
            </h6>

            <v-list-item class="p-0" v-for="item in itemsTwo" :key="item.title">
              <v-list-item-avatar>
                <v-icon :class="[item.iconClass]" v-text="item.icon" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  class="text-sm font-semibold"
                  v-text="item.title"
                />
                <v-list-item-subtitle v-text="item.subtitle" />
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="text-gray-700">mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </div>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
import lmCard from "@/components/card/LmsCard";
import { welcomeProgressChart, studyChart } from "@/data/learningManagement";
export default {
  name: "LearningManagement",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Learning Management",
  },
  components: {
    lmCard,
  },
  data() {
    return {
      welcomeProgressChart,
      studyChart,
      valueDeterminate: 50,
      valueDeterminate2: 80,
      desserts: [
        {
          logo: require("@/assets/images/Angular_Icon.png"),
          started: "20 May, 2020",
          course: "Angular Beyond The Basics",
          progress: 100,
        },
        {
          logo: require("@/assets/images/react.png"),
          started: "20 May, 2020",
          course: "React Development Course",
          progress: 30,
        },
        {
          logo: require("@/assets/images/webpack.png"),
          started: "20 May, 2020",
          course: "Webpack For Busy Developer",
          progress: 50,
        },
        {
          logo: require("@/assets/images/Sass_icon.png"),
          started: "20 May, 2020",
          course: "Bootstrap For Everyone",
          progress: 70,
        },
        {
          logo: require("@/assets/images/bootstrap-logo.png"),
          started: "20 May, 2020",
          course: "React Development Course",
          progress: 20,
        },
      ],
      items: [
        {
          icon: "mdi-view-column",
          iconClass: "bg-gray-300 text-gray-600",
          title: "Data structure test",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-book-open-variant",
          iconClass: "bg-gray-300 text-gray-600",
          title: "Design Pattern Test",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-gamepad",
          iconClass: "bg-gray-300 text-gray-600",
          title: "Algorithm Test",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-calendar-text",
          iconClass: "bg-gray-300 text-gray-600",
          title: "Spanish 201",
          subtitle: "23 Dec 2020",
        },
      ],
      itemsTwo: [
        {
          icon: "mdi-web",
          iconClass: "bg-gray-300 text-gray-600",
          title: "Create Simple Wrbsite",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-view-list-outline",
          iconClass: "bg-gray-300 text-gray-600",
          title: "Simple Todo App",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-apps-box",
          iconClass: "bg-gray-300 text-gray-600",
          title: "Invoice App",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-order-bool-ascending-variant",
          iconClass: "bg-gray-300 text-gray-600",
          title: "Order management app",
          subtitle: "23 Dec 2020",
        },
      ],
    };
  },
};
</script>
