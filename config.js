import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
 
//⊱ ━━━━.⋅ Añada los numeros a ser Propietario/a ⋅.━━━ ⊰  

global.owner = [
  ['51902247905', 'KENN', true],
  [''],
  [''],
  ['']
] //Numeros de owner 

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.mods = []
global.prems = []

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.packname = ''
global.author = 'ONYX'
global.desc = 'KENN'
global.namebot = 'KENN'
global.wait = 'CARGANDO'
global.gcname = 'ONYX'
global.wm = ''

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.imgmenu = fs.readFileSync('./storage/img/menu.png') 
global.ytlogo = fs.readFileSync('./storage/img/ytlogo.jpg') 
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg') 
global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
global.thumbnail = fs.readFileSync('./storage/img/thumbnail.jpg')

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'ONYX', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.group = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.adanime = `ONYX BY KENN` 
global.addescargas = `ONYX BY KENN`
global.adimagen = `ONYX BY KENN` 
global.adyoutube = `ONYX BY KENN` 
global.adsticker = `ONYX BY KENN` 
global.adsearch  = `ONYX BY KENN` 
global.adnsfw = `ONYX BY KENN`

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
