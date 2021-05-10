# What is this?

👋 Hey there! `discord-screenshot` is a simple package for Discord bots to screenshot websites!

# Usage:

```javascript

   const Screenshoter = require("discord-screenshot");
   const Discord = require("discord.js");
   const client = new Discord.Client();

   client.on("message", async msg => {

      const result = await Screenshoter.screenshot("https://google.com")
      return msg.channel.send(result) // https://cdn.discordapp.com/attachments/813400207638790154/841331537773068338/Screenshot.png

   })

   client.login("bot token");
```
# Discord 

You can find me on Discord with tag: HellLover#9626
