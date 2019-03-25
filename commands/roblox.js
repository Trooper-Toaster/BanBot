const Discord = require("discord.js");
const roblox = require("roblox-js");

exports.run = (bot, message, args) => {
  
  let person = args[0];
  let reason = args[1]
   let proof = args[2]
  
  roblox.getIdFromUsername(person).then(foundId => {
            const Id = foundId
            message.channel.send(`Username | Id: ${person} | ${Id} \n \nProfile Link: https://www.roblox.com/users/${Id}/profile \n \nReason for the ban: ${reason} \n \nProof: ${proof} `)
            });
  message.channel.send
  
}


module.exports.help = {
  
  name: "id"
  
}
