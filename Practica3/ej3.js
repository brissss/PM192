function simularLlamadaAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Datos recibidos de la API");
      }, 2000); // Simula 2 segundos de espera
    });
  }
  
  async function obtenerDatos() {
    try {
      const resultado = await simularLlamadaAPI();
      console.log(resultado);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }
  