const { gql } = require('apollo-server');
const database = require('../../3-1-server-modularized/database');

const typeDefs = gql`
  type Supply {
    id: String
    team: Int
  }
`;

const resolvers = {
  Query: {
    supplies: () => database.supplies,
  },
  Mutation: {
    deleteSupply: (parent, { id }) => {
      const deleted = database.supplies.find((supply) => supply.id === id);
      database.supplies = database.supplies.filter((supply) => supply.id !== id);
      return deleted;
    },
  },
};

module.exports = { typeDefs, resolvers };
