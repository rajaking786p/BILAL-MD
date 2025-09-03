const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
pattern: "alive",
alias: ["status", "online", "a","active"],
desc: "Check bot is alive or not",
category: "main",
react: "🔰",
filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
try {
const status = `*GG...😊♥️*
*ME HOO IDHAR 😊♥️*
*APKO KOI HELP CHAHYE TO MUJHE BATAIYE ☺️🦋*`;



await conn.sendMessage(from, {  
        image: { url: config.MENU_IMAGE_URL },  
        caption: status,  
        contextInfo: {  
            mentionedJid: [m.sender],  
            forwardingScore: 1000,  
            isForwarded: true,  
            forwardedNewsletterMessageInfo: {  
                newsletterJid: '120363296818107681@newsletter',  
                newsletterName: 'I AM ACTIVE NOW',  
                serverMessageId: 143  
            }  
        }  
    }, { quoted: mek });  

} catch (e) {  
    console.error("_MERE BOT ME KOI ERROR HAI SHAYAD AP PARSHAN NAA HO YEH PROBLEM BAHUT JALDI FIX HO JAYE GE_", e);  
    reply(`An error occurred: ${e.message}`);  
}

});
