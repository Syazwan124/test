let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *Perma* :     *RM 10*
╠➥ *Perma+Prem* :      *RM 15*
╠➥ *Perma+Prem+Own* :      *RM 20*
╠➥ *ScBot* : *RM 30*
╠➥ *Nomer Touch And Go* : 
║    195471037
╠═〘 PEMBAYARAN 〙 ═
╠➥ Touch And Go
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 X-WanzBotz 〙 ═`.trim(), watermark, 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewabot$/i

module.exports = handler
