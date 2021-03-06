import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLogin from '@/views/AdminViews/AdminLoginView.vue'
import AdminDashboard from '@/views/AdminViews/AdminDashboard.vue'
import AddVendorDetails from '@/views/VendorViews/AddVendorDetails.vue'
import EditVendorDetails from '@/views/VendorViews/EditVendorDetails.vue'
import DeleteVendorDetails from '@/views/VendorViews/DeleteVendorDetails.vue'
import VendorList from '@/views/VendorViews/VendorList.vue'
import VendorDetails from '@/views/VendorViews/VendorDetails.vue'
import CreateVendorPO from '@/views/VendorViews/CreateVendorPO.vue'
import InvoiceTemplate from '@/views/VendorViews/InvoiceTemplate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/vendor/',
    name: 'VendorList',
    component: VendorList
  },
  {
    path: '/vendor/add',
    name: 'AddVendorDetails',
    component: AddVendorDetails
  },
  {
    path: '/vendor/:id',
    name: 'VendorDetails',
    component: VendorDetails
  },
  {
    path: '/vendor/edit/:id',
    name: 'EditVendorDetails',
    component: EditVendorDetails
  },
  {
    path: '/vendor/delete/:id',
    name: 'DeleteVendorDetails',
    component: DeleteVendorDetails
  },
  {
    path: '/purchase-order/:id',
    name: 'CreateVendorPO',
    component: CreateVendorPO
  },
  {
    path: '/invoice',
    name: 'InvoiceTemplate',
    component: InvoiceTemplate
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
