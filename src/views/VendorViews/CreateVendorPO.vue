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
          <div class="overline mb-4">Purchase Order</div>
          <v-list-item-title class="headline mb-1">Create new Purchase Order</v-list-item-title>
          <v-list-item-subtitle>Please fill in the details to add a new Purchase Order.</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <template>
        <v-container class="grey lighten-5">
          <v-row no-gutters justify="center">
            <v-col lg="8">
              <v-card outlined>
                <p style="background:#58362c; color: white" class="pl-5">
                    <v-row>
                    <v-col lg="6">
                        PO No: 333
                    </v-col>
                    <v-col lg="6" style="text-align: right" class="pr-5">
                        PO Date: 07/08/2020
                    </v-col>
                    </v-row>
                </p>
                <template>
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="pa-5"
                  >
                    <p>Vendor ID: </p>
                    <v-select
                        v-model="product_id"
                        :items="products"
                        :rules="[v => !!v || 'Item is required']"
                        label="Product ID"
                        required
                    ></v-select>
                    <p v-if="product_id!=''">Product Name: {{product_id}}</p>
                    <v-menu
                      v-model="delivery_date"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Date of Delivery"
                        prepend-icon="mdi-truck-delivery"
                        :rules="[v => !!v || 'Date is required']"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        required
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                    <v-select
                      v-model="select_payment"
                      :items="mode_of_payment"
                      :rules="[v => !!v || 'Item is required']"
                      label="Model of Payment"
                      required
                    ></v-select>
                    <v-file-input v-if="select_payment==='Cash'" multiple label="Upload Cash Receipt" chips show-size></v-file-input>
                    <v-btn
                      color="warning"
                      @click="resetValidation"
                    >
                      Submit
                    </v-btn>
                  </v-form>
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
      date: '',
      delivery_date: false,
      mode_of_payment: ['Cash', 'Online'],
      products: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      select_payment: '',
      product_id: ''
    }
  },
  props: {
    source: String
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
