const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    teams: [Team]
    equipments: [Equipment]
    supplies: [Supply]
    team(id: Int): Team
  }
`;

module.exports = typeDefs;
