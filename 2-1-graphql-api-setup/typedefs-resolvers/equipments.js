const { gql } = require('apollo-server');
const dbWorks = require('../dbWorks');

const typeDefs = gql`
  type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
`;

const resolvers = {
  Query: {
    equipments: () => dbWorks.getItem('equipments'),
  },
  Mutation: {
    insertEquipment: (parent, args, context, info) => dbWorks.insertEquipment(args),
    editEquipment: (parent, args, context, info) => dbWorks.editEquipment(args),
    deleteEquipment: (parent, args, context, info) => dbWorks.deleteItem('equipments', args),
  },
};

module.exports = { typeDefs, resolvers };
