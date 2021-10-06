<template>
  <v-row>
    <v-col cols="12" md="12">
      
        <form-wizard 
          class="test" 
          shape="tab"
          title="" 
          subtitle=""
          color="#0081FF"
          next-button-text="Order"
          finish-button-text="Deliver"
        >
          <tab-content 
            title="Cart" 
            icon="mdi mdi-cart-outline" 
           
          >
            <v-row>
              <v-col cols="12" md="8">
                <base-card class="mb-3">
                  <v-card-text>
                    <div class="flex align-center justify-between flex-wrap">
                      <div class="flex flex-wrap mb-4">
                        <v-img 
                          class="" 
                          src="@/assets/images/products/headphone-2.jpg" alt=""
                          max-width="200"
                          max-height="200"
                        ></v-img>
                          <div>
                            <h5 class="font-thin">Kraken 5.0 RAZER Headphone</h5 class="font-thin">
                            <v-chip
                              class="mb-4"
                              color="success"
                              small
                              text-color="white"
                            >
                              In Stock
                            </v-chip>
                            <p class="mb-0 text-lg">$599.99</p>
                              <div class="mb-5">
                                <p class="text--disabled">
                                  <v-icon small color="gray">mdi-cart</v-icon>
                                  Free SHipping
                                </p>
                              </div>
                            <div>
                              <v-btn class="mr-2" small  color="">
                                <v-icon left>mdi-close</v-icon> Remove
                              </v-btn>
                              <v-btn small  color="primary">
                                <v-icon left>mdi-heart-outline</v-icon> Wishlist
                              </v-btn>
                            </div>
                          </div>
                      </div>
                      
                      <div>
                        <v-btn-toggle
                          v-model="toggle_exclusive"
                          mandatory
                          tile 
                          class="flex align-center"
                        >
                          <v-btn small depressed color="">
                            <v-icon color="">mdi-plus</v-icon>
                          </v-btn>
                          <span class="align-middle mx-2">1</span>
                          <v-btn small depressed  color="">
                            <v-icon color="">mdi-minus</v-icon>
                          </v-btn>
                        </v-btn-toggle>
                      </div>
                    </div>
                  </v-card-text>
                </base-card>
                <base-card class="mb-3">
                  <v-card-text>
                    <div class="flex align-center justify-between flex-wrap">
                      <div class="flex flex-wrap mb-4">
                        <v-img 
                          class="" 
                          src="@/assets/images/products/headphone-2.jpg" alt=""
                          max-width="200"
                          max-height="200"
                        ></v-img>
                          <div>
                            <h5 class="font-thin">Kraken 5.0 RAZER Headphone</h5>
                            <v-chip
                              class="mb-4"
                              color="success"
                              small
                              text-color="white"
                            >
                              In Stock
                            </v-chip>
                            <p class="mb-0 text-lg">$599.99</p>
                              <div class="mb-5">
                                <p class="text--disabled">
                                  <v-icon small color="gray">mdi-cart</v-icon>
                                  Free SHipping
                                </p>
                              </div>
                            <div>
                              <v-btn class="mr-2" small  color="">
                                <v-icon left>mdi-close</v-icon> Remove
                              </v-btn>
                              <v-btn small  color="primary">
                                <v-icon left>mdi-heart-outline</v-icon> Wishlist
                              </v-btn>
                            </div>
                          </div>
                      </div>
                      
                      <div>
                        <v-btn-toggle
                          v-model="toggle_exclusiveTwo"
                          mandatory
                          tile 
                          class="flex align-center"
                        >
                          <v-btn small depressed color="">
                            <v-icon color="">mdi-plus</v-icon>
                          </v-btn>
                          <span class="align-middle mx-2">1</span>
                          <v-btn small depressed  color="">
                            <v-icon color="">mdi-minus</v-icon>
                          </v-btn>
                        </v-btn-toggle>
                      </div>
                    </div>
                  </v-card-text>
                </base-card>
              </v-col>
              <v-col cols="12" md="4">
                <base-card class="mb-3">
                  <v-card-title>Options</v-card-title>
                  <v-card-text>
                    <div class="flex justify-between mb-3">
                      <h6 class="text--disabled">Coupons</h6>
                      <a href="#">Apply</a>
                    </div>
                    <v-divider></v-divider>
                    <div class="mt-3">
                      <h6 class="text--disabled">Price Details</h6>

                      <div class="flex justify-between">
                        <p class="text--disabled mb-1 text-lg mr-2">Total :</p>
                        <p class="text--disabled mb-1 text-lg">$500 </p>
                      </div>
                      <div class="flex justify-between">
                        <p class="text--disabled mb-1 text-lg mr-2">Bag Discount:</p>
                        <p class="text-success mb-1 text-lg"> -$15 </p>
                      </div>
                      <div class="flex justify-between">
                        <p class="text--disabled mb-1 text-lg mr-2">Estimnated Tax:</p>
                        <p class="text-success mb-1 text-lg"> $10 </p>
                      </div>
                      <div class="flex justify-between">
                        <p class="text--disabled mb-1 text-lg mr-2">EMI Eligibility:</p>
                        <p class="text-success mb-1 text-lg"> <a href="#">Details</a> </p>
                      </div>
                      <div class="flex justify-between">
                        <p class="text--disabled mb-1 text-lg mr-2">Delivery Charges:</p>
                        <p class="text-success mb-1 text-lg "> Free </p>
                      </div>

                      <v-divider class="my-3"></v-divider>

                      <div class="flex justify-between">
                        <h6 class=" font-bold mb-1 text-lg mr-2">Total:</h6>
                        <h6 class=" mb-1 text-lg"> $450 </h6>
                      </div>
                    </div>
                  </v-card-text>
                </base-card>


                <base-card>
                  <v-card-text>
                    <div class="flex align-center flex-wrap mb-2">
                      <v-icon color="" class="p-1 mr-2">mdi-shield-check</v-icon>
                      <p class="m-0">Safe and Secure Payment</p>
                    </div>
                    <div class="flex align-center flex-wrap mb-2">
                      <v-icon color="" class="p-1 mr-2">mdi-bus</v-icon>
                      <p class="m-0">Safe and Secure Payment</p>
                    </div>
                    <div class="flex align-center flex-wrap mb-2">
                      <v-icon color="" class="p-1 mr-2">mdi-reload</v-icon>
                      <p class="m-0">Refund Policy</p>
                    </div>
                  </v-card-text>

                </base-card>

              </v-col>
            </v-row>
            
          </tab-content>
          <tab-content 
            title="Address" 
            icon="mdi mdi-map-marker-check-outline"
            
          >
            <v-row>
              <v-col cols="12" md="8">
                <base-card>
                  <v-card-title> 
                    <div class="card-title">Add New Address</div>
                  </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Full Name"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Mobile Number"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="House No"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Landmark"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Town/City"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Pincode"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="State"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-select
                          :items="items"
                          label="Outlined style"
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-btn color="primary" outlined>Save and Deliver Here</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </base-card>
              </v-col>
              <v-col cols="12" md="4">
                <base-card>
                  <v-card-title>
                    <div class="card-title">Tim Clarkson</div>
                  </v-card-title>
                  <v-card-text>
                    <p class="tex--disabled mb-1 text-md">9447 Jhon Carter House</p>
                    <p class="text--disabled mb-4 text-md">Lex Luthor, AZ 23456</p>
                    <p class="text--disabled mb-1 text-md">Central Standard Time (CST)</p>
                    <p class="text--disabled mb-1 text-md">456-789-6543</p>
                    
                  </v-card-text>
                </base-card>
              </v-col>
            </v-row>
          </tab-content>
          <tab-content title="Payment" icon="mdi mdi-cash">
            <v-row>
              <v-col cols="12" md="8">
                <base-card>
                  <v-card-title>
                    <div class="card-title">Payment Options</div>
                  </v-card-title>
                  <v-card-text>
                    <div class="flex align-center mb-3">
                      <v-avatar tile class="mr-2">
                        <img src="@/assets/images/master-card.png" alt="">
                      </v-avatar>
                      <p class="m-0 text-muted">US Debit Card 12XXX XXXX XXX</p>
                    </div>
                    
                    <p class="m-0 text-lg text-muted">Tim Clarkson</p>
                    <p class="mb-8 text-lg text-muted">30/05/2020</p>

                    <div class="flex align-center">
                      <div>
                        <v-text-field
                          class="mb-0 mr-2 p-0"
                          dense
                          label="Enter CVV"
                          outlined
                        ></v-text-field>
                      </div>
                    </div>

                    <v-divider class="my-2"></v-divider>

                    <v-radio-group :mandatory="false">
                      <v-radio label="Credit / Debit / ATM Card" value="radio-1"></v-radio>
                      <v-radio label="Net Banking" value="radio-2"></v-radio>
                      <v-radio label="EMI (Easy Installment)" value="radio-3"></v-radio>
                      <v-radio label="Cash On Delivery" value="radio-4"></v-radio>
                    </v-radio-group>
                    
                  </v-card-text>
                </base-card>
              </v-col>
              <v-col cols="12" md="4">
                <base-card>
                  <v-card-title>Price Details</v-card-title>
                  <v-card-text>
                    <div class="flex justify-between flex-wrap">
                      <p class="text--disabled mb-1 text-lg mr-2">Price 2 Items:</p>
                      <p class="text-muted mb-1 text-lg "> $10000 </p>
                    </div>
                    <div class="flex justify-between flex-wrap">
                      <p class="text--disabled mb-1 text-lg mr-2"> Delivery Charges:</p>
                      <p class="text-success mb-1 text-lg "> Free </p>
                    </div>

                    <v-divider class="my-2"></v-divider>
                    
                    <div class="flex justify-between flex-wrap">
                      <p class="text--disabled mb-1 text-lg mr-2"> Amount Payable:</p>
                      <p class="text-muted mb-1 text-lg "> $10000 </p>
                    </div>

                  </v-card-text>
                </base-card>
              </v-col>
            </v-row>
            
          </tab-content>

          


        </form-wizard>
      
    </v-col>
  </v-row>
</template>
<script>
//local registration
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {

  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Product Checkout",
  },
  //component code
  components: {
    FormWizard,
    TabContent
  },
  data(){
    return {
      toggle_exclusive: undefined,
      toggle_exclusiveTwo: undefined,
      items: ['Home', 'Office'],
    }
  }
}
</script>