<template>
  <v-row>
    <v-col cols="12">
      <base-card>
        <v-card-text>
          <div class="flex justify-end">
            <base-hover-button 
              bg-hover="hover:bg-warning"
              text="Cancel" 
              text-color="text-warning"
              bg-color="bg-orange-100"
              class="mr-3"
            /> 
            <base-hover-button 
              bg-hover="hover:bg-primary"
              text="Save" 
              text-color="text-primary"
             
            /> 
          </div>
          <div class="flex justify-between flex-wrap my-10">
            <div class="mr-6">
              <h5 class="font-bold">Order Info</h5>
              <v-text-field
                label="Order number"
              ></v-text-field>
            </div>
            <div>
              <v-radio-group label="Order Status" class="" v-model="radios" :mandatory="false">
                <div class="mt-3">
                  <v-radio label="Pending" value="Pending" color="primary"></v-radio>
                  <v-radio label="Processing" value="Processing" color="orange"></v-radio>
                  <v-radio label="Delivered" value="Delivered" color="success"></v-radio>
                </div>
              </v-radio-group>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="select order date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </div>
          </div>
          <v-divider class="my-4"></v-divider>
          <div class="flex justify-between flex-wrap">
            <div class="sm:flex-1 flex-none mr-16">
              <h5 class="font-bold">Bill From</h5>
              <v-text-field
                label="Bill From"
              ></v-text-field>
              <v-text-field
                label="Bill From Address"
              ></v-text-field>
            </div>
            <div class="sm:flex-1 flex-none">
              <h5 class="font-bold">Bill From</h5>
              <v-text-field
                label="Bill From"
              ></v-text-field>
              <v-text-field
                label="Bill From Address"
              ></v-text-field>
            </div>
          </div>
          <div class="my-4"></div>
          <div>
            <h5 class="font-bold">Products</h5>
            <v-row 
              v-for="(row, index) in rows" 
              :key="index"
              
            >
              <v-col cols="12" md="6" lg="2" class="mb-4">
                <v-text-field
                  label="Item Name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="2">
                <v-text-field
                  label="Unit Price"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="2">
                <v-text-field
                  label="Unit"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="2">
                <v-text-field
                  label="Cost"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="2" class="text-right md:text-left sm:text-left">
                <v-btn class="mt-3" icon color="pink" @click="deleteItem(index)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <base-hover-button
              text="Add Product"
              
              @click.native="addItem()"
            />
                
          </div>
          <div class="flex justify-end">
            <div class="">
                <p>Sub Total: <span class=""> $0</span></p>
                <p>Vat(%):<span class=""> $0</span></p>
                <p class="font-semibold">Grand Total: <span class=""> $0</span></p>
            </div>
          </div>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Edit Invoice",
  },
  data(){
    return {
      modal: false,
      date: new Date().toISOString().substr(0, 10),
      radios: 'radio-1',

      newRow:'',
      rows:[0],
    }
  },
  methods: {
    addItem: function(){
      this.rows.push(this.newRow);
    },
    deleteItem: function(deleteItem){
      this.rows.splice(deleteItem, 1)
      
    }
  }
} 
</script>