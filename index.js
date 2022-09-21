require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token


client.on('message', msg => {
  if (/(overlord).*((not|doesn(t|'t)|(won(t|'t)) (work|push|transfer))|(broken))/mi.test(msg.content)) {
    msg.reply(`if Overlord recently stopped working, it's likely because of the newest Adobe update. Download v1.24 from https://license.battleaxe.co.

If you are having trouble locating your purchase, send us a message at https://help.battleaxe.co/contact.html with as much info as you have about the purchase (the license key usually works).`);
  }
});