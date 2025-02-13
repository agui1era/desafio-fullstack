const express = require("express");
const path = require("path");

const app = express();

// Servir archivos estáticos desde la carpeta de React build
app.use(express.static(path.join(__dirname, "dist")));

// Redirigir todas las rutas al frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Configurar el puerto (por defecto 3005)
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:3005`);
});
