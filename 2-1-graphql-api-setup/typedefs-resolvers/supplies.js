const { gql } = require('apollo-server');
const dbWorks = require('../dbWorks');

const typeDefs = gql`
  type Supply {
    id: String
    team: Int
  }
`;

const resolvers = {
  Query: {
    supplies: () => dbWorks.getItem('supplies'),
  },
  Mutation: {
    deleteSupply: (parent, args) => dbWorks.deleteItem('supplies', args),
  },
};

module.exports = { typeDefs, resolvers };
