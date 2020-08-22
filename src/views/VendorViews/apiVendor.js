import api from '@/config.js'

class VendorDataService {
  getAll () {
    return api.get('/vendor-list')
  }

  get (id) {
    return api.get(`/vendor/${id}`)
  }

  create (data) {
    return api.post('/vendor', data)
  }

  delete (id) {
    return api.delete(`/vendor/${id}`)
  }
}

export default new VendorDataService()
