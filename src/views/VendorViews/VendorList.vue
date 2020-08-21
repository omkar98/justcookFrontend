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
            :items="desserts"
            sort-by="calories"
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
            @click="deleteItem(item)"
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

export default {
  data () {
    return {
      drawer: null,
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      desserts: []
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
    initialize () {
      this.desserts = [
        {
          id: 1,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          id: 2,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9
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
