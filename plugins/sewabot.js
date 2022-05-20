let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ Perma
├ Perma+Prem
├ Perma+Prem+own
├ Sc Bot
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Touch And Go (195471037)
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Perma', description: "RM 10\nSewa bot tanpa batasan waktu.", rowId:".masuk"},
        {title: 'Perma+Prem', description: "RM 15\nSewa bot .", rowId:".masuk"},
        {title: 'Perma+prem+own', description: "RM 20\nSewa bot .", rowId:".masuk"},
        {title: 'Sc bot', description: "RM 25\nSewa Beli sc Bot.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
