require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

// Crea el cliente del bot con los permisos necesarios
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Detectar servidores (guilds)
        GatewayIntentBits.GuildMessages, // Leer mensajes en servidores
        GatewayIntentBits.MessageContent, // Leer el contenido de los mensajes
    ],
});

client.once("ready", () => {
    console.log('Bot conectado como ${client.user.tag}');
});

client.on("messageCreate", (message) => {
    if (message.content === "quin") {
        message.reply("pal");
    }
});

client.login(process.env.TOKEN);