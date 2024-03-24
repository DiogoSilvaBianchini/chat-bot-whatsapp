const { Client, LocalAuth } = require('whatsapp-web.js');
const qrCode = require("qrcode-terminal")

const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: "./auth"
    })
});

client.once('ready', () => {
    console.log("Client está pronto!")
})

client.on("qr", (qr) => {
    qrCode.generate(qr, {small: true})
})

client.on("message_create", (message) => {
    if(message.body === "ping"){
        client.sendMessage(message.from, 'pong')
    }
})

client.initialize()