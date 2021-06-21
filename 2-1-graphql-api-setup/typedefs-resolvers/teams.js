const { gql } = require('apollo-server');
const database = require('../../3-1-server-modularized/database');

const typeDefs = gql`
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
    supplies: [Supply]
  }
`;

const resolvers = {
  Query: {
    teams: () =>
      database.teams.map((team) => {
        team.supplies = database.supplies.filter((supply) => supply.team === team.id);
        return team;
      }),
    team: (parent, { id }, context, info) => database.teams.find((team) => team.id === id),
  },
};

module.exports = { typeDefs, resolvers };
