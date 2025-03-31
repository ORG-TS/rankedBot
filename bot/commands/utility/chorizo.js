const { SlashCommandBuilder } = require('discord.js');

module.exports = { // para poder usar esto en otros archivos se pone el module.exports
    data: new SlashCommandBuilder()
        .setName('chorizo')
        .setDescription('baneemos a chorizo juntos'),
    async execute(interaction) {
        await interaction.reply('Chorizo :bread: ban perro');
    }
}