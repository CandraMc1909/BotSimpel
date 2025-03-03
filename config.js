/** 

Yg Mau Sv Nomerku?

wa.me/6285875158363

Minimal Kasih Cr kalo mau reupload😡
Create By Dika Ardnt.
Recode By Naze & ( Nama Lu )

Kalau Sampai Ketemu Lagi Creator Bot
Yg Reupload Tanpa Kasih Cr 
Sc Akan Saya Encode

Base : Hisoka
Recode : Naze & ( Nama Lu )

**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIs = { 
lolhuman: { url: 'https://api.lolhuman.xyz/api/', key: 'GataDiosV3' },
skizo: { url: 'https://skizo.tech/api/', key: 'GataDios' },
alyachan: { url: 'https://api.alyachan.dev/api/', key: null }, 
exonity: { url: 'https://exonity.tech/api/', key: 'GataDios' },
ryzendesu: { url: 'https://api.ryzendesu.vip/api/', key: null },
neoxr: { url: 'https://api.neoxr.eu/api/', key: 'GataDios' },
davidcyriltech: { url: 'https://api.davidcyriltech.my.id/', key: null },
dorratz: { url: 'https://api.dorratz.com/', key: null },
siputzx: { url: 'https://api.siputzx.my.id/api/', key: null },
vreden: { url: 'https://api.vreden.web.id/api/', key: null },
delirius: { url: 'https://delirius-apiofc.vercel.app/', key: null },
fgmods: { url: 'https://api.fgmods.xyz/api/', key: 'elrebelde21' },
popcat: { url: 'https://api.popcat.xyz', key: null }
}
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6283801785598']
global.ownernomer = "6283801785598"
global.premium = ['6283801785598']
global.packname = 'Sticker By'
global.author = 'Mci'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/nazedev'
global.myyt = 'https://youtube.com/c/Nazedev'
global.myytv = 'https://youtu.be/ey7qLuRBm5Y'
global.mygc = "https://chat.whatsapp.com/Khpnk6svwIhCIvx91Xi0Vf"
global.botname = 'Naze Dev'
global.akulaku = 'Bot By Naze'
global.ytname = 'YT NAZE'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
