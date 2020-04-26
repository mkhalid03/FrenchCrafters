export default function (context) {
  const httpEndpoint =
    process.env.BACKEND_GRAPHQL_ENDPOINT || "http://localhost:1337/graphql"

  return {
    httpEndpoint,
    httpLinkOptions: {
      credentials: "same-origin",
    },
  }
}
