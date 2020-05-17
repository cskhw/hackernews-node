const { GraphQLServer} = require('graphql-yoga')

const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
      feed: (root, args, context, info) => { // 수정
        return context.prisma.links()        // 수정
      },                                     // 수정
    },
    Mutation: {                              // 수정
      post: (root, args, context) => {       // 수정
        return context.prisma.createLink({   // 수정
          url: args.url,                     // 수정
          description: args.description,     // 수정
        })                                   // 수정
      },                                     // 수정
    },                                       // 수정
  }                                          // 수정

// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})
server.start(() => console.log('http://localhost:4000에서 서버 가동중'))
