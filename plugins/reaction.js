// boardReaction.js
import config from '../../config.cjs'; // your config with PREFIX and OWNER
import { proto } from '@whiskeysockets/baileys'; // Memory storage (temporary)
let reactionTrigger = { active: true, ownerJid: config.OWNER[0], timeout: null, }; // OWNER[0] assume first owner number

// =============== 1. MAIN BOT MESSAGE LISTENER ================ 
export const boardMessageSync = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body?.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body?.slice(prefix.length + cmd.length).trim();

  // React on owner's message
  if (m.sender === reactionTrigger.ownerJid) {
    await sock.sendMessage(m.key.remoteJid, { react: { text: '❤️', key: m.key } });
    console.log(`↪️ Reacted to owner's message`);
  }

  // Send alert to owner if message is not from owner
  if (reactionTrigger.active && reactionTrigger.ownerJid && m.sender !== reactionTrigger.ownerJid) {
    const sender = m.sender || m.key.participant || m.key.remoteJid;
    await sock.sendMessage(reactionTrigger.ownerJid, { text: `🟡 *User @${sender.split('@')[0]}* used their board.\nTriggered by their message.`, mentions: [sender], });
  }
};
