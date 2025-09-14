const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
  pattern: "alive",
  alias: ["status", "online", "a","active"],
  desc: "Check bot is alive or not",
  category: "main",
  react: "😊",
  filename: __filename
}, async (conn, mek, m, { from, sender, reply }) => {
  try {
    const status = `*GG...☺️* \n *ME IDHAR HI HOO APKE PAS 🌹* \n *APKI HELP KE LIE ☺️🌹* \n *KOI BHI HELP CHAHYE TO MUJHE BATANA 🥰🦋*`;
    await conn.sendMessage(from, { text: status });
  } catch (e) {
    console.error("_MERE BOT ME KOI ERROR HAI SHAYAD AP PARSHAN NAA HO YEH PROBLEM BAHUT JALDI FIX HO JAYE GE_", e);
  }
});
