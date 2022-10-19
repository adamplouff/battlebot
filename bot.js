require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const bot = new Discord.Client(); //create new client

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

//make sure this line is the last line
bot.login(process.env.CLIENT_TOKEN); //login bot using token

const PREFIX = '!' 

bot.on('message', msg => {

  if (/(overlord).*((not|doesn(t|'t)|(isn(t|'t))|(won(t|'t)) (work|push|transfer))|(broken))/mi.test(msg.content)) {
    msg.reply(`if Overlord recently stopped working, it's likely because of the newest Adobe update. Download v1.24 from https://license.battleaxe.co.

If you are having trouble locating your purchase, send us a message at https://help.battleaxe.co/contact.html with as much info as you have about the purchase (the license key usually works).`);
  }

  let args = msg.content.substring(PREFIX.length).split(' ')

  switch (args[0]) {
    case 'help':
      const newEmbed = new Discord.MessageEmbed()
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