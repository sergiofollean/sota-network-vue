<template>
  <div class="app-content-wrapper apps-wrapper --filemanager shadow-lg">
    <div
      :class="{open: isBlock}"
      class="app-overlay"
      @click="overlayApp"
    />
    <div
      :class="{open: isOpen}"
      class="app-sidebar"
    >
      <div class="app-sidebar-header white py-5 ">
        <v-btn
          class="rounded-lg py-5"
          tile
          block
          color="primary"
        >
          <v-icon left>
            mdi-file-plus
          </v-icon> Add File
        </v-btn>
      </div>
      <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="h-100 rtl-ps-none ps scroll"
        style="height:100%"
      >
        <div class="app-sidebar-body mt-6">
          <v-list flat>
            <v-subheader class="text-muted font-semibold uppercase">
              MY drive
            </v-subheader>
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                class="px-10"
              >
                <v-list-item-icon class="mr-3">
                  <v-icon v-text="item.icon" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="font-medium"
                    v-text="item.text"
                  />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-list flat>
            <v-subheader class="text-muted font-semibold uppercase">
              Labels
            </v-subheader>
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in itemsTwo"
                :key="i"
                class="px-10"
              >
                <v-list-item-icon class="mr-3">
                  <v-icon v-text="item.icon" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="font-medium"
                    v-text="item.text"
                  />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-list
            disabled
            dense
            two-line
          >
            <v-subheader class="text-muted font-semibold uppercase pl-2">
              storage
            </v-subheader>
            <v-list-item-group
              color="primary"
              class=""
            >
              <v-list-item
                class="m-0"
              >
                <v-list-item-icon class="mr-1 pt-4">
                  <v-icon>mdi-floppy</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="font-semibold"
                  >
                    2Gb used of 30GB
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-progress-linear
                      value="80"
                      class="w-24"
                    />
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </vue-perfect-scrollbar>
    </div>
    <div class="app-content relative">
      <div class="app-header white">
        <div class="flex justify-between flex-wrap items-baseline">
          <div class="">
            <!-- app-icon class -->
            <div
              class="nested-sidebar-toggle md:hidden sm:block"
              @click="appToggle"
            >
              <v-icon color="dark">
                mdi-menu-open
              </v-icon>
            </div>
            <v-text-field
              hide-details="auto"
              class="sm:hidden md:flex m-0 p-0"
              label="Search"
              outlined
              dense
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </div>
          <div>
            <v-btn
              icon
              color="primary"
            >
              <v-icon>mdi-account-check</v-icon>
            </v-btn>
            <v-btn
              icon
              color="primary"
            >
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
            <v-btn
              icon
              color="primary"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="h-100 rtl-ps-none ps scroll"
        style="height:100%"
      >
        <div class="app-body mt-10 px-8">
          <v-row>
            <v-col
              cols="12"
              class=""
            >
              <div class="card-title">
                All Files
              </div>
              <p class="font-semibold m-0 text-muted text-12">
                RECENTLY ACCESSED FILES
              </p>
            </v-col>
          </v-row>
          <div class="grid filemanager-content">
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <div class="py-6">
                <v-img
                  class="w-10 h-auto m-auto"
                  src="@/assets/images/react.png"
                />
              </div>
              <v-card-text>
                <p class="card-text font-semibold m-0">Filemanager.pdf</p>
                <p class="text-muted font-semibold m-0">20.5kb</p>
                <p class="m-0 text-sm">Last accessed: 3 Hours ago</p>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <div class="py-6">
                <v-img
                  class="w-10 h-auto m-auto"
                  src="@/assets/images/Sass_icon.png"
                />
              </div>
              <v-card-text>
                <p class="card-text font-semibold m-0">Filemanager.pdf</p>
                <p class="text-muted font-semibold m-0">20.5kb</p>
                <p class="m-0 text-sm">Last accessed: 3 Hours ago</p>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <div class="py-6">
                <v-img
                  class="w-10 h-auto m-auto"
                  src="@/assets/images/Angular_Icon.png"
                />
              </div>
              <v-card-text>
                <p class="card-text font-semibold m-0">Filemanager.pdf</p>
                <p class="text-muted font-semibold m-0">20.5kb</p>
                <p class="m-0 text-sm">Last accessed: 3 Hours ago</p>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <div class="py-6">
                <v-img
                  class="w-10 h-auto m-auto"
                  src="@/assets/images/webpack.png"
                />
              </div>
              <v-card-text>
                <p class="card-text font-semibold m-0">Filemanager.pdf</p>
                <p class="text-muted font-semibold m-0">20.5kb</p>
                <p class="m-0 text-sm">Last accessed: 3 Hours ago</p>
              </v-card-text>
            </div>
          </div>
          <v-row>
            <v-col
              cols="12"
              class=""
            >
              <p class="font-semibold m-0 text-muted text-12">
                FOLDER
              </p>
            </v-col>
          </v-row>
          <div class="grid filemanager-content">
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <v-card-text>
                <div class="flex items-center">
                  <v-icon class="mr-2">
                    mdi-folder-outline
                  </v-icon>
                  <div>
                    <p class="font-semibold m-0">Project</p>
                    <p class="text-muted m-0 text-sm"> 2 files, 3.05mb </p>
                  </div>
                </div>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <v-card-text>
                <div class="flex items-center">
                  <v-icon class="mr-2">
                    mdi-folder-outline
                  </v-icon>
                  <div>
                    <p class="font-semibold m-0">Video</p>
                    <p class="text-muted m-0 text-sm"> 25 files, 35mb </p>
                  </div>
                </div>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <v-card-text>
                <div class="flex items-center">
                  <v-icon class="mr-2">
                    mdi-folder-outline
                  </v-icon>
                  <div>
                    <p class="font-semibold m-0">Music</p>
                    <p class="text-muted m-0 text-sm"> 2 files, 3.05mb </p>
                  </div>
                </div>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <v-card-text>
                <div class="flex items-center">
                  <v-icon class="mr-2">
                    mdi-folder-outline
                  </v-icon>
                  <div>
                    <p class="font-semibold m-0">Documents</p>
                    <p class="text-muted m-0 text-sm"> 2 files, 3.05mb </p>
                  </div>
                </div>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <v-card-text>
                <div class="flex items-center">
                  <v-icon class="mr-2">
                    mdi-folder-outline
                  </v-icon>
                  <div>
                    <p class="font-semibold m-0">Application Design</p>
                    <p class="text-muted m-0 text-sm"> 2 files, 3.05mb </p>
                  </div>
                </div>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <v-card-text>
                <div class="flex items-center">
                  <v-icon class="mr-2">
                    mdi-folder-outline
                  </v-icon>
                  <div>
                    <p class="font-semibold m-0">Photos</p>
                    <p class="text-muted m-0 text-sm"> 2 files, 3.05mb </p>
                  </div>
                </div>
              </v-card-text>
            </div>
          </div>
          <v-row>
            <v-col
              cols="12"
              class=""
            >
              <p class="font-semibold m-0 text-muted text-12">
                FOLDER
              </p>
            </v-col>
          </v-row>
          <div class="grid filemanager-content">
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <div class="py-6">
                <v-img
                  class="w-10 h-auto m-auto"
                  src="@/assets/images/react.png"
                />
              </div>
              <v-card-text>
                <p class="card-text font-semibold m-0">Filemanager.pdf</p>
                <p class="text-muted font-semibold m-0">20.5kb</p>
                <p class="m-0 text-sm">Last accessed: 3 Hours ago</p>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <div class="py-6">
                <v-img
                  class="w-10 h-auto m-auto"
                  src="@/assets/images/Sass_icon.png"
                />
              </div>
              <v-card-text>
                <p class="card-text font-semibold m-0">Filemanager.pdf</p>
                <p class="text-muted font-semibold m-0">20.5kb</p>
                <p class="m-0 text-sm">Last accessed: 3 Hours ago</p>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <div class="py-6">
                <v-img
                  class="w-10 h-auto m-auto"
                  src="@/assets/images/Angular_Icon.png"
                />
              </div>
              <v-card-text>
                <p class="card-text font-semibold m-0">Filemanager.pdf</p>
                <p class="text-muted font-semibold m-0">20.5kb</p>
                <p class="m-0 text-sm">Last accessed: 3 Hours ago</p>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <div class="py-6">
                <v-img
                  class="w-10 h-auto m-auto"
                  src="@/assets/images/webpack.png"
                />
              </div>
              <v-card-text>
                <p class="card-text font-semibold m-0">Filemanager.pdf</p>
                <p class="text-muted font-semibold m-0">20.5kb</p>
                <p class="m-0 text-sm">Last accessed: 3 Hours ago</p>
              </v-card-text>
            </div>
            <div class="eg-filemanager  rounded shadow-md mr-3 mb-3">
              <div class="py-6">
                <v-img
                  class="w-10 h-auto m-auto"
                  src="@/assets/images/laravel-logo.png"
                />
              </div>
              <v-card-text>
                <p class="card-text font-semibold m-0">Filemanager.pdf</p>
                <p class="text-muted font-semibold m-0">20.5kb</p>
                <p class="m-0 text-sm">Last accessed: 3 Hours ago</p>
              </v-card-text>
            </div>
          </div>
        </div>
      </vue-perfect-scrollbar>
    </div>
  </div>
</template>
<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  export default {
    name: "Filemanager",
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Filemanager",
    },
    components: {
      VuePerfectScrollbar,
    },
    data: () => ({
      isOpen: false,
      isBlock: false,
      // item: 1,
      // itemsTwo: 0,
      items: [
        { text: 'Admin Information', icon: 'mdi-folder-outline' },
        { text: 'My Devices', icon: 'mdi-devices' },
        { text: 'Recents', icon: 'mdi-clock-outline' },
        { text: 'Important', icon: 'mdi-star-half-full' },
        { text: 'Delete Files', icon: 'mdi-trash-can' },
      ],
      itemsTwo: [
        { text: 'Admin Information', icon: 'mdi-folder-outline' },
        { text: 'My Devices', icon: 'mdi-devices' },
        { text: 'Recents', icon: 'mdi-clock-outline' },
        { text: 'Important', icon: 'mdi-star-half-full' },
        { text: 'Delete Files', icon: 'mdi-trash-can' },
      ],
    }),
    methods: {
      appToggle: function () {
        this.isOpen = !this.isOpen
        this.isBlock = !this.isBlock
      },
      overlayApp: function () {
        this.isOpen = !this.isOpen
        this.isBlock = !this.isBlock
      },
    },
  }
</script>
