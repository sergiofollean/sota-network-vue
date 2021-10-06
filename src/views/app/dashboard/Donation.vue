<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
      lg="4"
    >
      <donation-card 
        class="mb-5"
        bg-color="bg-blue-200"
        icon="mdi-account"
        icon-color="primary"
        title="Personal Info"
        sub-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        button-text="Manage Your Account"
      />
      <donation-card 
        bg-color="bg-blue-200"
        icon="mdi-cog"
        icon-color="primary"
        title="Settings"
        sub-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        button-text="Account Settings"
      />
    </v-col>
    
    <v-col
      cols="12"
      
      md="12"
      lg="8"
    >
      <base-card>
        <div
          color=""
          class="shadow-none"
        >
          <div class="flex justify-between flex-wrap align-center">
            <v-card-title>Saved Cards</v-card-title>

            <div class="p-2">
              <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color=""
                  v-bind="attrs"
                  class="shadow-none"
                  v-on="on"
                >
                  Visa Card 4143 **** 3457
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  @click=""
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </div>
          </div>
        </div>
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <div
                class="credit-card-wrap bg-gray-900 rounded text-white p-4"
                style="max-width: 350px"
              >
                <div class="flex justify-between mb-12">
                  <div>
                    <span class="">Primary card</span>
                    <h2 class="text-white m-0">
                      $2,080.5
                    </h2>
                  </div>
                  <v-avatar>
                    <v-img
                      class="icon"
                      src="@/assets/images/payment-card/004-visa.svg"
                    ></v-img>
                  </v-avatar>
                </div>
                <div class="flex justify-between items-end">
                  <div>
                    <p class="font-semi text-white m-0">
                      Tim Clarkson
                    </p><span class="text-sm ">4143 **** 3457</span>
                  </div><span class="text-sm ">04/2024</span>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <div class="flex justify-between">
                <p>Card Type:</p><span class="text-muted">Visa</span>
              </div>
              <div class="flex justify-between">
                <p>Card Holder:</p><span class="text-muted">Tim Clarkson</span>
              </div>
              <div class="flex justify-between">
                <p>Card Number:</p><span class="text-muted">4143 **** 3457</span>
              </div>
              <div class="flex justify-between">
                <p>Validation Date:</p><span class="text-muted">04/2024</span>
              </div>
              <div class="flex justify-between">
                <p>Balance:</p><span class="text-muted">2,080.5USD</span>
              </div>
              <div class="flex flex-wrap mt-4">
                <v-btn
                  class="ma-2"
                  outlined
                  color="blue"
                  small
                >
                  Add New Card
                </v-btn>
                <v-btn
                  class="ma-2"
                  outlined
                  color="red"
                  small
                >
                  Remove this card
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
    >
      <base-card>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" />
                <th class="text-left">
                  Date
                </th>
                <th class="text-left">
                  Description
                </th>
                <th class="text-left">
                  Category
                </th>
                <th class="text-left">
                  Amount
                </th>
                <th class="text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in desserts"
                :key="item.name"
              >
                <td>
                  <v-avatar size="25">
                    <v-img
                      class=""
                      :src="item.img"
                      alt="error img"
                    ></v-img>
                  </v-avatar>
                </td>
                <td class="whitespace-no-wrap">{{ item.date }}</td>
                <td class="font-bold whitespace-no-wrap">
                  {{ item.desc }}
                </td>
                <td>{{ item.category }}</td>
                <td>
                  <p
                    :class="item.amountColor"
                    class="m-0 font-semibold"
                  >
                    {{ item.amount }}
                  </p>
                </td>
                <td>
                  <div class="rounded-full h-6 w-6 flex items-center justify-center bg-green-200">
                    <v-icon class="text-green-500 text-sm">
                      mdi-check
                    </v-icon>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </base-card>
    </v-col>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-text>
          <div class="flex justify-between items-center flex-wrap">
            <div class="py-4">
              <div class="card-title mb-0 text-xl">
                Premium Plan - $700.0/ Per Annual
              </div>
              <p class="text-muted m-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </div>
            <v-btn
              outlined
              color="primary"
            >
              Outlined Button
            </v-btn>
          </div>
          <div class="py-4">
            <p class="m-0">
              Learn More:
              <a
                href="#"
                class="font-semibold"
              >Advance Option</a>
            </p>
          </div>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-text>
          <div class="ul-donation-item flex items-center justify-between py-lg flex-wrap">
            <v-img
              height="50"
              width="50"
              contain
              class="m-2"
              src="@/assets/images/illustrations/undraw_monitor.svg"
              alt=""
            ></v-img>
            <div class="flex-grow-1">
              <div class="card-title m-0 text-xl">
                We are here to help you :)
              </div>
              <p class="text-muted">
                Ask a question or file a support ticketn or report an issues. Our team support team will get back to you by email.
              </p>
            </div>
            <v-btn
              outlined
              color="success"
            >
              Get Support
            </v-btn>
          </div>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-title>Billing List</v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    #
                  </th>
                  <th class="text-left">
                    Bill
                  </th>
                  <th class="text-left">
                    Starting Date
                  </th>
                  <th class="text-left">
                    Deadline
                  </th>
                  <th class="text-left">
                    Total
                  </th>
                  <th class="text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in dessertsTwo"
                  :key="index"
                >
                  <td class="text-primary font-semibold">{{ item.id }}</td>
                  <td class="whitespace-no-wrap">{{ item.bill }}</td>
                  <td class="text-muted whitespace-no-wrap">{{ item.startDate }}</td>
                  <td class="text-muted whitespace-no-wrap">{{ item.deadline }}</td>
                  <td class="font-bold">{{ item.total }}</td>
                  <td :class="item.statusColor">{{ item.status }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
  import donationCard from '@/components/card/DonationCard'
  export default {
    name: "Donation",
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Donation",
    },
    components: {
      'donation-card': donationCard,
    },
    data () {
      return {
        items: [
          { title: 'Visa Card 4143 **** 3457 Me' },
          { title: 'Master Card 3743 **** 4089' },
        ],
        desserts: [
          {
            img: require('@/assets/images/logos/001-spotify.svg'),
            date: '2 July, 2020',
            desc: 'Spotify Subscriptoin fee',
            category: 'Music',
            amount: '-$10',
            amountColor: 'text-red-500',
          },
          {
            img: require('@/assets/images/logos/003-apple.svg'),
            date: '3 July, 2020',
            desc: 'App Store Payment',
            category: 'Software',
            amount: '-$100',
            amountColor: 'text-red-500',
          },
          {
            img: require('@/assets/images/logos/004-windows.svg'),
            date: '6 July, 2020',
            desc: 'Software Purchase',
            category: 'Software',
            amount: '-$100',
            amountColor: 'text-red-500',
          },
          {
            img: require('@/assets/images/logos/005-google.svg'),
            date: '6 July, 2020',
            desc: 'Adsense Revenue',
            category: 'Software',
            amount: '$21000',
            amountColor: 'text-green-500',
          },
        ],
        dessertsTwo: [
          {
            id: 2567,
            bill: 'Premium Subscription',
            startDate: '23-02-2020',
            deadline: '27-02-2020',
            total: '$300.00',
            status: 'Pending',
            statusColor: 'text-warning',
          },
          {
            id: 2568,
            bill: 'Basic Subscription',
            startDate: '23-02-2020',
            deadline: '27-02-2020',
            total: '$500.00',
            status: 'Rejected',
            statusColor: 'text-danger',
          },
          {
            id: 2569,
            bill: 'Enterprise Subscription',
            startDate: '23-02-2020',
            deadline: '27-02-2020',
            total: '$700.00',
            status: 'Delivered',
            statusColor: 'text-success',
          },
        ],
      }
    },
  }
</script>
