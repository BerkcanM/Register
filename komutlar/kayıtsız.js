const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async(client, message, args) => {
 

if(!['792536559932145664'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 

return message.channel.send(new MessageEmbed().setDescription(`Komutu kullanmak için yetkiniz bulunmamakta.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor('AQUA')).then(x => x.delete({timeout: 5000}));    

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!member) return message.channel.send(new MessageEmbed().setDescription(`Geçerli Bir Kullanıcı Etiketlemelisin !`).setColor("AQUA")).then(msg => msg.delete({timeout: 5000}))

if(message.member.roles.highest.position <= member.roles.highest.position) return 

if(member.manageable)  member.setNickname(member.user.username).catch();
//PROJENİN SAHİBİ GRAVİTY#2566
let digerroller = [];

member.roles.cache.filter(r => r.id).map(r => {digerroller.push(r.id)})//PROJENİN SAHİBİ GRAVİTY#2566
member.roles.remove(digerroller)
await member.roles.add('939280341343023134')//kayıtsız rol id yaz

message.channel.send(new MessageEmbed().setDescription(`${member} Adlı Kullanıcı ${message.author} Tarafından Kayıtsız'a Atıldı !`)).then(msg => msg.delete({timeout: 4000}))}
exports.conf = { enabled: true, guildOnly: true , aliases: ["kayıtsız", "unregsiter"]}
exports.help = { name: "kayıtsız"}//PROJENİN SAHİBİ GRAVİTY#2566