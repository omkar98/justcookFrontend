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
          <div class="overline mb-4">Vendor</div>
          <v-list-item-title class="headline mb-1">Add New Vendor</v-list-item-title>
          <v-list-item-subtitle>Please fill in the details to add a new vendor.</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <template>
        <v-container class="grey lighten-5">
          <v-row no-gutters justify="center">
            <v-col lg="8">
              <v-card outlined class="pa-5">
                <template>
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      label="Vendor Name"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="address"
                      :rules="addressRules"
                      label="Vendor Address"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="poc"
                      :rules="pocRules"
                      label="Vendor POC"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="contact"
                      :rules="contactRules"
                      label="Vendor Contact Details"
                      required
                    ></v-text-field>
                    <v-file-input multiple label="Vendor Image" chips show-size accept="image/*"></v-file-input>
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
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      address: '',
      addressRules: [
        v => !!v || 'Address is required'
      ],
      poc: '',
      pocRules: [
        v => !!v || 'POC is required'
      ],
      contact: '',
      contactRules: [
        v => !!v || 'Contact Number is required',
        v => /^[6-9]\d{9}$/.test(v) || 'Contact Number must be valid'
      ]
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
