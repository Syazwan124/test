let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Wanz
│ ✎ _Sekolah_ : SMKS 
│ ✎ _Umur_ : 17
│ ✎ _Asal_ : Kuala-Lumpur
│ ✎ _Status_ : Pelajar SMK
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/LPF
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/HjRHck
│ ✎ _Official Grup 3_ :
│    https://chat.whatsapp.com/HcG
│ ✎ _WhatsApp_ :
│    wa.me/60169650449
╰───────────────────
`.trim(), m)
}

handler.help = ['infomursid']
handler.tags = ['main', 'utama']
handler.command = /^(infomursid)$/i

handler.exp = 150

module.exports = handler
