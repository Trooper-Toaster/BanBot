const Discord = require("discord.js");
const roblox = require("roblox-js");

exports.run = (bot, message, args) => {
  
  let person = args[0]
  
  roblox.getIdFromUsername(person).then(foundId => {
            const Id = foundId
            message.channel.send(`Hello \n \n ${Id}`)
            });
  message.channel.send
  
}


module.exports.help = {
  
  name: "id"
  
}
