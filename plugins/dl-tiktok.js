const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "tiktok",
    alias: ["ttdl", "tt", "tiktokdl"],
    desc: "Download TikTok video without watermark",
    category: "downloader",
    react: "🎵",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply }) => {
    try {
        if (!q) return reply("*KISI BHI TIKTOK VIDEO KA LINK COPY KAR LO AUR ESE LIKHO ☺️❤️* \n\n\n *.TIKTOK ❮APK TIKTOK VIDEO KA LINK❯*");
        if (!q.includes("tiktok.com")) return reply("*YEH TIKTOK VIDEO KA LINK NAHI 😏*");
        
        reply("*APKI TIKTOK VIDEO DOWNLOAD HO RAHI HAI ☺️❤️*");
        
        const apiUrl = `https://kaiz-apis.gleeze.com/api/tiktok-dl?url=${q}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status || !data.data) return reply("Failed to fetch TikTok video.");
        
        const { title, like, comment, share, author, meta } = data.data;
        const videoUrl = meta.media.find(v => v.type === "video").org;
        
        const caption = `🎵 *TikTok Video* 🎵\n\n` +
                        `👤 *User:* ${author.nickname} (@${author.username})\n` +
                        `📖 *Title:* ${title}\n` +
                        `👍 *Likes:* ${like}\n💬 *Comments:* ${comment}\n🔁 *Shares:* ${share}`;
        
        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: caption,
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: mek });
        
    } catch (e) {
        console.error("Error in TikTok downloader command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
          
