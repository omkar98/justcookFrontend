import api from '@/config.js'

class PurchaseOrderDataService {
  create (data) {
    return api.post('/purchase-order', data)
  }
}

export default new PurchaseOrderDataService()
