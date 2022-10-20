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
const log = console.log;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    client.user.setActivity(`${config.activity}`)
    log(colors.blue("\n   WELCOME TO DJ-LITE WIKI\n-----------------------------"))
    setTimeout(() => {
        log("\n> DJ-Lite Wiki")
    }, 1000);
    setTimeout(() => {
        log(colors.green("\nCreate a ticket in our support server if you have a bug or your but doesn't work\n"))
    }, 2000);
    setTimeout(() => {
        log("Bot logged in")
    }, 4000);
    setTimeout(() => {
        log(("The bot is online now you can start using it"))
    }, 4000);
});

client.login(`${config.auth_token}`) // Don't come on this otherwise your but doesn't work