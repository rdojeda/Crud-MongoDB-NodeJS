import app from './app.js'; 

const PORT = process.env.PORT || 8080;

/** CONNECTION SERVER */
try {
  app.listen(PORT);
  console.log(`Servidor conectado a puerto ${PORT}...`);
} catch (error) {
  console.log("Error de conexión con el servidor...", error);
}
