<template>
  <div class="app-content-wrapper apps-wrapper shadow-lg">
    <div
      :class="{open: isBlock}"
      class="app-overlay"
      @click="overlayApp"
    />
    <div
      :class="{open: isOpen}"
      class="app-sidebar"
    >
      <div class="app-sidebar-header white  py-5">
        

      <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="rounded-lg py-5"
          tile
          block
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          New Task
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" >
                <v-text-field v-model="newTodo.taskName" label="Task name..." required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" >
                <v-text-field v-model="newTodo.msg" label="Add Descriptions" required></v-text-field>
              </v-col>
              
              
              
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="newTodo.items"
                  :items="['Frontend', 'Backend', 'Designer']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <!-- <v-select
                  v-model="newTodo.personAvatar"
                  :items="personAvatar"
                  label="Standard"
                ></v-select> -->

                <v-select :items="personsInfo" 
                  v-model="newTodo.personInfo"
                  item-text="name" 
                  item-value="image" single-line auto  label="Seleccionar Grupo">
                  <template v-slot:selection="{ item }">
                    <div>
                      <v-avatar size="30" class="mr-2">
                        <img :src="item.image" alt="">
                      </v-avatar>
                      <span class="m-0 p-0">{{item.name}}</span>
                    </div>
                  </template>  
                  <template v-slot:item="{ item }">
                    <div>
                      <v-avatar size="30" class="mr-2">
                        <img :src="item.image" alt="">
                      </v-avatar>
                      <span class="m-0 p-0">{{item.name}}</span>
                    </div>
                  </template>  
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="primary"  @click="addTodo">Save</v-btn>
          <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
          >
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn
                color="blue"
                text
                v-bind="attrs"
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </div>
      <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="h-100 rtl-ps-none ps scroll"
        style="height:100%"
      >
        <div class="app-sidebar-body mt-6">
          <v-list flat>
            <v-subheader class="text-muted font-semibold uppercase">
              Filters
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
                  <v-icon v-text="item.icon" :color="item.color" />
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
              class="nested-sidebar-toggle sm:block md:hidden"
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
              v-model="todoSearch"
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
        class="h-100 rtl-ps-none ps scroll app-sidebar-scroll"
        style="height:100%"
      >
        <div class="app-body mt-16 px-8 mb-10">    
            <!-- FOR DEMO  -->
           
            <div 
                v-for="(todo, index) in todos"
                :key="index"
                class="eg-todo-item flex justify-between flex-wrap align-center mb-5 white p-4 rounded"
              >
                
                  <div class="flex align-center">
                    <v-checkbox
                      v-model="todo.select"
                      
                    ></v-checkbox>
                    <h6 
                      class="m-0"
                      :class="{ 'line-through' : todo.select }"
                      @click="editTodo(todo)"
                      @click.stop="drawer = !drawer" 
                      
                    >{{ todo.title }}</h6>
                  </div>
                  <div class="" >
                    <div>
                      <v-chip
                        v-for="(chip, index2) in todo.tags"
                        :key="index2"
                        class="mr-2"
                        color="primary"
                        small
                        @click.stop="drawer = !drawer"
                      
                        >
                        {{chip}}
                      </v-chip>
                      <v-avatar class="ml-2" size="36"  @click.stop="drawer = !drawer"> 
                        <img :src="todo.avatar" alt="">
                      </v-avatar>
                      <v-btn icon class="ml-2" >
                        <v-icon>mdi-star</v-icon>
                      </v-btn>
                      <v-btn icon class="ml-2" @click="removeTodo(todo)">
                        <v-icon>mdi-trash-can-outline</v-icon>
                      </v-btn>
                    </div>
                  </div>
              </div>



            
          
         
          
         
        </div>
      </vue-perfect-scrollbar>
    </div>
    <!-- drawer  -->
          <div>
            
            <v-navigation-drawer
              v-model="drawer"
              absolute
              temporary
              right
            >
              <div class="p-3">
                <v-text-field
                  v-model="newEditTodo.title"
                  label="task name..."
                ></v-text-field>
                <v-text-field
                  v-model="newEditTodo.desc"
                  label="descriptions..."
                ></v-text-field>

                <v-select :items="personsInfo" 
                  v-model="newEditTodo.personInfo"
                  item-text="name" 
                  item-value="image" single-line auto  label="Seleccionar Grupo">
                  <template v-slot:selection="{ item }">
                    <div>
                      <v-avatar size="30" class="mr-2">
                        <img :src="item.image" alt="">
                      </v-avatar>
                      <span class="m-0 p-0">{{item.name}}</span>
                    </div>
                  </template>  
                  <template v-slot:item="{ item }">
                    <div>
                      <v-avatar size="30" class="mr-2">
                        <img :src="item.image" alt="">
                      </v-avatar>
                      <span class="m-0 p-0">{{item.name}}</span>
                    </div>
                  </template>  
                </v-select>

                <v-btn color="primary" @click="doneEditTodo(newEditTodo)">Update</v-btn>
              </div>
            </v-navigation-drawer>
          </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  export default {
    name: "Todo",
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Todo",
    },
    components: {
      VuePerfectScrollbar,
    },
    created() {
      axios.get('/api/todo/')
       .then(response => {
         
         this.todos = response.data;
        //  console.log(this.todos);
       })
      
    },
    data: () => ({
      todoSearch: '',
      todos: [],
      selected: [''],
      //////-----/////
      snackbar: false,
      isOpen: false,
      isBlock: false,
      checkbox: false,
      dialog: false,
      isLineThrough: false,
      text: 'Task Name Must Be Required...',
      timeout: 2000,
      // item: 1,
      // itemsTwo: 0,
      drawer: null,
      newEditTodo: '',
      newTodo: {},
     
      personsInfo:[
        {
          image: require('@/assets/images/avatars/001-man.svg'),
          name: 'Timothy Clarkson'
        },
        {
          image: require('@/assets/images/avatars/002-woman.svg'),
          name: 'Medusa'
        },
      ],
      personAvatar:[require('@/assets/images/avatars/001-man.svg'), require('@/assets/images/avatars/002-woman.svg') ],
      
      items: [
        { text: 'Favorite', icon: 'mdi-star-outline' },
        { text: 'Important', icon: 'mdi-alert-decagram-outline' },
        { text: 'Completed', icon: 'mdi-account-check-outline' },
        { text: 'Delete Files', icon: 'mdi-delete-outline' },
      ],
      itemsTwo: [
        { text: 'Frontend', icon: 'mdi-checkbox-blank-circle-outline mdi-18px', color: 'primary' },
        { text: 'Backend', icon: 'mdi-checkbox-blank-circle-outline mdi-18px', color: 'orange' },
        { text: 'Doc', icon: 'mdi-checkbox-blank-circle-outline mdi-18px', color: 'success' },
        { text: 'Bug', icon: 'mdi-checkbox-blank-circle-outline mdi-18px', color: 'danger' },
      
      ],
      chips: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
      itemsChip: ['Streaming', 'Eating'],
      
    }),
    methods: {
      addTodo: function () {
        axios.post('/api/todo/add', { data: this.newTodo})
          
          .then( response => {
            this.todos.push({
                title: this.newTodo.msg,
                desc: this.newTodo.taskName,
                tags: this.newTodo.items,
                avatar: this.newTodo.personInfo
          
              })
          })
          this.dialog = false;
      },
      // checkTodo: function(todo){
      //   axios.patch(`/api/todos/${todo.id}`, {data: todo})
      // },
      removeTodo: function(todo){
       
        // this.todos.splice(index, 1)
        let { id } = todo
        
        axios.post("/api/todo/delete", {id})
          .then(response =>{
             this.todos = this.todos.filter( todo => todo.id !== id )
          })
      },
      editTodo: function(todo) {
        
        this.newEditTodo = todo;
        // console.log(todo)
        
      },
      doneEditTodo: function(todo){
        // console.log(todo);
        axios.post("/api/todo/update", {todo})
          .then(response =>{
             this.todos = this.todos.map( todo => {
               if(todo.id == response.data.id){
                 console.log(response.data, 'frontend');
                 this.drawer = !this.drawer
                 return response.data
               }
               else return todo
             })
          })
        
          
      },
      textDecoration: function(todo) {
       
        
        todo.isCompleted = !todo.isCompleted
        
        
      },
      appToggle: function () {
        this.isOpen = !this.isOpen
        this.isBlock = !this.isBlock
      },
      overlayApp: function () {
        this.isOpen = !this.isOpen
        this.isBlock = !this.isBlock
      },
    },
    computed: {
      filterSearchList(){
        return this.todos.filter(post => {
         return post.title?.toLowerCase().includes(this.todoSearch?.toLowerCase())
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.apps-wrapper {
  
    .nested-sidebar-toggle{
      @media (min-width: 959px) {
        display: none;
      }
    }
  
}
</style>