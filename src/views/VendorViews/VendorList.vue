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
        <v-card
          class="mx-auto"
          outlined
        >
        <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Vendors</div>
                <v-list-item-title class="headline mb-1">All Vendors</v-list-item-title>
                <v-list-item-subtitle>Click on each vendor to view more</v-list-item-subtitle>
              </v-list-item-content>
        </v-list-item>
        <v-data-table
            :headers="headers"
            :items="vendors"
            sort-by="name"
            class="elevation-0"
        >
        <template v-slot:top>
        <v-toolbar flat color="white">
            <v-spacer></v-spacer>
            <template>
            <v-btn
            color="primary"
            dark
            class="mb-2"
            href="/vendor/add"
            ><v-icon>mdi-plus</v-icon>Add
            </v-btn>
            </template>
        </v-toolbar>
        </template>
        <template v-slot:[`item.name`]="{ item }">
          <router-link :to="`/vendor/${item.id}`">
            {{ item.name }}
          </router-link>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
        <v-btn icon :href="`/vendor/edit/${item.id}`">
          <v-icon small>mdi-plus</v-icon>
        </v-btn>
        <v-icon
            small
            @click="deleteVendor(item.id)"
        >
            mdi-delete
        </v-icon>
        </template>
        </v-data-table>
        </v-card>
      </v-container>
    </template>
  </v-app>
</template>

<script>
import AdminDashboardHeader from '@/components/layout/AdminDashboardHeader.vue'
import AdminDashboardSideNav from '@/components/layout/AdminDashboardSideNav.vue'
import apiVendor from './apiVendor'

export default {
  data () {
    return {
      drawer: null,
      dialog: false,
      res: '',
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: true,
          value: 'id'
        },
        { text: 'Name', value: 'name' },
        { text: 'Phone No', value: 'phone_no' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      vendors: []
    }
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
    deleteVendor (item) {
      this.$confirm('Do you really want to exit?').then(res => {
        apiVendor.delete(item)
          .then(response => {
            console.log('Deleted')
          })
          .catch(e => {
            console.log(e)
          })
      })
    },
    retrieveVendors () {
      apiVendor.getAll()
        .then(response => {
          this.vendors = response.data
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.retrieveVendors()
  }
}
</script>
