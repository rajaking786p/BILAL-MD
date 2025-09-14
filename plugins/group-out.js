const { cmd } = require('../command');

cmd({
    pattern: "out",
    alias: ["ck", "kick", "remove"],
    desc: "Removes all members with specific country code from the group",
    category: "admin",
    react: "❌",
    filename: __filename
},
async (conn, mek, m, {
    from, q, isGroup, isBotAdmins, reply, groupMetadata, senderNumber
}) => {
    // Check if the command is used in a group
    if (!isGroup) return reply("*YEH COMMAND SIRF GROUPS ME USE KAREIN ☺️❤️*");

    // Get the bot owner's number dynamically from conn.user.id
    const botOwner = conn.user.id.split(":")[0];
    if (senderNumber !== botOwner) {
        return reply("*AP YE COMMAND USE NAHI KAR SAKTE 🥺❤️* \n *YEH COMMAND SIRF MERE LIE HAI ☺️❤️*");
    }

    // Check if the bot is an admin
    if (!isBotAdmins) return reply("*PEHLE MUJHE IS GROUP ME ADMIN BANAO ☺️❤️*");

    if (!q) return reply("*AGAR IS GROUP SE KISI MEMBER KO REMOVE KARNA HAI TO ESE KARE ☺️🌹* \n *.KICK 92327xxxx* \n *AGAR ESE JIS BHI MEMBER KA NUMBER LIKHO GE 🥺🌹* \n *TO WO IS GROUP SE REMOVE HO JAYE GA ☺️🌹*");

    const countryCode = q.trim();
    if (!/^\d+$/.test(countryCode)) {
        return reply("*DUBARA KOSHISH KAREIN 🥺❤️*");
    }

    try {
        const participants = await groupMetadata.participants;
        const targets = participants.filter(
            participant => participant.id.startsWith(countryCode) && 
                         !participant.admin // Don't remove admins
        );

        if (targets.length === 0) {
            return reply(`*IS GROUP ME YE MEMBER NAHI HAI 🥺🌹* +${countryCode}`);
        }

        const jids = targets.map(p => p.id);
        await conn.groupParticipantsUpdate(from, jids, "remove");
        
        reply(`YEH ${targets.length} MEMBER +${countryCode} IS GROUP SE REMOVE HO CHUKA HAI 🥺🌹*`);
    } catch (error) {
        console.error("*DUBARA KOSHISH KAREIN 🥺❤️*", error);
        reply("*DUBARA KOSHISH KAREIN 🥺❤️* " + error.message);
    }
});
