const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "ᴏᴡɴᴇʀ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:X-WanzBotz;Owner;;;\nFN:+60-965 0449\nitem1.TEL;waid=60169650449:60169650449\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:X-WanzBotz@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://hardianto.xyz/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇲🇾 Malaysia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Malaysia 🇲🇾\nitem5.X-ABLabel:───────[ X-WanzBotz ]───────\nEND:VCARD"
  }, {
    "displayName": "ᴏᴡɴᴇʀ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:OwnerBotz;;;\nFN:+60 11-1506 5846\nitem1.TEL;waid=601115065846:601115065846\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:WanzGanteng@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:Touch And Go/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇲🇾 Malaysia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Kuala Lumpur 🇲🇾\nitem5.X-ABLabel:───────[ X-WanzBotz ]───────\nEND:VCARD"
  }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler
