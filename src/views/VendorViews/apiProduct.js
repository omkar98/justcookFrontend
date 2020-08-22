import api from '@/config.js'

class ProductDataService {
  getAll () {
    return api.get('/product-list')
  }
}

export default new ProductDataService()
