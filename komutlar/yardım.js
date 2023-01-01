const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = async(client, message, member, args) => {
let gold = await db.fetch(`gold_${message.member.id}`)
let user = message.mentions.users.first() || message.author;
  const yardimlistesi2 = new Discord.MessageEmbed()
  .setColor('AQUA')
  .setThumbnail('', client.user.avatarURL({dynamic: true}))
  .setAuthor('Ϟ 𝘋𝘢𝘳𝘬𝘭𝘪𝘨𝘩𝘵 #𝙕𝙪𝙡𝙖')
  .setDescription(`
  > **Merhaba <@${message.author.id}> kullanıcım.**
  > **Benim Prefixim: ${prefix}**
  > **Benim Dilim: Türkçe**

  >  ** Yardım Komutları**
  > <:Darklight:1048936001218822185> ➤ [${prefix}erkek/kız/vip/özelüye/tag <kullanıcı> <isim> <yaş>](https://discord.gg/9gWgbC8mS8) > • **Belirtilen Kullanıcıyı Kayıt Edersiniz.**  
  > <:Darklight:1048936001218822185> ➤ [${prefix}stat](https://discord.gg/9gWgbC8mS8) > • **Etiketlediğin & Kendi Kayıtların Hakkında Bilgi Verir.**  
  > <:Darklight:1048936001218822185> ➤ [${prefix}topteyit](https://discord.gg/9gWgbC8mS8) > • ** Toplam Teyit Sıralamasını Gösterir.**  
  > <:Darklight:1048936001218822185> ➤ [${prefix}kayıtsız](https://discord.gg/9gWgbC8mS8) > • ** Etiketlediğin Kullanıcıyı Kayıtsıza Atar.**
  > <:Darklight:1048936001218822185> ➤ [${prefix}kayıt-sıfırla](https://discord.gg/9gWgbC8mS8) > • ** Kayıt Stats'ları Sıfırlanır.**  
  > <:Darklight:1048936001218822185> ➤ [${prefix}isimler @Uye](https://discord.gg/9gWgbC8mS8) > • ** Kullanıcının İsimlerini Gösterir.**  
  > <:Darklight:1048936001218822185> ➤ [${prefix}istatistik ](https://discord.gg/9gWgbC8mS8) > •** Botun İstatistiklerini Gösterir.**
  
  
  > ** <:Darklight:1048936001218822185> ➤ Linkler -->**
  > • [Destek Sunucum](https://discord.gg/9gWgbC8mS8) 
  
  `)
  .setFooter(`Ϟ 𝘋𝘢𝘳𝘬𝘭𝘪𝘨𝘩𝘵 #𝙕𝙪𝙡𝙖`)
  .setTimestamp()
  .setImage('https://cdn.discordapp.com/attachments/1036730684477296660/1039981091051814982/standard_5.gif')
  message.channel.send(yardimlistesi2);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-menüsü', 'yardım-listesi'],
  permLevel: 0
}

exports.help = {
  name: 'yardım',
  description: 'Yardım listesini gösterir.',
  usage: 'yardım'
}//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566