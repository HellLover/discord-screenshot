# What is this?

👋 Hey there! `discord-screenshot` is a simple package to screenshot websites!

# Usage:

```javascript

   const { DiscordScreenshoter } = require("discord-screenshot");
   const website = new DiscordScreenshoter();
   const Discord = require("discord.js");
   const client = new Discord.Client();

   client.on("message", async msg => {

      const data = await website.screenshot("https://google.com");
      return msg.reply("Ready!", { files: [{ attachment: data, name: 'Screenshot.png' }] });

   })

   client.login("bot token");
```

My Discord: HellLover#9626
