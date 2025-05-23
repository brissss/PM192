import restar from './utils.js';
console.log(restar(5, 3));

verificarUsuario("admin")
  .then(mensaje => console.log(mensaje))
  .catch(error => console.log(error));