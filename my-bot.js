const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('connect as' + client.user.tag);

    client.user.setActivity('YouTube', {type: "WATCHING"});

    client.guilds.forEach(guild => {
        console.log(guild.name);
        guild.channels.forEach(channel => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
            
        })
    })
})

client.login("NTU3NjYzOTIzNzM0NzA4MjQ3.D3Lmew.B8U_rEeZw1LuM_U7e6T8v8teQnI");