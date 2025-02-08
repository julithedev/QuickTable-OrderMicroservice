import "dotenv/config";
import express from "express";
import { connectionDataBase } from "./src/database/config.js";
import { logger } from "./src/utils/logger.js";

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectionDataBase();

app.listen(PORT, () => {
  logger.info(`App escuchando en el puerto: ${PORT}`);
  console.log(`
    🚀  Servidor Express iniciado correctamente.
    📅  Fecha y hora: ${new Date().toLocaleString()}
    🌐  URL: http://localhost:${PORT}
    🛠️  Entorno: ${process.env.NODE_ENV || "development"}
  `);
});
