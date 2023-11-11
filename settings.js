const fs = require('fs')
const chalk = require('chalk')
const { format } = require('./lib/myfunc')
const moment = require('moment-timezone')
moment.tz.setDefault("Asia/Jakarta").locale("id")
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = '90530678eba6a8b22c299532' // https://api.lolhuman.xyz
global.caliph = 'HyuuXyzz'
global.beta = 'BRexrqpD'
global.zenz = 'zenzkey_41b4fe7a5d'
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '6285640575421' // Owner Utama
global.owner = ['6285640575421','6282370999935', '6282370999943'] // Owner Lainnya
global.namaowner = 'Ndaa' // Nama Owner
global.premium = ['6285640575421','6285640575421'] // Premium User
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = 'NdaaBotz-Md' // NickBot
global.fake = 'Created By Ndaa' // Fake Menu
global.typemenu = 'v2' 
// 'v1' > 'v2' > 'v3' > 'v4' > 'v5' > 'v6'
// 'v1' Image ORI!
// 'v2' Image Kece!
// 'v3' Video GIF!
// 'v4' Document Pdf!
// 'v5' CallVideo!
// 'v6' Store!
global.autoread = true // ReadChat
global.autobio = true // AutoBio
global.autoblok212 = true // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.packname = `Ndaa` // Watermark Sticker
global.author = 'Botz' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    done: 'Success Kak!',
    prem: 'Feature Only For User _*Premium*_',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Private Chat*_',
    wait: 'Wait a Moment, for Process',    
    error: '_*Sorry Features Error*_',
    premium: '_*Sorry Features Only Premium*_',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/quoted.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://github.com/nda22'
/* ~~~~~~~~~ DATA RPG ~~~~~~~~~ */
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})