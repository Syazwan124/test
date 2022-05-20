let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(image + 'donasi')).buffer(), `
╭──『 𝐃𝐎𝐍𝐀𝐒𝐈 』──⬣
│⬡ *_Touch And Go_* :
│⬡ *195471037*
│
│⬡ *_Digi_* :
│⬡ *0169650449*
│
│⬡ *_Website_*
│⬡ *_Ngak ada_*
│⬡ *_Ngak ada_*
│
│⬡ *_Owner Bot_* :
│⬡ *wa.me/60169650449*
│
│⬡「 _*Grup Bot 1*_ 」
│   https://chat.whatsapp.com
│
│⬡「 _*Grup Bot 2*_ 」
│   https://chat.whatsapp.com
│
│⬡「 _*Grup Bot 3*_ 」
│   https://chat.whatsapp.com
╰──────────────⬣
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
