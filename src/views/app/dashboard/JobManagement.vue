<template>
  <v-row>
    <v-col cols="12" lg="8">
      <v-row>
        <v-col cols="12" md="6">
          <base-card>
            <v-list-item three-line>
              <v-list-item-content>
                <!-- <v-list-item-subtitle class="text-sm">Total</v-list-item-subtitle> -->
                <div class="text-sm mb-0 text--disabled">Total</div>
                <v-list-item-title class="headline mb-1 font-semibold"
                  >5672</v-list-item-title
                >
                <v-list-item-subtitle>
                  <div class="flex flex-wrap">
                    <div
                      style="max-width: 16px"
                      class="bg-purple-200 h-4 w-4 d-inline-flex align-center justify-center rounded-circle mr-1"
                    >
                      <v-icon class="text-info text-xs"
                        >mdi-arrow-top-right</v-icon
                      >
                    </div>
                    <span class="font-semibold text-info">14% Inc</span>
                  </div>
                </v-list-item-subtitle>
              </v-list-item-content>

              <apexchart
                width="100"
                height="150"
                type="radialBar"
                :options="jmPieChartOne.chartOptions"
                :series="jmPieChartOne.series"
              />
            </v-list-item>
          </base-card>
        </v-col>
        <v-col cols="12" md="6">
          <base-card>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-sm text--disabled mb-0">Shortlist</div>
                <v-list-item-title class="headline mb-1 font-semibold"
                  >3045</v-list-item-title
                >
                <v-list-item-subtitle>
                  <div class="flex flex-wrap">
                    <div
                      class="h-4 w-4 d-inline-flex align-center justify-center rounded-circle mr-1 bg-red-200"
                    >
                      <v-icon class="text-warning text-xs"
                        >mdi-arrow-top-right</v-icon
                      >
                    </div>
                    <span class="font-semibold text-warning">+04% Inc</span>
                  </div>
                </v-list-item-subtitle>
              </v-list-item-content>

              <apexchart
                width="100"
                height="150"
                type="radialBar"
                :options="jmPieChartTwo.chartOptions"
                :series="jmPieChartTwo.series"
              />
            </v-list-item>
          </base-card>
        </v-col>
        <v-col cols="12" md="7">
          <base-card>
            <v-card-title class="justify-between">
              <div class="card-title m-0">Job Applications Last Week</div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon color="primary" v-on="on">
                    <v-icon class="text-base">mdi-calendar</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item>
                    <v-list-item-title>Year</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text>
              <apexchart
                type="bar"
                height="285"
                :options="jmBarChart.chartOptions"
                :series="jmBarChart.series"
              />
            </v-card-text>
          </base-card>
        </v-col>
        <v-col cols="12" md="5">
          <base-card>
            <v-card-title class="justify-between">
              <div class="card-title m-0">Acquisitions</div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon color="primary" v-on="on">
                    <v-icon class="text-base">mdi-calendar</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item>
                    <v-list-item-title>Year</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text>
              <div class="flex justify-between items-center flex-wrap mb-5">
                <div class="mr-2">
                  <v-icon class="text-xs text-pink-500"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">Applications</p>
                </div>

                <div class="flex-grow-1 px-4">
                  <v-progress-linear
                    v-model="valueDeterminate"
                    rounded
                    color="bg-pink-500 accent-4"
                  />
                </div>
                <div class>25%</div>
              </div>
              <div class="flex justify-between items-center flex-wrap mb-5">
                <div class="mr-2">
                  <v-icon class="text-xs text-blue-500"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">Shortlisted</p>
                </div>

                <div class="flex-grow-1 px-4">
                  <v-progress-linear
                    v-model="valueDeterminate2"
                    rounded
                    color="bg-blue-500 accent-4"
                  />
                </div>
                <div class>15%</div>
              </div>
              <div class="flex justify-between items-center flex-wrap mb-5">
                <div class="mr-2">
                  <v-icon class="text-xs text-pink-500"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">Contacted</p>
                </div>

                <div class="flex-grow-1 px-4">
                  <v-progress-linear
                    v-model="valueDeterminate3"
                    rounded
                    color="bg-pink-500 accent-4"
                  />
                </div>
                <div class>65%</div>
              </div>
              <div class="flex justify-between items-center flex-wrap mb-5">
                <div class="mr-2">
                  <v-icon class="text-xs text-blue-500"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">Rejected</p>
                </div>

                <div class="flex-grow-1 px-4">
                  <v-progress-linear
                    v-model="valueDeterminate4"
                    rounded
                    color="bg-blue-500 accent-4"
                  />
                </div>
                <div class>35%</div>
              </div>
              <div class="flex justify-between items-center flex-wrap mb-5">
                <div class="mr-2">
                  <v-icon class="text-xs text-pink-500"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">On Hold</p>
                </div>

                <div class="flex-grow-1 px-4">
                  <v-progress-linear
                    v-model="valueDeterminate5"
                    rounded
                    color="bg-pink-500 accent-4"
                  />
                </div>
                <div class>35%</div>
              </div>
              <div class="flex justify-between items-center flex-wrap mb-5">
                <div class="mr-2">
                  <v-icon class="text-xs text-blue-500"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">Finalised</p>
                </div>

                <div class="flex-grow-1 px-4">
                  <v-progress-linear
                    v-model="valueDeterminate4"
                    rounded
                    color="bg-blue-500 accent-4"
                  />
                </div>
                <div class>25%</div>
              </div>
              <div class="flex justify-between items-center flex-wrap mb-5">
                <div class="mr-2">
                  <v-icon class="text-xs text-pink-500"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">Hired</p>
                </div>

                <div class="flex-grow-1 px-4">
                  <v-progress-linear
                    v-model="valueDeterminate6"
                    rounded
                    color="bg-pink-500 accent-4"
                  />
                </div>
                <div class>15%</div>
              </div>
            </v-card-text>
          </base-card>
        </v-col>
        <v-col cols="12">
          <base-card>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Job Post</th>
                    <th class="text-left">Posted at</th>
                    <th class="text-left">Applicants</th>
                    <th class="text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in desserts" :key="index">
                    <td
                      class="font-semibold border-transparent whitespace-no-wrap"
                    >
                      {{ item.job }}
                    </td>
                    <td class="border-transparent whitespace-no-wrap">
                      {{ item.posted }}
                    </td>
                    <td class="border-transparent">
                      <avatar-group-card></avatar-group-card>
                    </td>
                    <td class="border-transparent">
                      <v-menu left bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn icon color v-on="on">
                            <v-icon class>mdi-dots-horizontal</v-icon>
                          </v-btn>
                        </template>

                        <v-list>
                          <v-list-item @click>
                            <v-icon class="text-base mr-2"
                              >mdi-briefcase-account</v-icon
                            >
                            <v-list-item-title>Month</v-list-item-title>
                          </v-list-item>
                          <v-list-item @click>
                            <v-icon class="text-base mr-2"
                              >mdi-account-multiple</v-icon
                            >
                            <v-list-item-title>Week</v-list-item-title>
                          </v-list-item>
                          <v-list-item @click>
                            <v-icon class="text-base mr-2"
                              >mdi-account-plus</v-icon
                            >
                            <v-list-item-title
                              >Invite Applicant</v-list-item-title
                            >
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </base-card>
        </v-col>
        <v-col cols="12">
          <base-card>
            <v-card-title class="justify-between">
              <div class="card-title m-0">Application Received Time</div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon color="primary" v-on="on">
                    <v-icon class="text-base">mdi-calendar</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item>
                    <v-list-item-title>View</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Add Item</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Delete</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text>
              <apexchart
                type="line"
                height="350"
                :options="jmLineChart.chartOptions"
                :series="jmLineChart.series"
              />
            </v-card-text>
          </base-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" lg="4" class="mt-3">
      <base-card>
        <v-row>
          <v-col cols="12" class="text-center">
            <v-avatar size="90">
              <v-img src="@/assets/images/faces/15.jpg" />
            </v-avatar>
            <div class="card-title m-0 text-xl">Jhon Doe</div>
            <p class="text-muted mb-1">HR Manager</p>
            <div class="flex items-center justify-center">
              <v-icon class="text-primary text-base mr-1"
                >mdi-map-marker</v-icon
              >
              <span class="text-primary text-12">New York, US</span>
            </div>
          </v-col>
          <v-col cols="12" class="mb-0">
            <v-card-subtitle class="pt-0">
              <h6 class="text-xs tracking-widest">ACHIEVEMENTS</h6>
            </v-card-subtitle>
            <v-card-text class="pb-0">
              <div class="pr-sm flex justify-between bg-primary rounded p-4">
                <div class="flex-1">
                  <div class="card-title text-white mb-xs text-15 mb-1">
                    Sr. Software Developer
                  </div>
                  <p class="m-0 text-xs flex text-white">
                    <span
                      style="max-width: 1.25rem"
                      class="rounded-full bg-blue-400 h-5 w-5 text-white flex items-center justify-center mr-1"
                      >95</span
                    >
                    Total Applications
                  </p>
                </div>
                <v-menu left bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn icon color v-on="on">
                      <v-icon class="text-white">mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item @click>
                      <v-icon class="text-base mr-2">mdi-eye-off</v-icon>
                      <v-list-item-title>Unpublish</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click>
                      <v-icon class="text-base mr-2">mdi-lead-pencil</v-icon>
                      <v-list-item-title>Edit Job Post</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click>
                      <v-icon class="text-base mr-2">mdi-trash-can</v-icon>
                      <v-list-item-title>Delete</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-card-text>
          </v-col>
          <v-col cols="12">
            <v-card-text>
              <div class="mb-10">
                <v-card-subtitle class="p-0">
                  <h6 class="text-xs tracking-widest">REMINDER</h6>
                </v-card-subtitle>
                <v-list-item
                  class="pl-0"
                  v-for="item in items"
                  :key="item.title"
                >
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
          </v-col>
        </v-row>
      </base-card>
      <v-row>
        <v-col cols="12">
          <base-card>
            <v-card-title class="justify-between">
              <div class="card-title m-0">Candidates by Gender</div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon color="primary" v-on="on">
                    <v-icon class="text-base">mdi-calendar</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item>
                    <v-list-item-title>Year</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text>
              <apexchart
                type="donut"
                :options="jmDonutChart.chartOptions"
                :series="jmDonutChart.series"
              />
            </v-card-text>
          </base-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import avatarGroupCard from "@/components/card/AvatarGroupCard";
import {
  jmPieChartOne,
  jmPieChartTwo,
  jmBarChart,
  jmLineChart,
  jmDonutChart,
} from "@/data/jobManagement";

export default {
  name: "job-management",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Job Management",
  },
  components: {
    avatarGroupCard,
  },
  data() {
    return {
      jmPieChartOne,
      jmPieChartTwo,
      jmBarChart,
      jmLineChart,
      jmDonutChart,
      valueDeterminate: 50,
      valueDeterminate2: 20,
      valueDeterminate3: 60,
      valueDeterminate4: 34,
      valueDeterminate5: 35,
      valueDeterminate6: 15,
      desserts: [
        {
          job: "Senior Fullstack Engineer",
          posted: "01/10/2020",
          applicants: require("@/assets/images/avatars/001-man.svg"),
        },
        {
          job: "Freelance Java Developer",
          posted: "01/10/2020",
          applicants: require("@/assets/images/avatars/001-man.svg"),
        },
        {
          job: "Python Developer",
          posted: "01/10/2020",
          applicants: require("@/assets/images/avatars/001-man.svg"),
        },
        {
          job: "Product Designer",
          posted: "01/10/2020",
          applicants: require("@/assets/images/avatars/001-man.svg"),
        },
      ],
      items: [
        {
          icon: "mdi-view-column",
          iconClass: "bg-gray-300 text-gray-600",
          title: "Subscription expires today",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-close-circle",
          iconClass: "bg-gray-300 text-gray-600",
          title: "You unpublished a Job",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-account-group",
          iconClass: "bg-gray-300 text-gray-600",
          title: "5 New applicants",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-comment-account-outline",
          iconClass: "bg-gray-300 text-gray-600",
          title: "New Commnet on job post",
          subtitle: "23 Dec 2020",
        },
      ],
    };
  },
};
</script>
