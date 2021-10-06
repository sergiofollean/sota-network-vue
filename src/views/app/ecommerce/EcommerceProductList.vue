<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <base-card class="h-full">
          <v-card-text>
            <div class="flex justify-between align-center">
              <div class="card-title mb-0">Filter</div>
              <v-btn color="primary" small dark>
                <v-icon>mdi-reload</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </base-card>
      </v-col>
      <v-col cols="12" md="8">
        <base-card class="align-center">
          <v-card-text class="p-0 pr-3">
            <div class="flex justify-between align-center flex-wrap">
              <div>
                <v-toolbar flat class="pl-0">
                  <v-autocomplete
                    clearable
                    class="mx-0 pl-0 elevation-0"
                    hide-no-data
                    hide-details
                    filled
                    dense
                    label="Search..."
                    solo
                  ></v-autocomplete>
                </v-toolbar>
              </div>
              <div class="">
                <v-menu class="mr-2" offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      depressed
                      color="transparent"
                      v-bind="attrs"
                      v-on="on"
                      class="mr-2"
                    >
                      Featured
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="">
                      <v-list-item-title>Price (Asc)</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="">
                      <v-list-item-title>Price (Desc)</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-btn
                  class="mr-2"
                  small
                  outlined
                  color="primary"
                  @click="gridView"
                >
                  <v-icon>mdi-view-grid</v-icon>
                </v-btn>
                <v-btn small dark color="pink" @click="listView">
                  <v-icon>mdi-view-list-outline</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="3">
        <v-row>
          <v-col cols="12" md="12">
            <base-card>
              <v-card-title>
                <div class="card-title mb-0">Prices</div>
              </v-card-title>
              <!-- <v-divider></v-divider> -->
              <v-card-text>
                <v-radio-group v-model="radios" :mandatory="false">
                  <v-radio
                    label="All"
                    value="radio-1"
                    @change="allProductPrice"
                  ></v-radio>
                  <v-radio
                    label="Less than $500"
                    value="radio-2"
                    @change="lessThan"
                  ></v-radio>

                  <v-radio
                    label="More than $500"
                    value="radio-4"
                    @change="moreThan"
                  ></v-radio>
                </v-radio-group>
              </v-card-text>
            </base-card>
          </v-col>
          <v-col cols="12" md="12">
            <base-card>
              <v-card-title>
                <div class="card-title mb-0">Category</div>
              </v-card-title>
              <!-- <v-divider></v-divider> -->
              <v-card-text>
                <div
                  v-for="(category, index) in categories"
                  :key="index"
                  class="flex justify-between align-center"
                >
                  <div>
                    <v-checkbox
                      class="m-0 p-0"
                      @change="filterCategory(category)"
                      v-model="selected"
                      :value="category.title"
                      :label="category.title"
                    >
                    </v-checkbox>
                  </div>
                  <div>
                    <v-chip class="text-blue-600 bg-blue-100" label>
                      <p class="font-bold mb-0">{{ category.product }}</p>
                    </v-chip>
                  </div>
                </div>
              </v-card-text>
            </base-card>
          </v-col>
          <v-col cols="12" md="12">
            <base-card>
              <v-card-title>
                <div class="card-title mb-0">Brands</div>
              </v-card-title>
              <!-- <v-divider></v-divider> -->
              <v-card-text>
                <div
                  v-for="(brand, index) in brands"
                  :key="index"
                  class="flex justify-between align-center"
                >
                  <div>
                    <v-checkbox
                      class="m-0 p-0"
                      v-model="brand.checkbox"
                      :label="brand.title"
                    ></v-checkbox>
                  </div>
                  <div>
                    <v-chip class="text-blue-600 bg-blue-100" label>
                      <p class="font-bold mb-0">{{ brand.product }}</p>
                    </v-chip>
                  </div>
                </div>
              </v-card-text>
            </base-card>
          </v-col>
          <v-col cols="12" md="12">
            <base-card>
              <v-card-title>
                <div class="card-title mb-0">Rating</div>
              </v-card-title>
              <!-- <v-divider></v-divider> -->
              <v-card-text>
                <div
                  v-for="(rate, index) in rating"
                  :key="index"
                  class="flex justify-between flex-wrap"
                >
                  <v-rating
                    dense
                    color="warning"
                    background-color="warning"
                    v-model="rate.rates"
                    class="mb-3"
                  ></v-rating>
                  <div>
                    <v-chip class="text-blue-600 bg-blue-100" label>
                      <p class="font-bold mb-0">{{ rate.product }}</p>
                    </v-chip>
                  </div>
                </div>
              </v-card-text>
            </base-card>
          </v-col>
          <v-col cols="12" md="12">
            <base-card>
              <v-card-title>
                <div class="card-title mb-0">Free Shipping</div>
              </v-card-title>
              <!-- <v-divider></v-divider> -->
              <v-card-text>
                <v-checkbox class="m-0 p-0" label="Free Shipping"></v-checkbox>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="9">
        <v-row>
          <v-col
            v-for="(card, index) in filterProductList"
            v-show="setPaginate(index)"
            :key="index"
            cols="12"
            :class="{ 'col-md-4': !isListView, 'col-md-12': isListView }"
          >
            <base-card class="overflow-hidden">
              <div
                class=""
                :class="{
                  'list-grid': isListView,
                  'list-horizontal': !isListView,
                  'block md:flex xl:flex lg:flex flex-row': isListView,
                }"
              >
                <img
                  class=""
                  :class="{
                    'object-cover h-64 w-full': !isListView,
                    'object-contain w-full md:w-32 lg:w-32 xl:w-32  p-3': isListView,
                  }"
                  :src="card.imgUrl"
                />

                <v-card-text
                  :class="{
                    'flex-grow block sm:flex md:flex lg:flex xl:flex': isListView,
                  }"
                >
                  <div
                    :class="{
                      'self-center flex-grow block md:flex lg:flex xl:flex justify-between align-center ': isListView,
                    }"
                  >
                    <p class="text-lg m-0">
                      <a href="#" class="text--primary"> {{ card.title }} </a>
                    </p>
                    <p
                      :class="{
                        'mb-0  sm:mx-0 md:mx-3 lg:mx-3 xl:mx-3': isListView,
                      }"
                      class="text-sm text-muted font-thin"
                    >
                      {{ card.details }}
                    </p>
                    <div
                      :class="{
                        'mb-0 sm:mx-0 md:mx-4 lg:mx-4 xl:mx-4  py-3 md:py-0': isListView,
                        'mb-5': !isListView,
                      }"
                      class="flex flex-wrap align-center justify-between"
                    >
                      <v-rating
                        v-model="productRating"
                        background-color="primary"
                        color="primary"
                        readonly
                        dense
                      ></v-rating>
                      <div class="font-bold text-lg">${{ card.price }}</div>
                    </div>

                    <div
                      :class="{
                        'justify-between  flex-wrap': !isListView,
                        ' justify-end': isListView,
                      }"
                      class="flex"
                    >
                      <base-hover-button
                        text="Add Cart"
                        small
                        class="mr-1 mb-1"
                      />
                      <base-hover-button text="wish list " small class="" />
                    </div>
                  </div>
                </v-card-text>
              </div>
            </base-card>
          </v-col>
          <v-col cols="12">
            <div id="pagination">
              <!-- <a
                href="#"
                class="btn btn-default flex mr-2"
                v-for="(page_index, index) in paginate_total"
                :key="index"
                @click.prevent="updateCurrent(page_index)"
              >
                {{ page_index }}
              </a> -->

              <v-pagination
                v-model="current"
                :length="paginate_total"
              ></v-pagination>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    current: 1,
    paginate: 6,
    paginate_total: 0,
    isColumnTwelve: false,
    isColumnFour: true,
    radios: "radio-1",
    productRating: 3.5,
    productList: [],
    filterProductList: [],
    categories: [],
    brands: [],
    rating: [],
    selected: [],
    isListView: false,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],

    // search
    loading: false,
    items: [],
    search: null,
    select: null,
    states: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
  }),
  created() {
    axios.get("/api/ecommerce/get-product-list").then((response) => {
      this.productList = response.data;
      this.filterProductList = response.data;
      this.paginate_total = Math.ceil(
        this.filterProductList.length / this.paginate
      );
    });
    axios
      .get("/api/ecommerce/get-category-list")
      .then((response) => (this.categories = response.data));
    axios
      .get("/api/ecommerce/get-brand-list")
      .then((response) => (this.brands = response.data));
    axios
      .get("/api/ecommerce/get-rating-list")
      .then((response) => (this.rating = response.data));
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Product List",
  },

  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },

  methods: {
    setPaginate(i) {
      if (this.current == 1) {
        return i < this.paginate;
      } else {
        return (
          i >= this.paginate * (this.current - 1) &&
          i < this.current * this.paginate
        );
      }
    },
    updateCurrent(i) {
      this.current = i;
    },

    allProductPrice() {
      this.filterProductList = this.productList.filter((x) => x.price >= 0);
      if (this.current > 1) this.current = 1;
    },
    lessThan() {
      this.filterProductList = this.productList.filter((x) => x.price < 500);
      if (this.current > 1) this.current = 1;
    },
    moreThan() {
      this.filterProductList = this.productList.filter((x) => x.price >= 500);
      if (this.current > 1) this.current = 1;
    },
    filterCategory(category) {
      this.filterProductList = this.productList.filter((x) =>
        this.selected.includes(x.category)
      );

      if (this.selected.length <= 0) {
        this.filterProductList = this.productList;
      }
      if (this.current > 1) this.current = 1;
      this.paginate_total = Math.ceil(
        this.filterProductList.length / this.paginate
      );
    },

    gridView() {
      this.isListView = false;
    },
    listView() {
      this.isListView = true;
    },
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
  },
};
</script>