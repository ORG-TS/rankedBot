require("dotenv").config();
const fs = require('node:fs'); // fs = file system
const path = require('node:path');
const { Client, GatewayIntentBits } = require("discord.js");

// Crea el cliente del bot con los permisos necesarios
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Detectar servidores (guilds)
        GatewayIntentBits.GuildMessages, // Leer mensajes en servidores
        GatewayIntentBits.MessageContent, // Leer el contenido de los mensajes
    ],
});

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filepath);
        // Meter un nuevo comando en la Collection con la clave como nombre y el valor como módulo exportado
        if ('data' in command && 'execute' in command){
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[AVISO] Falta la propiedad 'data o 'execute' para el comando en ${filePath}`);
        }
    }
}

client.once("ready", () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (message.content === "quin") {
        message.reply("pal");
    }
});

client.login(process.env.TOKEN);