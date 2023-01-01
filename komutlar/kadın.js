const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
  
if(!['905630791118233602'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bu komutu kullanmak için yetkin bulunmamakta.`)//PROJENİN SAHİBİ GRAVİTY#2566
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
message.delete()
  
const tag = ''   
const kadinrol = message.guild.roles.cache.find(r => r.id === '905630928003555349') //kadın rol id
const kadinrol2 = message.guild.roles.cache.find(r => r.id === '953428643944751134')//kadın rol2 id
const erkekrol = message.guild.roles.cache.find(r => r.id == '') 
const erkekrol2 = message.guild.roles.cache.find(r => r.id == '') 
const kayıtsız = message.guild.roles.cache.find(r => r.id === '939280341343023134')//kayıtsız rol id
const genelchat = message.guild.channels.cache.find(c => c.id === '990537693685501962')//genel chat id
const savelog = message.guild.channels.cache.find(c => c.id === '1048956171316363325')//savelog id

if(!kadinrol) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`1. Kadın rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(!kadinrol2) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`2. Kadın rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(!kayıtsız) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Kayıtsız rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));

if(!member) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bir kullanıcı belirt.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

let name = args[1]
let age = Number(args[2])

if(!name) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bir isim belirtmelisin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(!age) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bir yaş belirtmelisin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === message.author.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Kendini kayıt edemezsin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(member.id === client.user.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bot kayıt edemezsin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(member.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Sunucu sahibini kayıt edemezsin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Belirtilen kullanıcı sizden üst/aynı pozisyonda işleme devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
  
  
datab.add(`yetkili.${message.author.id}.kadin1`, 1)
datab.add(`yetkili.${message.author.id}.toplam`, 1)
let alldata = datab.fetch(`yetkili.${message.author.id}.toplam`)

member.setNickname(`❀ ${tag} ${name} {${age}}`)
member.roles.add(kadinrol)
member.roles.add(kadinrol2)
member.roles.remove(erkekrol)
member.roles.remove(erkekrol2)
member.roles.remove(kayıtsız)
  
  


message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`▫️${member} üyesini ${message.author} kayıt etti.
\n\n ${kadinrol}, ${kadinrol2} Rolleri Verildi. \n \`❀ ${tag} ${name} {${age}}\` Olarak ismi güncellendi. <:Darklight:1048936001218822185>`)
.setFooter(`▫️Toplam kayıtların: 【${alldata}】`)               
.setColor('AQUA'))
  
genelchat.send(`<:Yardimci:1049781258999300178>  ${member} <:hg:1049783915927326761> kankam teşekkür ederim iyi eğlenceler iyi sohbetler <:panda:1049783942062014534> \n \n <:Onay:1049777947013300354> <#905630996152586351> \n \n <:Onay:1049777947013300354> <#939593667751051337> \n \n <:Onay:1049777947013300354> <#1031885644206710804> \n `)
  
savelog.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`• Yetkili: ${message.author} | \`${message.author.id}\`\n• Kullanıcı: ${member} | \`${member.id}\`\n• Güncel İsim: \`❀ ${tag} ${name} {${age}}\`\n• Roller: ${kadinrol}, ${kadinrol2} \n• Kanal: <#${message.channel.id}> | \`${message.channel.id}\`\n• Kayıtlar: \`【${alldata}】\` `)
.setColor('AQUA'))


datab.push(`isim.${message.guild.id}`, {userID: member.id, isim: name, role: kadinrol.id})}
exports.conf = {enabled: true, guildOnly: true, aliases: ['kadın', 'k', 'girl', 'woman', 'kız'], permLevel: 0}
exports.help = {name: 'kadın', description: "Etiketlenen kişiyi kadın rolleriyle kayıt eder.", usage: ',kadın @etiket/id İsim Yaş'}