const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Returns an embed'),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle('an embed')
      .setDescription('Cool description')
      .setColor('#18e1ee')
      
    await interaction.member.send({
      embeds: [embed]
    })
    interaction.reply('Starting a DM')
  }
}