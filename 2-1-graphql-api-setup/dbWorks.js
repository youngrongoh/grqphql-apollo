const database = require('./database');

class dbWorks {
  getItem = (field) => {
    return database[field];
  };

  deleteItem = (field, args) => {
    const deleted = database[field].find((item) => item.id === args.id);
    database[field] = database[field].filter((item) => item.id !== args.id);
    console.log(deleted);
    return deleted;
  };

  insertEquipment = (args) => {
    database.equipments.push(args);
    return args;
  };

  editEquipment = (args) => {
    let equipment = database.equipments.find((equipment) => equipment.id === args.id);
    Object.assign(equipment, args);
    return equipment;
  };

  getTeams = () => {
    return database.teams.map((team) => {
      team.supplies = database.supplies.filter((supply) => supply.team === team.id);
      return team;
    });
  };

  getTeam = (args) => {
    return database.teams.find((team) => team.id === args.id);
  };
}

module.exports = new dbWorks();
