<template>
  <v-row>
    <v-col cols="12">
      <base-card>
        <v-card-title>
          <div class="flex justify-between flex-wrap">
            <v-btn class="m-2" dark color="danger">
              <v-icon>mdi-plus</v-icon>
              Add Customer
            </v-btn>
            <div>
              <v-btn class="m-2" color="primary">
                <v-icon>mdi-cog</v-icon>
              </v-btn>
              <v-btn outlined class="m-2">Import</v-btn>
              <v-btn outlined class="m-2">Export</v-btn>
            </div>
          </div>
        </v-card-title>
        <v-card-title>
          
          Customers
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          
          
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          
        </v-card-title>
        <v-data-table
          v-model="selected"
          :search="search"
          :headers="headers"
          :items="desserts"
          item-key="name"
          show-select
          class="elevation-1 table-one"
          
          multi-sort
        >
          <template v-slot:item.name="{ item }">
            <div class="flex items-center">
              <v-avatar class="mr-2" size="26" dark>
                <img :src="item.img" alt="">
              </v-avatar>
              <p class="m-0 font-semibold">{{ item.name }}</p>
            </div>
          </template>
          <template v-slot:item.action="{ item }">
            <div class="flex">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="success"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    icon
                  >
                    <v-icon>mdi-pencil-box-outline</v-icon>
                  </v-btn>
                </template>
                <span>Edit</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="danger"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    icon
                  >
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </template>
                <span>Delete</span>
              </v-tooltip>
              
            </div>
          </template>
          <template v-slot:item.iron="{ item }">
            <v-sparkline
                :value="item.value"
                color="primary"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
              >
                
        </v-sparkline>
          </template>
        </v-data-table>
      </base-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
  
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Table Three",
    },
    data () {
      return {
        
        search: '',
        selected: [],
        headers: [
          {
            text: 'Customer',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Store Name', value: 'calories' },
          { text: 'Products', value: 'fat' },
          { text: 'Wallet Balance', value: 'carbs' },
          { text: 'Create Date', value: 'protein' },
          { text: 'Revenue', value: 'iron' },
          { text: 'Action', value: 'action' },
        ],
        desserts: [
          {
            img: require("@/assets/images/avatars/001-man.svg"),
            name:'Jhon Doe',
            calories: 'Walmart',
            fat: '95',
            carbs: '$14,384',
            protein: '03/24/2020',
            value: [
              423,
              446,
              675,
              510,
              590,
              610,
              760,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/002-woman.svg"),
            name:'Elizabeth Doe',
            calories: 'KFC',
            fat: '876',
            carbs: '$38,384',
            protein: '03/24/2020',
            value: [
              300,
              100,
              675,
              450,
              590,
              310,
              200,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/003-man-1.svg"),
            name:'Jhon Legend',
            calories: 'Starbucks',
            fat: '300',
            carbs: '$78,384',
            protein: '03/24/2020',
            value: [
              100,
              100,
              675,
              450,
              590,
              310,
              200,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/004-bald.svg"),
            name:'Juggernaut',
            calories: 'Apple',
            fat: '700',
            carbs: '$78,384',
            protein: '03/24/2020',
            value: [
              100,
              100,
              -675,
              -450,
              590,
              310,
              200,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/007-woman-2.svg"),
            name:'Medusa',
            calories: 'Apple',
            fat: '700',
            carbs: '$78,384',
            protein: '03/24/2020',
            value: [
              600,
              100,
              675,
              450,
              290,
              610,
              400,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/001-man.svg"),
            name:'Jhon Doe two',
            calories: 'Walmart',
            fat: '95',
            carbs: '$14,384',
            protein: '03/24/2020',
            value: [
              423,
              446,
              675,
              510,
              590,
              610,
              760,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/002-woman.svg"),
            name:'Elizabeth Doe two',
            calories: 'KFC',
            fat: '876',
            carbs: '$38,384',
            protein: '03/24/2020',
            value: [
              300,
              100,
              675,
              450,
              590,
              310,
              200,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/003-man-1.svg"),
            name:'Jhon Legend two',
            calories: 'Starbucks',
            fat: '300',
            carbs: '$78,384',
            protein: '03/24/2020',
            value: [
              100,
              100,
              675,
              450,
              590,
              310,
              200,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/004-bald.svg"),
            name:'Juggernaut two',
            calories: 'Apple',
            fat: '700',
            carbs: '$78,384',
            protein: '03/24/2020',
            value: [
              100,
              100,
              -675,
              -450,
              590,
              310,
              200,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/007-woman-2.svg"),
            name:'Medusa two',
            calories: 'Apple',
            fat: '700',
            carbs: '$78,384',
            protein: '03/24/2020',
            value: [
              600,
              100,
              675,
              450,
              290,
              610,
              400,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/002-woman.svg"),
            name:'Elizabeth Doe three',
            calories: 'KFC',
            fat: '876',
            carbs: '$38,384',
            protein: '03/24/2020',
            value: [
              300,
              100,
              675,
              450,
              590,
              310,
              200,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/003-man-1.svg"),
            name:'Jhon Legend three',
            calories: 'Starbucks',
            fat: '300',
            carbs: '$78,384',
            protein: '03/24/2020',
            value: [
              100,
              100,
              675,
              450,
              590,
              310,
              200,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/004-bald.svg"),
            name:'Juggernaut three',
            calories: 'Apple',
            fat: '700',
            carbs: '$78,384',
            protein: '03/24/2020',
            value: [
              100,
              100,
              -675,
              -450,
              590,
              310,
              200,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/007-woman-2.svg"),
            name:'Medusa three',
            calories: 'Apple',
            fat: '700',
            carbs: '$78,384',
            protein: '03/24/2020',
            value: [
              600,
              100,
              675,
              450,
              290,
              610,
              400,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/001-man.svg"),
            name:'Jhon Doe four',
            calories: 'Walmart',
            fat: '95',
            carbs: '$14,384',
            protein: '03/24/2020',
            value: [
              423,
              446,
              675,
              510,
              590,
              610,
              760,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/002-woman.svg"),
            name:'Elizabeth Doe four',
            calories: 'KFC',
            fat: '876',
            carbs: '$38,384',
            protein: '03/24/2020',
            value: [
              300,
              100,
              675,
              450,
              590,
              310,
              200,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/003-man-1.svg"),
            name:'Jhon Legend four',
            calories: 'Starbucks',
            fat: '300',
            carbs: '$78,384',
            protein: '03/24/2020',
            value: [
              100,
              100,
              675,
              450,
              590,
              310,
              200,
            ],
            
          },
          {
            img: require("@/assets/images/avatars/004-bald.svg"),
            name:'Juggernaut four',
            calories: 'Apple',
            fat: '700',
            carbs: '$78,384',
            protein: '03/24/2020',
            value: [
              100,
              100,
              -675,
              -450,
              590,
              310,
              200,
            ],
            
          },
          
          
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
    ::v-deep .table-one {
     thead.v-data-table-header{
     tr{
       &:hover {
         background-color: #f2f3f8;
       }
      th{
        span{
            font-size: 16px;
            color: #304156;
          } 
        }
      }
      tr{
        
        td{
          padding-bottom: 20px;
          padding-top:20px;
        }
      }
    }
    tbody{
      tr{
        &:hover {
         background-color: #f2f3f8 !important;
        }
      }
    }
  }
</style>