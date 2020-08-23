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
                    class="pa-5">
                    <p>Vendor ID: </p>
                     <v-select
                      v-model="purchase_order.product_id"
                      :hint="`ProductId: ${purchase_order.product_id.id}, ProductName: ${purchase_order.product_id.title}`"
                      :items="product_items"
                      item-text="title"
                      item-value="id"
                      label="Product"
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
                    <v-text-field
                      v-model="purchase_order.payment_received"
                      label="Payment Received"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="purchase_order.payment_due"
                      label="Payment Due"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="purchase_order.qty"
                      label="Quantity"
                      required
                    ></v-text-field>
                    <v-menu
                      v-model="purchase_order.date"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="purchase_order.delivery_datetime"
                        label="Date of Delivery"
                        prepend-icon="mdi-truck-delivery"
                        :rules="[v => !!v || 'Date is required']"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        required
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="purchase_order.delivery_datetime" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                    <v-select
                      v-model="purchase_order.payment_mode"
                      :items="mode_of_payment"
                      :rules="[v => !!v || 'Item is required']"
                      label="Model of Payment"
                      required
                    ></v-select>
                    <v-file-input v-if="purchase_order.payment_mode==='Cash'" @change="onFileUpload" label="Upload Cash Receipt" type="file"></v-file-input>
                    <v-btn
                      color="warning"
                      @click="savePurchaseOrder"
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
import apiProduct from './apiProduct'
import apiPurchaseOrder from './apiPurchaseOrder'

export default {
  data () {
    return {
      drawer: null,
      mode_of_payment: ['Cash', 'Online'],
      product_items: null,
      formData: new FormData(),
      purchase_order: {
        vendor_id: this.$route.params.id,
        product_id: { id: '', title: '' },
        qty: '',
        delivery_datetime: '',
        date: false,
        payment_mode: '',
        payment_received: '',
        payment_due: '',
        cash_receipt: null
      }
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
    getProducts () {
      apiProduct.getAll()
        .then(response => {
          this.product_items = response.data
        })
        .catch(e => {
          console.log(e)
        })
    },
    onFileUpload (event) {
      console.log(event)
      this.formData.append('cash_receipt', event)
    },
    savePurchaseOrder () {
      this.formData.append('vendor_id', this.purchase_order.vendor_id)
      this.formData.append('product_id', this.purchase_order.product_id.id)
      this.formData.append('qty', this.purchase_order.qty)
      this.formData.append('delivery_datetime', this.purchase_order.delivery_datetime)
      this.formData.append('payment_mode', this.purchase_order.payment_mode)
      this.formData.append('payment_due', this.purchase_order.payment_due)

      apiPurchaseOrder.create(this.formData)
        .then(response => {
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    toggleDrawer (currentDrawer) {
      this.drawer = currentDrawer ? 'false' : 'true'
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
