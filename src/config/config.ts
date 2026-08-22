import { SupportedDatabaseTypes } from "../core/databaseConfig.js";
import { config as dotenvConfig } from "dotenv";
import { Config } from "../interface/config.js";
dotenvConfig();

export default {
    token: process.env.Token,
    embedColor: "#06c2fb",
    defaultLanguage: "en",
    debugMode: true,
    // allowedServers: ["1158846168957210635", "1399471603003428966"],
    prefix: "!",
    developers: ["916173342342533142"],
    database: {
        type: SupportedDatabaseTypes.MongoDB,
        url: "mongodb+srv://Abdo_321_Abdo:XMaQFy3dNRs7cHFl@cluster0.i7lewj1.mongodb.net/badge2?retryWrites=true&w=majority",
    },
} as Config;
