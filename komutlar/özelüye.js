const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')//PROJENİN SAHİBİ GRAVİTY#2566
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
  
if(!['829771523048996884'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bu komutu kullanmak için yetkin bulunmamakta.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
message.delete()
  
const tag = ''   
const özel1 = message.guild.roles.cache.find(r => r.id === '905630926371971122') //özel erkek rol id
const erkekrol2 = message.guild.roles.cache.find(r => r.id === '953428670712799262')//erkek rol 2 id
const kadınrol = message.guild.roles.cache.find(r => r.id == '') 
const kadınrol2 = message.guild.roles.cache.find(r => r.id == '') 
const kayıtsız = message.guild.roles.cache.find(r => r.id === '939280341343023134')//kayıtsız id
const genelchat = message.guild.channels.cache.find(c => c.id === '990537693685501962')//genelchat id
const savelog = message.guild.channels.cache.find(c => c.id === '1048956171316363325')//savelog id

if(!özel1) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`1. Erkek rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(!erkekrol2) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`2. Erkek rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
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
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
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
  
  //PROJENİN SAHİBİ GRAVİTY#2566
datab.add(`yetkili.${message.author.id}.özel`, 1)
datab.add(`yetkili.${message.author.id}.toplam`, 1)
let alldata = datab.fetch(`yetkili.${message.author.id}.toplam`)

member.setNickname(`⋇ ${tag} ${name} [${age}]`)
member.roles.add(özel1)
member.roles.add(erkekrol2)
member.roles.remove(kadınrol) //PROJENİN SAHİBİ GRAVİTY#2566
member.roles.remove(kadınrol2)                    
member.roles.remove(kayıtsız)


message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`▫️ ${member} üyesini ${message.author} kayıt etti. \n\n ▫️${özel1}, ${erkekrol2} Rolleri Verildi.
\n \`⋇ ${tag} ${name} [${age}]\` Olarak ismi güncellendi.`)
.setFooter(`Toplam kayıtların: 【${alldata}】`)               
.setColor('AQUA'))
  
genelchat.send(`<:Yardimci:1049781258999300178>  ${member} <:hg:1049783915927326761> kankam teşekkür ederim iyi eğlenceler iyi sohbetler <:panda:1049783942062014534> \n \n <:Onay:1049777947013300354> <#905630996152586351> \n \n <:Onay:1049777947013300354> <#939593667751051337> \n \n <:Onay:1049777947013300354> <#1031885644206710804> \n `) 
  
savelog.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`• Yetkili: ${message.author} | \`${message.author.id}\`\n• Kullanıcı: ${member} | \`${member.id}\`\n• Güncel İsim: \`⋇ ${tag} ${name} [${age}]\`\n• Roller: ${özel1}, ${erkekrol2} \n• Kanal: <#${message.channel.id}> | \`${message.channel.id}\`\n• Kayıtlar: \`【${alldata}】\` `)
.setColor('AQUA'))

                                                    //PROJENİN SAHİBİ GRAVİTY#2566                  // yas: age,
datab.push(`isim.${message.guild.id}`, {userID: member.id, isim: name,  role: özel1.id})}
exports.conf = {enabled: true, guildOnly: true, aliases: ['özel', 'ö', 'özelüye', 'öü',], permLevel: 0}
exports.help = {name: 'özel', description: "Etiketlenen kişiyi erkek rolleriyle kayıt eder.", usage: ',erkek @etiket/id İsim Yaş'}//PROJENİN SAHİBİ GRAVİTY#2566