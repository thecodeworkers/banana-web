import axios from 'axios'
import fallbackUrl from './path'

const STRAPI_API_URL = process.env.STRAPI_API_URL || fallbackUrl

const GraphQlClient = async (query, variables = {}) => {

  try {
    const headers = {
      'content-Type': 'application/json'
    }

    const response = await axios.post(STRAPI_API_URL, { query, variables }, { headers })

    return response.data

  } catch (err) {
    return {}
  }
}

export default GraphQlClient
