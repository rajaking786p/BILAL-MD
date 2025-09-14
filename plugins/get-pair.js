const { cmd } = require('../command');
const axios = require('axios');

// ===============================
// Pair 1 (BILAL-MD)
// ===============================
cmd({
  pattern: "pair",
  alias: ["getpair", "clonebot"],
  react: "✅",
  desc: "Get pairing code for BILAL-MD bot",
  category: "download",
  use: ".pair +920XXXXXXXX",
  filename: __filename
}, async (conn, mek, m, { q, senderNumber, reply }) => {
  try {
    const phoneNumber = q ? q.trim() : senderNumber;
    if (!phoneNumber || !phoneNumber.match(/^\+?\d{10,15}$/)) {
      return await reply("*AP APNA NUMBER ESE LIKHO ☺️❤️* \n *.PAIR 923078071982* \n *TO BILAL-MD KA PAIR CODE APKE NUMBER SE CONNECT HO JAYE GA ☺️❤️*");
    }

    // Remove + sign for API
    const cleanNumber = phoneNumber.replace(/\D/g, "");

    // Call API endpoint
    const res = await axios.get(`https:                                                           
    const code = res.data?.code;

    if (!code) {
      return await reply("*THORI DER BAD KOSHISH KAREIN ☺️❤️*");
    }

    const doneMessage = "*YEH HAI APKA PAIRING CODE AP ISE JALDI APNI WHATSAP SE CONNECT KAR LO ☺️❤️* \n *YEH 30 SECONDS ME BAND HO JAYE GA 🥺* \n *JALDII LAGA LO*";
    await reply(`//kaiz-apis.gleeze.com/api/pairing?number=${cleanNumber}`);
    const code = res.data?.code;

    if (!code) {
      return await reply("*THORI DER BAD KOSHISH KAREIN ☺️❤️*");
    }

    const doneMessage = "*YEH HAI APKA PAIRING CODE AP ISE JALDI APNI WHATSAP SE CONNECT KAR LO ☺️❤️* \n *YEH 30 SECONDS ME BAND HO JAYE GA 🥺* \n *JALDII WHATSAPP SE CONNECT KARO*";
    await reply(`${doneMessage}\n\n*CODE:❯* ${code}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await reply(`${code}`);
  } catch (err) {
    await reply("*DUBARA KOSHISH KAREIN 🥺❤️*");
  }
});
