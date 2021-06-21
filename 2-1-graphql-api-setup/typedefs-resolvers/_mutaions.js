const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mutation {
    insertEquipment(id: String, used_by: String, count: Int, new_or_used: String): Equipment
    editEquipment(id: String, used_by: String, count: Int, new_or_used: String): Equipment
    deleteEquipment(id: String): Equipment
    deleteSupply(id: String): Supply
  }
`;

module.exports = typeDefs;
