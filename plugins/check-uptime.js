const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
  pattern: "uptime",
  alias: ["runtime", "up"],
  desc: "Show bot uptime with stylish formats",
  category: "main",
  react: "⏱️",
  filename: __filename
}, async (conn, mek, m, { from, reply }) => {
  try {
    const uptime = runtime(process.uptime());
    const startTime = new Date(Date.now() - process.uptime() * 1000);

    // Style 8: Social Media Style
    const message = `⏱️ *Uptime Report* ⏱️
🟢 Online for: ${uptime}
📅 Since: ${startTime.toLocaleString()}
${config.DESCRIPTION}`;

    await conn.sendMessage(from, {
      text: message,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363397446799567@newsletter',
          newsletterName: config.OWNER_NAME || 'BILAL',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });
  } catch (e) {
    console.error("Uptime Error:", e);
    reply(`❌ Error: ${e.message}`);
  }
});
