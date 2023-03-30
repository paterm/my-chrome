import ApiService from '@services/api.service'
import { GOOGLE_KEEP_BASE } from '@const/google.const'

export default class GoogleKeepService {
  private service = new ApiService({ base: GOOGLE_KEEP_BASE })

  constructor(private token: string) {
  }

  async get() {
    if (!this.token) {
      throw new Error('Не установлен Google Token')
    }
    const options = {
      method: 'GET',
      async: true,
      headers: {
        Authorization: 'Bearer ' + this.token,
        'Content-Type': 'application/json'
      },
      'contentType': 'json'
    }
    const response = await this.service.fetch('/notes', options)
    console.log('response', response)
  }
}
