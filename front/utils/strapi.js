import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.BACKEND_GRAPHQL_ENDPOINT || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default strapi;
export { apiUrl }
