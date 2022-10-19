require('dotenv').config(); //initialize dotenv
const { Client, MessageEmbed, Intents } = require('discord.js'); //import discord.js

// const client = new Client(); //create new client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const PREFIX = '!' 

client.on('message', msg => {

  if (/(overlord).*((not|doesn(t|'t)|(isn(t|'t))|(won(t|'t)) (work|push|transfer))|(broken))/mi.test(msg.content)) {
    msg.reply(`if Overlord recently stopped working, it's likely because of the newest Adobe update. Download v1.24 from https://license.battleaxe.co.

If you are having trouble locating your purchase, send us a message at https://help.battleaxe.co/contact.html with as much info as you have about the purchase (the license key usually works).`);
  }

  let args = msg.content.substring(PREFIX.length).split(' ')

  switch (args[0]) {
    case 'help':
      const newEmbed = new MessageEmbed()
      .setTitle('Help me to help you')
      .setColor('#29a7e1')
      .setDescription('Make sure to use the !help to get access to the commands')
      .addFields(
        { name: 'Rule 1', value: 'Be nice' }
      )

      msg.author.send(newEmbed)
      break


  }
});

const options = [
  '🐭',
  'https://media.giphy.com/media/wJZTbXayokOgbCfyQe/giphy.gif',
  'https://media.giphy.com/media/QXh9XnIJetPi0/giphy.gif',
  '🐁',
];
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'randomice') {
    await interaction.reply(
      options[Math.floor(Math.random() * options.length)]
    );
  }

  if (interaction.commandName === 'help') {
    const newEmbed = new MessageEmbed()
      .setTitle('Help me to help you')
      .setColor('#29a7e1')
      .setDescription('Make sure to use the !help to get access to the commands')
      .addFields(
        { name: 'Rule 1', value: 'Be nice' }
      )

    interaction.author.send(newEmbed)
  }
});

//make sure this line is the last line
client.login(process.env.TOKEN); //login client using token
