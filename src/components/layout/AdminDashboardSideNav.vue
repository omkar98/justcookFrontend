<template>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item
            :key="item.text"
            :href="item.link"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    source: String,
    drawer: Number
  },
  data: () => ({
    items: [
      { icon: 'mdi-speedometer', text: 'Dashboard', link: '/admin-dashboard' },
      { icon: 'mdi-card-account-details', text: 'Vendor', link: '/vendor/' },
      { icon: 'mdi-barcode-scan', text: 'SKUs', link: '/adminSKUs' },
      { icon: 'mdi-package-variant-closed', text: 'Purchase Orders', link: '/adminPO' },
      { icon: 'mdi-receipt', text: 'Invoices', link: '/adminInvoices' },
      { icon: 'mdi-chart-line', text: 'Reports', link: '/adminReports' }
    ]
  })
}
</script>
