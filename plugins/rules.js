let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let teks = `Kebijakan Privasi, Syarat Ketentuan dan Peraturan X-WanzBotz

Kebijakan Privasi
1. X-WanzBotz tidak akan merekam data riwayat chat user.
2. X-WanzBotz tidak akan menyebarkan nomor users.
3. X-WanzBotz tidak akan menyimpan media yang dikirimkan oleh users.
4. X-WanzBotz tidak akan menyalah gunakan data data users.
5. Owner Wanz berhak melihat data riwayat chat users.
6. Owner Wanz berhak melihat status users.
7. Owner Wanz dapat melihat riwayat chat, dan media yang dikirimkan users.

Peraturan X-WanzBotz
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.
6. Dilarang keras menggunakan fitur bot 18+

Syarat Ketentuan X-WanzBotz
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. X-WanzBotz dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. X-WanzBotz *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. X-WanzBotz akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. X-WanzBotz bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

SC : Thanks to
-Allah SWT
-Nurutomo
-Ariffb
-Istikmal
-Syahrul
-Mursid
-All creator

Rules: 20 Oktober 2022
`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: 'tes',
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa Bot', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewa"},
        {title: 'Cara Invit?', description: "Cara Memasukkan Bot Di GC", rowId:".tutorbot"},
        {title: 'Nomor Owner', description: "CHAT *P* TIDAK DI BALAS", rowId:".owner"},
       ] }],
        listType: 1
       }
    m.reply(teks)
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule)$/i
handler.help = ['rules']
module.exports = handler
