const Discord = require("discord.js");

const invites = {};


  
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => { 

  
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  
  if(jsfile.length <= 0){
    console.log("Cant find any commands");
    return;
}
  
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
});
});
bot.on('ready', () => {
       
 
       
  console.log(`${bot.user.username} is online in ${bot.guilds.size} servers`);
  bot.user.setActivity('Admin Abuse', { type: 'WATCHING' });
  
 
});
bot.commands = new Discord.Collection();






 
bot.on("message", async message=> {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "/";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  







  
});


bot.login(process.env.BOT_TOKEN);

