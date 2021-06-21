const database = require('./database');
const { ApolloServer, gql } = require('apollo-server');
const mutations = require('./typedefs-resolvers/_mutaions');
const queries = require('./typedefs-resolvers/_queries');
const equipments = require('./typedefs-resolvers/equipments');
const teams = require('./typedefs-resolvers/teams');
const supplies = require('./typedefs-resolvers/supplies');

const typeDefs = [queries, mutations, equipments.typeDefs, teams.typeDefs, supplies.typeDefs];
const resolvers = [equipments.resolvers, teams.resolvers, supplies.resolvers];

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
