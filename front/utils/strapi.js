import Strapi from "strapi-sdk-javascript/build/main"

const apiUrl = process.env.BACKEND_API_ENDPOINT || process.env.backendUrl || "http://api.frenchcrafters.company"
const strapi = new Strapi(apiUrl)

export default strapi
export { apiUrl }
