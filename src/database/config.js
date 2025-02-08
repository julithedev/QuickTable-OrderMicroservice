import mongoose from "mongoose";
import { logger } from "../utils/logger.js";

export async function connectionDataBase() {
  try {
    const dbURI = process.env.DB_URI;

    if (!dbURI) {
      throw new Error("Error en la URI");
    }

    await mongoose.connect(dbURI);

    logger.info("Se conectó a la base de datos");
  } catch (e) {
    logger.error(`No se ha podido conectar la base de datos: ${e}`);
  }
}
