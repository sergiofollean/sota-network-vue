<template>
  <div class="app-content-wrapper apps-wrapper">
    <div :class="{ open: isBlock }" class="app-overlay" @click="overlayApp" />
    <div :class="{ open: isOpen }" class="app-sidebar bg-white">
      <div class="app-sidebar-header white shadow">
        <v-text-field
          hide-details="auto"
          class="sm:hidden md:flex m-0 p-0"
          label="Search"
          outlined
          dense
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </div>
      <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="h-100 rtl-ps-none ps scroll app-sidebar-scroll"
        style="height: 100%;"
      >
        <div class="app-sidebar-body mt-5">
          <v-list two-line subheader>
            <v-subheader class="font-bold text-gray-600">Recent chat</v-subheader>
            <v-list-item
              v-for="(item, index) in itemsSb"
              :key="index"
              @click=""
              class=""
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
                <v-list-item-subtitle
                  v-html="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon class="self-center">
                <v-icon
                  class="text-base"
                  :color="item.active ? 'success' : 'grey'"
                >
                  mdi-record
                </v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>

          <v-divider />
          <v-list>
            <v-subheader class="font-bold text-gray-600">Contacts</v-subheader>
            <v-list-item-group
              v-model="item"
              color="primary"
            >
              <v-list-item
                v-for="(item, index) in contacts"
                :key="index"
                @click="contactView(item)"
                class="mb-3"
              >
                <v-list-item-avatar>
                  <v-img :src="item.avatar" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="item.name" />
                  <v-list-item-subtitle
                    v-html="item.status"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-icon class="self-center">
                  <v-icon
                    class="text-base"
                    :color="item.active ? 'success' : 'grey'"
                  >
                    mdi-record
                  </v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </vue-perfect-scrollbar>
    </div>
    <div class="app-content relative">
      <div class="app-header white">
        <div class="flex justify-between align-center">
          <div class="flex align-center">
            <div class="app-icon mr-2" @click="appToggle">
              <v-icon color>
                mdi-menu-open
              </v-icon>
            </div>
            <div class="flex align-center">
              <v-avatar size="41" class="mr-2">
                <img src="@/assets/images/faces/13.jpg" alt="">
              </v-avatar>
              <div>
                <p class="m-0 text-base font-semibold">Jason Oner</p>
              </div>
            </div>
          </div>
          <div>
            <v-btn
              icon
              color="primary"
              
            >
              <v-icon>mdi-phone</v-icon>
            </v-btn>
          </div>
        </div>

      </div>
      <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="rtl-ps-none ps scroll"
        style="height: calc(100% - 130px)"
      >
        <div class="app-body mt-12 px-4">

          
          <!-- <div>
            <div class="flex align-center mb-5">
              <v-avatar size="41" class="mr-4">
                <img src="@/assets/images/faces/13.jpg" alt="">
              </v-avatar>
              <p class="m-0 bg-primary text-white py-2 px-3 rounded">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div class="flex flex-reverse align-center mb-3 justify-end">
              <p class="m-0 white text-gray-900 py-2 px-3 rounded">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div class="flex align-center my-3">
              <v-divider></v-divider>
              <div class="px-3">01 May 20</div>
              <v-divider></v-divider>
            </div>
            
          </div> -->
          <div v-for="(chatList, index) in singleChatInfo" :key="index">
            <div class="flex align-center mb-5">
              <v-avatar size="41" class="mr-4">
                <img :src="chatList.avatar" alt="">
              </v-avatar>
              <p class="m-0 bg-primary text-white py-2 px-3 rounded">
                {{ chatList.text }}
              </p>
            </div>
            <div class="flex flex-reverse align-center mb-3 justify-end">
              <p class="m-0 white text-gray-900 py-2 px-3 rounded">
                 {{ chatList.textTwo }}
              </p>
            </div>
            <div class="flex align-center my-3">
              <v-divider></v-divider>
              <div class="px-3">01 May 20</div>
              <v-divider></v-divider>
            </div>
            
          </div>
        </div>
      </vue-perfect-scrollbar>
      <div class="app-footer white">
        <v-text-field
          @keyup.enter="sendMessage"
          solo
          auto-grow
          label="type message"
          v-model="newMessage"
          rows="2"
          row-height="10"
        ></v-text-field>
        
          
        
        <div class="flex justify-end pb-3 px-3">
          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark>mdi-send</v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark outlined small color="primary">
            <v-icon class="rotate-90" dark>mdi-attachment</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import axios from 'axios'

export default {
  name: "Chat",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Chat",
  },
  created(){
    axios.get('/api/chat/contacts')
      .then(response => this.contacts = response.data)
      .catch(err => console.log(err))
    axios.get('/api/chat/chats')
      .then(response => this.chats = response.data)
  },
  components: {
    VuePerfectScrollbar,
  },
  data: () => ({
    isOpen: false,
    isBlock: false,
    itemsSb: [
      {
        active: true,
        title: "Jason Oner",
        avatar: require("@/assets/images/faces/13.jpg"),
        subtitle: "<span class=''>3 Oct, 2018</span>",
      },
    ],
    currentChat: [],
    chatList: [],
    chatInfo: [],
    singleChatInfo: [],
    isLoading: false,
    item: 1,
    contacts: [],
    chats: [],
    newMessage: '',
  }),
  methods: {
    
    contactView(contact){
      let contactID = contact.id;
     
      axios.get('/api/chat/id', { contactID })
        .then((response) => { 
          // console.log(response.data.chats)
          this.singleChatInfo = response.data.chats
          
      })
    },
    
    sendMessage(){
      // this.chats.push({
      //   text: this.newMessage,
      //   textTwo: "Hi, I'm Jason Oner. Your imaginary friend."
      // })
      
      this.singleChatInfo.push({
        textTwo: this.newMessage,
        avatar:  require("@/assets/images/faces/2.jpg"),
        text: "Hi, I'm Jason Oner. Your imaginary friend."
      })
    },
    
    appToggle: function () {
      this.isOpen = !this.isOpen;
      this.isBlock = !this.isBlock;
    },
    overlayApp: function () {
      this.isOpen = !this.isOpen;
      this.isBlock = !this.isBlock;
    },

  
   
  },
   //   sendMessage: function() {
  //     axios.post('/api/chatInfo', { data: this.newChat })
  //       .then(response => {
  //         console.log(response.data);
  //         this.chatInfo.push({text: response.data})
  //         // setTimeout(function(){ alert("Hello"); }, 2000);
  //         setTimeout(() => {
  //           this.chatInfo.push({text: 'hello test'})
  //         }, 3000);
  //       })
  //     this.newChat = ''
        
  //   }
   
  // },
  
};
</script>
