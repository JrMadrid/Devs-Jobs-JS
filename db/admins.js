administradores = [
  {
    "name": "Juan",
    "id": "000",
    "password": "1234",
    "nivel": "Admin principal"
  },
  {
    "name": "Ramon",
    "id": "010",
    "password": "4321",
    "nivel": "Admin secundario"
  }
];

Object.freeze(administradores[0]);
Object.seal(administradores[1]);
module.exports.administradores = administradores