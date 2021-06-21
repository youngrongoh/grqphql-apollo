const { gql } = require('apollo-server');
const database = require('../../3-1-server-modularized/database');

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
    equipments: () => database.equipments,
  },
  Mutation: {
    insertEquipment: (parent, args, context, info) => {
      database.equipments.push(args);
      return args;
    },
    editEquipment: (parent, args, context, info) => {
      let equipment = database.equipments.find((equipment) => equipment.id === args.id);
      Object.assign(equipment, args);
      return equipment;
    },
    deleteEquipment: (parent, { id }, context, info) => {
      const deleted = database.equipments.find((equipment) => equipment.id === id);
      database.equipments = database.equipments.filter((equipment) => equipment.id !== id);
      return deleted;
    },
  },
};

module.exports = { typeDefs, resolvers };
