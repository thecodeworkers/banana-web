import axios from 'axios'
import fallbackUrl from './path'

const STRAPI_API_URL = process.env.STRAPI_API_URL || fallbackUrl

const GraphQlClient = async (query, variables = {}) => {

  try {
    // const headers = {
    //   'Content-Type': 'application/json'
    // }

    const response = await axios.post(STRAPI_API_URL, { query, variables })

    return response.data

  } catch (err) {
    return {}
  }
}

export default GraphQlClient
