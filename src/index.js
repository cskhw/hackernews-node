const { GraphQLServer} = require('graphql-yoga')

// 1
const typeDefs = `
    type Query {
        info: String!
        feed: [Link!]!
    }

    type Link{
        id: ID!
        description: String!
        url: String!
    }`

// 2
const resolvers = {
    Query:{
        info: () => null,
    }
}

// 3
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log('http://localhost:4000에서 서버 가동중'))
