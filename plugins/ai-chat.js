const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "gpt",
    alias: ["bot", "white", "ai", "gpt4", "bing"],
    desc: "Chat with an AI model",
    category: "ai",
    react: "🤔",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("*AP KOI SAWAL MUJH SE PUCHNA CHAHTE HAI...🤔 \n *AP ESE LIKHO ☺️* \n*ai ❮APNA SAWAL YAHA LIKHE❯* \n *JESE NICHE KUCH SAWAL PUCHE HUWE HAI \n *AI MUJHE YEH CHIZ SAMAJH NAHI AA RAHI* \n *AI PAKISTAN KA SAB SE BARA MULK KON SA HAJ* \n *AI COMPUTER KESE CHALATE HA* \n *AGAR AP KO SAMAJH NA AYE TO MUJH SE PUCH LE☺️♥️");

        const apiUrl = `https://lance-frank-asta.onrender.com/api/gpt?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.message) {
            await react("");
            return reply("*APKA SAWAL KA JAWAB NAHI MERE PASS 😔*");
        }

        await reply(`*APKE SAWAL KA JAWAB MIL GAYA 😃*\n\n${data.message}`);
        await react("☺️");
    } catch (e) {
        console.error("ERROR...", e);
        await react("😔");
        reply("*APKA SAWAL KA JAWAB NAHI MERE PASS 😔*");
    }
});

cmd({
    pattern: "bing",
    alias: ["chatgpt", "gpt3", "open-gpt"],
    desc: "Chat with OpenAI",
    category: "ai",
    react: "🤔",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("*AP KOI SAWAL MUJH SE PUCHNA CHAHTE HAI TO ESE LIKHE ☺️♥️ \n *.OPENAI PAKISTAN KA QOMI JANWAR KON SA HAI \n *OPENAI PAKISTAN DUNIYA ME KAHA PER MOOJUD HA* \n *OPENAI MUSELMANO PER KITNY NAMAZE FARAZ HAI* \n AGAR APKO KUCH SAMAJH NA AYE TO MUJH SE PUCH SAKTE HAI ☺️♥️");

        const apiUrl = `https://vapis.my.id/api/openai?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.result) {
            await react("😔");
            return reply("*APKA SAWAL THORA SA MUSHKIL HAI IS LIE JAWAB NAHI MILA 😔*");
        }

        await reply(`YEH HAI APKE SAWAL KA JAWAB ☺️*\n\n${data.result}`);
        await react("☺️");
    } catch (e) {
        console.error("ERROR", e);
        await react("😭");
        reply("*AP KOI AUR SAWAL PUCHIYE...☺️*");
    }
});

cmd({
    pattern: "ai",
    alias: ["deep", "seekai"],
    desc: "Chat with DeepSeek AI",
    category: "ai",
    react: "🤔",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("*UHO APKE PAS KOI SAWAL HAI AUR APKO USKA JAWAB NAHI PATA AP MUJH SE PUCHIE ESE SAWAL PUCHIYE 😊♥️* \n *.AI PAKISTAN KE ABADI KITNY HAI* \n *.AI QURAN MAJEED ME KITNY SOORATEIN HAI* \n *AI TUM COMPUTER HO* ");

        const apiUrl = `https://api.ryzendesu.vip/api/ai/deepseek?text=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.answer) {
            await react("😔");
            return reply("*APKA SAWAL MUJHE SAMAJH NAHI AA RAHA 😔");
        }

        await reply(`*APKE SAWAL KA JAWAB 😃*\n\n${data.answer}`);
        await react("☺️");
    } catch (e) {
        console.error("ERROR::", e);
        await react("😔");
        reply("*AP KOI AUR SAWAL PUCHE PLEZ ☺️*");
    }
});


