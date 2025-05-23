export default function restar (a, b) {
    return a - b;
}

export function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
      if (usuario === "admin") {
        resolve("Acceso concedido");
      } else {
        reject("Acceso denegado");
      }
    });
  }
