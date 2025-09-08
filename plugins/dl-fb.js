const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "fb",
  alias: ["facebook", "fbdl"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename,
  use: "<Facebook URL>",
}, async (conn, m, store, { from, q, reply }) => {
  try {
    if (!q || !q.startsWith("http")) {
      return reply("*KISI BHI FACEBOOK VIDEO KA LINK COPY KAR LO AUR FIR ESE LIKHO 😊❤️* \n *FB ❮FACEBOOK VIDEO LINK❯* \n TO APKI FACEBOOK VIDEO DOWNLOAD HO JAYE GE AUR YAHA SEND HOGI ☺️🌹*");
    }

    // Loading react
    await conn.sendMessage(from, { react: { text: '☺️', key: m.key } });

    // API Call
    const apiUrl = `https://supun-md-api-xmjh.vercel.app/api/download/fbdown?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    if (!data.success || !data.results) {
      return reply("*APKI YE FACEBOOK VIDEO DOWNLOAD NAHI HO SAKTI SORRY 😔*");
    }

    const { title, description, hdLink, sdLink } = data.results;

    if (!hdLink && !sdLink) return reply("*LINK SE VIDEO DOWNLOAD NAHI HUI 😔*");

    // Show choices
    let menu = `*👑 BILAL-MD 👑*\n\n`;
    menu += `*🔰 NAME :❯* ${title}\n`;
    menu += `*🔰 DETAILS :❯ ${description}\n\n`;
    menu += `* APKO HD QUALITY ME VIDEO DOWNLOAD KARNI HAI YA NORMAL QUALITY ME ?* \n\n`;
    if (sdLink) menu += `*❮1❯ LOW* \n`;
    if (hdLink) menu += `*❮2❯ HD* \n\n`;
    menu += `PEHLE IS MSG KO MENTION KARO AUR USKE BAD NUMBER ❮1❯ FOR LOW OR ❮2❯ FOR HD K LIE LIKHO`;

    await conn.sendMessage(from, { text: menu }, { quoted: m });

    // Create temporary store for reply
    conn.FB_DOWNLOAD = conn.FB_DOWNLOAD || {};
    conn.FB_DOWNLOAD[m.sender] = { sdLink, hdLink };

  } catch (e) {
    console.error("FB Error:", e);
    reply("*APKI VIDEO DOWNLOAD NAHI HO RAHI SORRY 😔*");
  }
});

// Reply handler
cmd({
  on: "message"
}, async (conn, m) => {
  if (!conn.FB_DOWNLOAD) return;
  const choice = m.body?.trim();
  const user = m.sender;

  if (conn.FB_DOWNLOAD[user]) {
    const { sdLink, hdLink } = conn.FB_DOWNLOAD[user];

    if (choice === "1" && sdLink) {
      await conn.sendMessage(m.chat, {
        video: { url: sdLink },
        caption: "📥 *Facebook SD Video Downloaded*\n\n- Powered By BILAL-ᎷᎠ ✅"
      }, { quoted: m });
      delete conn.FB_DOWNLOAD[user];
    }

    if (choice === "2" && hdLink) {
      await conn.sendMessage(m.chat, {
        video: { url: hdLink },
        caption: "📥 *Facebook HD Video Downloaded*\n\n- Powered By BILAL-ᎷᎠ ✅"
      }, { quoted: m });
      delete conn.FB_DOWNLOAD[user];
    }
  }
});
