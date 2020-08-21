<template>
  <v-app>
  <AdminDashboardSideNav
  :drawer="drawer"
  >
  </AdminDashboardSideNav>
  <AdminDashboardHeader
  :drawer="drawer"
  :toggleDrawer="toggleDrawer"
  >
  </AdminDashboardHeader>
    <template>
      <v-container fluid>
        <template>
          <v-card
            class="mx-auto"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Orders</div>
                <v-list-item-title class="headline mb-1">Today's Orders</v-list-item-title>
                <v-list-item-subtitle>Click on each order to view more</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <template>
              <v-data-table
                v-model="selected"
                :headers="headers"
                :items="orders"
                :single-select="singleSelect"
                item-key="name"
                show-select
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
                </template>
              </v-data-table>
            </template>
            <v-card-actions>
              <v-btn text right="true">View More</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-container>
    </template>
  </v-app>
</template>

<script>
import AdminDashboardHeader from '@/components/layout/AdminDashboardHeader.vue'
import AdminDashboardSideNav from '@/components/layout/AdminDashboardSideNav.vue'

export default {
  data () {
    return {
      drawer: 'true',
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Vendor ID',
          align: 'start',
          sortable: false,
          value: 'vendorID'
        },
        { text: 'Product ID', value: 'productID' },
        { text: 'Quantity (Kg)', value: 'quantity' },
        { text: 'Delivery', value: 'delivery' }
      ],
      orders: [
        {
          vendorID: 111,
          productID: 222,
          quantity: 25,
          delivery: '07/08/2020'
        },
        {
          vendorID: 111,
          productID: 222,
          quantity: 25,
          delivery: '07/08/2020'
        },
        {
          vendorID: 111,
          productID: 222,
          quantity: 25,
          delivery: '07/08/2020'
        },
        {
          vendorID: 111,
          productID: 222,
          quantity: 25,
          delivery: '07/08/2020'
        },
        {
          vendorID: 111,
          productID: 222,
          quantity: 25,
          delivery: '07/08/2020'
        }
      ]
    }
  },
  components: {
    AdminDashboardHeader,
    AdminDashboardSideNav
  },
  methods: {
    toggleDrawer (currentDrawer) {
      this.drawer = currentDrawer ? 'false' : 'true'
    }
  }
}
</script>
