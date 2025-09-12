const { cmd } = require('../command');
const { runtime } = require('../lib/functions');

cmd({
  pattern: "uptime",
  alias: ["runtime", "up", "time", "rt"],
  desc: "Show bot uptime with stylish formats",
  category: "main",
  react: "⏱️",
  filename: __filename
}, async (conn, mek, m, { from, reply }) => {
  const uptime = runtime(process.uptime());
  const currentTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' });
  const style = `*I AM CTIVE NOW 😊♥️* \n👑 *UPTINE:❯* ${uptime} \n 🌹 *TIME:❯* ${currentTime} ♥️`;
  await conn.sendMessage(from, { text: style }, { quoted: mek });
});
