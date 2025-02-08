import winston from "winston";
const { combine, timestamp, json } = winston.format;

const errorFilter = winston.format((info, opts) => {
  return info.level === "error" ? info : false;
});

const infoFilter = winston.format((info, opts) => {
  return info.level === "info" ? info : false;
});

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: "./logs/app-combined.log",
    }),
    new winston.transports.File({
      filename: "./logs/app-error.log",
      level: "error",
      format: combine(errorFilter(), timestamp(), json()),
    }),
    new winston.transports.File({
      filename: "./logs/app-info.log",
      level: "info",
      format: combine(infoFilter(), timestamp(), json()),
    }),
  ],
});
