const { cmd } = require('../lib');
 let recordedMessage = '';

 cmd({
   pattern: "setlink",
   desc: "Store a message as link",
   category: "utility",
 }, async (Void, citel, text) => {
   // Check if a message is already recorded
   if (recordedMessage === '') {
     const message = text.trim();
     recordedMessage = message;
     await citel.reply(`Link recorded: "${message}"`);
   } else {
     await citel.reply("A message is already recorded.");
   }
 });
 //-------------------------------------------------------------
 cmd({
   pattern: "dellink",
   desc: "Delete the recorded link",
   category: "utility",
 }, async (Void, citel) => {
   recordedMessage = '';
   await citel.reply("Link deleted.");
 });

 cmd({
   on: "text",
 }, async (Void, citel, text) => {
   if (/(\bdrop link\b|\bsend link\b|\blink\b)/i.test(text) && recordedMessage) {
     await citel.reply(recordedMessage);
   }
 });
//-------------------------------------------_______________________----------
