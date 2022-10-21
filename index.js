//    _____        _          _       _  _         __          __ _  _     _ 
//   |  __ \      | |        | |     (_)| |        \ \        / /(_)| |   (_)
//   | |  | |     | | ______ | |      _ | |_  ___   \ \  /\  / /  _ | | __ _ 
//   | |  | | _   | ||______|| |     | || __|/ _ \   \ \/  \/ /  | || |/ /| |
//   | |__| || |__| |        | |____ | || |_|  __/    \  /\  /   | ||   < | |
//   |_____/  \____/         |______||_| \__|\___|     \/  \/    |_||_|\_\|_|
//

const {Client, GatewayIntentBits} = require("discord.js");
const config = require("./config.json");
const colors = require("colors");
const console = console.log;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ]
});

client.on("ready", () => { // in client.on("...") you need to stay off otherwise your bot doesn't work
    client.user.setActivity(`${config.activity}`)
        console(colors.blue("\n   WELCOME TO DJ-LITE WIKI\n-----------------------------"))
        setTimeout(() => {
                console("\n> DJ-Lite Wiki")
        }, 1000);
        setTimeout(() => {
            console(colors.green("\nCreate a ticket in our support server if you have a bug or your but doesn't work\n"))
        }, 2000);
        setTimeout(() => {
            console("Bot logged in")
        }, 4000);
        setTimeout(() => {
            console(("The bot is online now you can start using it"))
        }, 4000);
});

client.login(`${config.auth_token}`) // Don't come on this otherwise your but doesn't work