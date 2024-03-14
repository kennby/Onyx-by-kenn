let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;kenn;;\nFN:kenn\nORG:kenn\nTITLE:\nitem1.TEL;waid=51907364682:51907364682\nitem1.X-ABLabel:kenn\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:kenn\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'kenn', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
