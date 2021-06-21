const { gql } = require('apollo-server');
const dbWorks = require('../dbWorks');

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
    teams: dbWorks.getTeams,
    team: (parent, args, context, info) => dbWorks.getTeam(args),
  },
};

module.exports = { typeDefs, resolvers };
