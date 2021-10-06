<template>
  <v-row>
    <v-col cols="12">
      <base-card>
        <div class="bg-purple-900 mb-10">
          <div class="mx-auto w-4/5">
            <v-row>
              <v-col cols="12">
                <div class="my-12">
                  <h1 class="text-white text-center pb-12 pt-10 text-5xl">INVOICE</h1>
                  <div class="ul-invoice-v1-header flex flex-wrap justify-center items-center">
                    <v-avatar>
                      <img class=" mr-2" src="@/assets/images/logos/logo-circle.svg" alt="" srcset="">
                    </v-avatar>
                    <p class="m-0 text-gray-400 font-semibold">4798 Forest Avenue,New York,contact@ui-lib.com 646-822-3760</p>
                  </div>
                  <v-divider dark class="my-12"></v-divider>
                </div>
                <div class="flex justify-between flex-wrap py-10">
                  <div class="mb-8 flex flex-col max-w-xs">
                    <span class="text-white font-semibold text-lg">INVOICE TO:</span>
                    <span class="text-gray-400 font-semibold text-lg">Iris Watson, P.O. Box 283 8562 Fusce Rd. Frederick Nebraska 20620</span>
                  </div>
                  <div class="">
                    <div class="mb-md"><span class="text-white font-semibold m mb-md text-lg mr-6">DATE:</span><span class="font-semibold text-gray-400 text-18">Dec 16, 2020</span></div>
                    <div class=""><span class="text-white font-semibold  text-lg mr-4">INVOICE NO:</span><span class="font-semibold text-gray-400 text-18">UI0987</span></div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
        <v-card-text>
          <div class="mx-auto w-4/5">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr >
                    <th class="text-left pl-0 text-sm">DESCRIPTION</th>
                    <th class="text-left pl-0 text-sm">HOURS</th>
                    <th class="text-left pl-0 text-sm">RATE</th>
                    <th class="text-right pr-0 text-sm">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-transparent" v-for="item in desserts" :key="item.name">
                    <td class="font-bold text-base pl-0">{{ item.desc }}</td>
                    <td class="font-bold text-base pl-0">{{ item.hrs }}</td>
                    <td class="font-bold text-base pl-0">${{ item.rate }}</td>
                    <td class="font-bold text-base pr-0 text-right text-primary">${{ item.amount }}</td>
                  </tr>
                </tbody>
                
              </template>
            </v-simple-table>

            <div class="flex justify-between flex-wrap pt-16 mb-6">
              <div class="mb-4">
                <p class="text-muted font-semibold text-lg mb-2">BANK TRANSFER: </p>
                <div class="flex mb-1">
                  <h6 class="m-0 mr-2">Account Name:</h6>
                  <span>Manchester United </span>
                </div>
                <div class="flex mb-1">
                  <h6 class="m-0 mr-2">Account Number:</h6>
                  <span>378282246310005 </span>
                </div>
                <div class="flex mb-1">
                  <h6 class="m-0 mr-2">Code:</h6>
                  <span>BARC0032US </span>
                </div>
              </div>
              <div class="md:text-right sm:text-left">
                <p class="text-muted font-semibold text-lg m-0">TOTAL AMOUNT: </p>
                <h4 class="m-0 primary--text  font-semibold">$23000.00 </h4>
                <p class="m-0 text-muted text-sm">tax include</p>
              </div>
            </div>

            
          </div>
          
        </v-card-text>
        <div class="bg-off-white  py-4">
          <div class="mx-auto w-4/5 ">
            <div class="flex justify-between flex-wrap">
              <base-outline-button
                text="Download Invoice"
                text-color="text-primary"
                bg-hover="hover:bg-primary"
                class="border-primary"
              />
              
              <v-btn color="primary" class=" text-white">Print Invoice</v-btn>
              
            </div>
          </div>
        </div>
        
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
   
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Invoice Ver 1",
    },
    data () {
      return {
        desserts: [
          {
            desc: 'UI/UX for Mobile App',
            hrs: 50,
            rate: 50.00,
            amount: 2500
          },
          {
            desc: 'Front-End Development',
            hrs: 130,
            rate: 50.00,
            amount: 6500
          },
          {
            desc: 'Back-End Development',
            hrs: 130,
            rate: 80.00,
            amount: 10400
          },
          
        ],
      }
    },
   
  }
</script>