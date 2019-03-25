const Discord = require("discord.js");
const roblox = require("roblox-js");

exports.run = (bot, message, args) => {
  
  const filter = m => m.author.id === message.author.id;
  
  message.reply("State the uername of person you would like banned, this will expire in 10 seconds").then(r => r.delete(10000));
  message.channel.awaitMessages(filter, {max: 1, time: 10000}).then(collected => {
    
  if(collected.content.first().content === "cancel"){
     return message.reply("Canceled!");
  }
  let person = collected.first().content;
  let reason = args[1]
   let proof = args[2]
  
  roblox.getIdFromUsername(person).then(foundId => {
            const Id = foundId
            message.channel.send(`Username | Id: ${person} | ${Id} \n \nProfile Link: https://www.roblox.com/users/${Id}/profile \n \nReason for the ban: ${reason} \n \nProof: ${proof} `)
            });
  }).cath(err => {
    console.log(err)});
  }

module.exports.help = {
  
  name: "id"
  
}
