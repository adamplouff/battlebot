module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    console.log(`Ready!!! ${client.user.tag} is logged in and online`)
    if (interaction.isChatInputCommand()) {
      const { commands } = client
      const { commandName } = interaction
      const command = commands.get(commandName)

      if (!command) return

      try {
        await command.execute(interaction, client)
      } catch (error) {
        console.error(error)
        await interaction.reply({
          content: `Something went wrong with the command`,
          ephemeral: true
        })
      }
    }
  }
} 