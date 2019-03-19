const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('connect as' + client.user.tag);

    client.user.setActivity('YouTube', {type: "WATCHING"});

    client.guilds.forEach((guild) => {
        console.log(guild.name);
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
            
        })
        // general text 557663224053366786

    })
    let generalChannels = client.channels.get('557663224053366786');
    const attachment = new Discord.Attachment('https://giphy.com/stories/coolest-reaction-pack-of-ranveer-singh-that-we-have-been-wanting-c5e6d887-a0b9');
    generalChannels.send(attachment);
})

client.on('message', (recievedMessage) => {
    if (recievedMessage.author == client.user) {
        return
    }
    recievedMessage.channel.send('message recieved: ' + recievedMessage.author.toString() + ': ' + recievedMessage.content);

    recievedMessage.react('🤣');

    //custom emoji code
    //let customEmoji = recievedMessage.guild.emojis.get('cusom-imoji-title');

    // recievedMessage.guild.emojis.forEach((customEmoji) => {
    //     console.log(`${customEmoji.name} ${customEmoji.id}`)
    //     recievedMessage.react(customEmoji);
    // })
})

client.login("NTU3NjYzOTIzNzM0NzA4MjQ3.D3Lmew.B8U_rEeZw1LuM_U7e6T8v8teQnI");