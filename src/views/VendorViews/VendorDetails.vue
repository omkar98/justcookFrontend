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
  <v-container fluid>
      <v-card
        class="mx-auto"
        outlined
      >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Vendor Details</div>
          <v-list-item-title class="headline mb-1">Vendor ID: {{$route.params.id}}</v-list-item-title>
        </v-list-item-content>
        <v-btn icon x-large
        :href="`/vendor/edit/${$route.params.id}`"
        ><v-icon large color="blue">mdi-pencil-box-outline</v-icon>
        </v-btn>
      </v-list-item>
      <template>
        <v-container class="grey lighten-5">
          <v-row no-gutters justify="center">
            <v-col lg="8">
              <v-card outlined class="pa-5">
                <template>
                  <v-simple-table>
                    <template v-slot:default>
                      <tbody>
                        <tr v-for="item in vendor_details" :key="item.name">
                          <td>{{ item.name }}</td>
                          <td>{{ item.value }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </template>
              </v-card>
            </v-col>
            <v-col lg="4">
              <v-card outlined class="pa-5">
                <v-img src="@/assets/justCook.png" contain max-width="200" max-height="200"></v-img>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col>
              <v-card outlined class="pa-5">
              <ul>
                <li><a href="/">Click Here</a> to view all the Purchase Orders by Vendor-Name</li>
                <li><a href="/">Click Here</a> to view all the Invoices by Vendor-Name  </li>
                <li><a href="/">Click Here</a> to create a New Purchase Order for Vendor-Name</li>
              </ul>
              <template>
                <v-row justify="center">
                  <v-btn
                    color="primary"
                    dark
                    @click.stop="dialog = true"
                  >
                    Invoices
                  </v-btn>
                  <v-dialog
                    v-model="dialog"
                  >
                    <v-card>
                      <v-card-title class="headline">Vendor Invoices</v-card-title>
                      <v-divider></v-divider><br>
                      <v-card-text>
                         <v-data-table
                          :headers="headers"
                          :items="invoices"
                          sort-by="calories"
                          class="elevation-1"
                      >
                      <template v-slot:[`item.name`]="{ item }">
                        <router-link :to="`/vendor/${item.id}`">
                          {{ item.name }}
                        </router-link>
                      </template>
                      <template v-slot:[`item.actions`]="{ item }">
                      <v-icon
                          small
                          @click="deleteItem(item)"
                      >
                          mdi-download
                      </v-icon>
                      </template>
                      </v-data-table>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </template>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
      </v-card>
  </v-container>
  </v-app>
</template>

<script>
import AdminDashboardHeader from '@/components/layout/AdminDashboardHeader.vue'
import AdminDashboardSideNav from '@/components/layout/AdminDashboardSideNav.vue'

export default {
  data () {
    return {
      drawer: null,
      dialog: false,
      vendor_details: [
        {
          name: 'Vendor Name',
          value: 'PMart'
        },
        {
          name: 'Vendor Address',
          value: 'XYZ XYZ XYZ XYZ XYZ XYZ XYZ XYZ XYZ XYZ XYZ XYZ XYZ'
        },
        {
          name: 'Vendor POC',
          value: 'ABC'
        },
        {
          name: 'Vendor Contact Details',
          value: 9999999999
        },
        {
          name: 'Payment Due',
          value: 540.22
        }
      ],
      headers: [
        {
          text: 'Invoice ID',
          align: 'start',
          sortable: true,
          value: 'invoice_id'
        },
        { text: 'PO ID', value: 'po_id' },
        { text: 'Product ID', value: 'product_id' },
        { text: 'Product Qty', value: 'prod_qty' },
        { text: 'Date of Delivery', value: 'dod' },
        { text: 'Payment Mode', value: 'payment_mode' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      invoices: []
    }
  },
  props: {
    source: String
  },
  components: {
    AdminDashboardHeader,
    AdminDashboardSideNav
  },
  computed: {},
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    toggleDrawer (currentDrawer) {
      this.drawer = currentDrawer ? 'false' : 'true'
    },
    initialize () {
      this.invoices = [
        {
          invoice_id: 1,
          po_id: 2,
          product_id: 3,
          prod_qty: 50,
          dod: '06/10/2020',
          payment_mode: 'Cash'
        },
        {
          invoice_id: 1,
          po_id: 2,
          product_id: 3,
          prod_qty: 50,
          dod: '06/10/2020',
          payment_mode: 'Cash'
        },
        {
          invoice_id: 1,
          po_id: 2,
          product_id: 3,
          prod_qty: 50,
          dod: '06/10/2020',
          payment_mode: 'Cash'
        },
        {
          invoice_id: 1,
          po_id: 2,
          product_id: 3,
          prod_qty: 50,
          dod: '06/10/2020',
          payment_mode: 'Cash'
        },
        {
          invoice_id: 1,
          po_id: 2,
          product_id: 3,
          prod_qty: 50,
          dod: '06/10/2020',
          payment_mode: 'Cash'
        },
        {
          invoice_id: 1,
          po_id: 2,
          product_id: 3,
          prod_qty: 50,
          dod: '06/10/2020',
          payment_mode: 'Cash'
        }
      ]
    },
    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    }
  }
}
</script>
