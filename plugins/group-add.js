const { cmd } = require('../command');

cmd({
    pattern: "add",
    alias: ["a", "invite"],
    desc: "Adds a member to the group",
    category: "admin",
    react: "☺️",
    filename: __filename
},
async (conn, mek, m, {
    from, q, isGroup, isBotAdmins, reply, quoted, senderNumber
}) => {
    // Check if the command is used in a group
    if (!isGroup) return reply("*YEH COMMAND SIRF GROUPS ME USE KAREIN ☺️❤️*");

    // Get the bot owner's number dynamically from conn.user.id
    const botOwner = conn.user.id.split(":")[0];
    if (senderNumber !== botOwner) {
        return reply("*YEH COMMAND SIRF MERE LIE HAI ☺️❤️*");
    }

    // Check if the bot is an admin
    if (!isBotAdmins) return reply("*PEHLE MUJHE IS GROUP ME ADMIN BANAO ☺️❤️*");

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split("@")[0]; // If replying to a message, get the sender's number
    } else if (q && q.includes("@")) {
        number = q.replace(/[@\s]/g, ''); // If manually typing a number with '@'
    } else if (q && /^\d+$/.test(q)) {
        number = q; // If directly typing a number
    } else {
        return reply("*AP NE KOI MEMBER ADD KARNA HAI TO ESE LIKHE ☺️❤️* \n *.add 92327xxxx* \n ESE LIKH KER MEMBER KA NUMBER LIKHO GE ☺️* \n *TO WO MEMBER IS GROUP ME ADD HO JAYE GA ☺️❤️*");
    }

    const jid = number + "@s.whatsapp.net";

    try {
        await conn.groupParticipantsUpdate(from, [jid], "add");
        reply(`YEH MEMBER IS GROUP ME ADD HO CHUKA HAI ☺️❤️ \n @${number}`, { mentions: [jid] });
    } catch (error) {
        console.error("*DUBARA KOSHISH KAREIN 🥺❤️*", error);
        reply("*DUBARA KOSHISH KAREIN 🥺❤️*");
    }
});
