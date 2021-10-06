<template>
  <div>
    <!-- /testting  -->
    <div class="scrumboard-x">
   
        <div class="scrumboard-col">
          <base-card>
            <v-card-title>
              <div class="flex justify-between">
                File
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      color="dark"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="">
                      <v-list-item-title>Action</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="">
                      <v-list-item-title>Another Action</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="">
                      <v-list-item-title>Something else</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-card-title>
            <draggable
              class="list-group"
              :list="list1"
              ghost-class="ghost"
              group="people"
              v-bind="dragOptions"
            >
              <transition-group
                type="transition"
                name="flip-list"
              >
                <base-card
                  v-for="(element, index) in list1"
                  :key="element.name"
                  class="list-group-item sortable"
                >
                  <v-card-text>
                    <div class="flex mb-4">
                      <v-icon class="text-15 green--text text--darken-1 mr-1">
                        mdi-check-decagram
                      </v-icon>
                      <p class="m-0 green--text text--darken-1">
                        Completed
                      </p>
                    </div>
                    <p class="font-bold">
                      {{ element.name }}
                    </p>
                    <div class="flex justify-between items-center">
                      <span class="text-xs text--disabled font-semibold"> <v-icon class="text-base ">mdi-timer-outline</v-icon> 5/2/2020
                      </span>
                      <v-avatar>
                        <v-img
                          :src="element.img"
                          alt="John"
                        >
                        </v-img>
                      </v-avatar>
                    </div>
                  </v-card-text>
                </base-card>
              </transition-group>
            </draggable>
          </base-card>
        </div>
        <div class="scrumboard-col">
          <base-card>
            <v-card-title>
              <div class="flex justify-between">
                File Two
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      color="dark"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="">
                      <v-list-item-title>Action</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="">
                      <v-list-item-title>Another Action</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="">
                      <v-list-item-title>Something else</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-card-title>
            <v-card-text>
              <draggable
                class="list-group"
                :list="list2"
                ghost-class="ghost"
                group="people"
                v-bind="dragOptions"
              >
                <transition-group
                  type="transition"
                  name="flip-list"
                >
                  <base-card
                    v-for="(element, index) in list2"
                    :key="element.name"
                    class="list-group-item sortable"
                  >
                    <v-card-text>
                      <div class="flex mb-4">
                        <v-icon class="text-15 green--text text--darken-1 mr-1">
                          mdi-check-decagram
                        </v-icon>
                        <p class="m-0 green--text text--darken-1">
                          Completed
                        </p>
                      </div>
                      <p class="font-bold">
                        {{ element.name }}
                      </p>
                      <div class="flex justify-between items-center">
                        <span class="text-xs text--disabled font-semibold"> <v-icon class="text-base ">mdi-timer-outline</v-icon> 5/2/2020
                        </span>
                        <v-avatar>
                          <v-img
                            :src="element.img"
                            alt="John"
                          >
                          </v-img>
                        </v-avatar>
                      </div>
                    </v-card-text>
                  </base-card>
                </transition-group>
              </draggable>
            </v-card-text>
          </base-card>
        </div>
        <div class="scrumboard-col">
          <base-card>
            <v-card-title>
              <div class="flex justify-between">
                File Two
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      color="dark"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="">
                      <v-list-item-title>Action</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="">
                      <v-list-item-title>Another Action</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="">
                      <v-list-item-title>Something else</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-card-title>
            <v-card-text>
              <draggable
                class="list-group"
                :list="list2"
                ghost-class="ghost"
                group="people"
                v-bind="dragOptions"
              >
                <transition-group
                  type="transition"
                  name="flip-list"
                >
                  <base-card
                    v-for="(element, index) in list2"
                    :key="element.name"
                    class="list-group-item sortable"
                  >
                    <v-card-text>
                      <div class="flex mb-4">
                        <v-icon class="text-15 green--text text--darken-1 mr-1">
                          mdi-check-decagram
                        </v-icon>
                        <p class="m-0 green--text text--darken-1">
                          Completed
                        </p>
                      </div>
                      <p class="font-bold">
                        {{ element.name }}
                      </p>
                      <div class="flex justify-between items-center">
                        <span class="text-xs text--disabled font-semibold"> <v-icon class="text-base ">mdi-timer-outline</v-icon> 5/2/2020
                        </span>
                        <v-avatar>
                          <v-img
                            :src="element.img"
                            alt="John"
                          >
                          </v-img>
                        </v-avatar>
                      </div>
                    </v-card-text>
                  </base-card>
                </transition-group>
              </draggable>
            </v-card-text>
          </base-card>
        </div>
        <div class="scrumboard-col">
          <base-card>
            <v-card-title>
              <div class="flex justify-between">
                File Two
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      color="dark"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="">
                      <v-list-item-title>Action</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="">
                      <v-list-item-title>Another Action</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="">
                      <v-list-item-title>Something else</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-card-title>
            <v-card-text>
              <draggable
                class="list-group"
                :list="list2"
                ghost-class="ghost"
                group="people"
                v-bind="dragOptions"
              >
                <transition-group
                  type="transition"
                  name="flip-list"
                >
                  <base-card
                    v-for="(element, index) in list2"
                    :key="element.name"
                    class="list-group-item sortable"
                  >
                    <v-card-text>
                      <div class="flex mb-4">
                        <v-icon class="text-15 green--text text--darken-1 mr-1">
                          mdi-check-decagram
                        </v-icon>
                        <p class="m-0 green--text text--darken-1">
                          Completed
                        </p>
                      </div>
                      <p class="font-bold">
                        {{ element.name }}
                      </p>
                      <div class="flex justify-between items-center">
                        <span class="text-xs text--disabled font-semibold"> <v-icon class="text-base ">mdi-timer-outline</v-icon> 5/2/2020
                        </span>
                        <v-avatar>
                          <v-img
                            :src="element.img"
                            alt="John"
                          >
                          </v-img>
                        </v-avatar>
                      </div>
                    </v-card-text>
                  </base-card>
                </transition-group>
              </draggable>
            </v-card-text>
          </base-card>
        </div>
        <div class="scrumboard-col">
          <base-card>
            <v-card-title>
              <div class="flex justify-between">
                File Two
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      color="dark"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="">
                      <v-list-item-title>Action</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="">
                      <v-list-item-title>Another Action</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="">
                      <v-list-item-title>Something else</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-card-title>
            <v-card-text>
              <draggable
                class="list-group"
                :list="list2"
                ghost-class="ghost"
                group="people"
                v-bind="dragOptions"
              >
                <transition-group
                  type="transition"
                  name="flip-list"
                >
                  <base-card
                    v-for="(element, index) in list2"
                    :key="element.name"
                    class="list-group-item sortable"
                  >
                    <v-card-text>
                      <div class="flex mb-4">
                        <v-icon class="text-15 green--text text--darken-1 mr-1">
                          mdi-check-decagram
                        </v-icon>
                        <p class="m-0 green--text text--darken-1">
                          Completed
                        </p>
                      </div>
                      <p class="font-bold">
                        {{ element.name }}
                      </p>
                      <div class="flex justify-between items-center">
                        <span class="text-xs text--disabled font-semibold"> <v-icon class="text-base ">mdi-timer-outline</v-icon> 5/2/2020
                        </span>
                        <v-avatar>
                          <v-img
                            :src="element.img"
                            alt="John"
                          >
                          </v-img>
                        </v-avatar>
                      </div>
                    </v-card-text>
                  </base-card>
                </transition-group>
              </draggable>
            </v-card-text>
          </base-card>
        </div>
        <div class="scrumboard-col">
          <base-card>
            <v-card-text>
              <v-btn
                block
                color="primary"
                large
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                Add Column
              </v-btn>
            </v-card-text>
          </base-card>
        </div>
    
    </div>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    name: "Scrumboard",
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Scrumboard",
    },
    components: {
      draggable,
    },
    computed: {
    
      dragOptions() {
        return {
          animation: 200,
          group: "description",
          disabled: false
        };
      }
    },
    data () {
      return {

        list1: [
          { name: 'Lorem Ipsum is simply dummy text of the printing and One', id: 1, img: require('@/assets/images/faces/1.jpg') },
          { name: 'Lorem Ipsum is simply dummy he printing and typesetting Two', id: 2, img: require('@/assets/images/faces/2.jpg') },
          { name: 'Lorem Ipsum is simply dummy text of  printing and typesetting Three', id: 3, img: require('@/assets/images/faces/3.jpg') },
          { name: 'Lorem Ipsum is simply  text of the printing and typesetting Four', id: 4, img: require('@/assets/images/faces/4.jpg') },
        ],
        list2: [
          { name: 'Lorem Ipsum is simply dummy text of the printing and typesetting Five', id: 5, img: require('@/assets/images/faces/4.jpg') },
          { name: 'Lorem Ipsum is simply dummy he printing and typesetting Six', id: 6, img: require('@/assets/images/faces/15.jpg') },
          { name: 'Lorem Ipsum is simply  text of the printing and typesetting Seven', id: 7, img: require('@/assets/images/faces/16.jpg') },
        ],
        oldIndex: '',
        newIndex: '',
      }
    },
  }
</script>
<style lang="scss" scoped>
.scrumboard-x {
  overflow: auto;
  white-space: nowrap;
  height: calc(100vh - 250px);
}
.scrumboard-col {
  width: 350px;
  display: inline-block;
  vertical-align: text-top;
  margin: 0 1rem;
  
}
</style>
