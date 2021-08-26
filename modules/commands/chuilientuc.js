module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "chuilientuc @mention",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports. run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu chửi!");
setTimeout(() => {a({body: "" + "‎Đ!t con mẹ mày" + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "‎Mày ra đây tao bảo" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "Dậy đi con lợn này" + " " + name, mentions: arraytag})} , 11000);
setTimeout(() => {a({body: "‎Hiện hồn bố mày hỏi tội" + " " + name, mentions: arraytag})} , 15000);
setTimeout(() => {a({body: "" + "‎Mày trốn khi nào mới hiện hồn đây" + name, mentions: arraytag})} , 20000);
setTimeout(() => {a({body: "‎Đ!t cụ mày nữa hiện hồn" + " " + name, mentions: arraytag})} , 24000);
setTimeout(() => {a({body: "‎Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name, mentions: arraytag})} , 28000);
setTimeout(() => {a({body: "‎Nhanh ra chửi nhau với tao" + " " + name, mentions: arraytag})} , 32000);
setTimeout(() => {a({body: "‎Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name, mentions: arraytag})} , 36000);
setTimeout(() => {a({body: "‎Con cặc địt mẹ mày" + " " + name, mentions: arraytag})} , 40000);
setTimeout(() => {a({body: "‎Đéo ra nữa bố mày đốt nhà mày" + " " + name, mentions: arraytag})} , 44000);
setTimeout(() => {a({body: "‎Bố mày bắn rap chết cụ mày giờ" + " " + name, mentions: arraytag})} , 48000);
setTimeout(() => {a({body: "‎Mày vẫn đéo dám ra à" + " " + name, mentions: arraytag})} , 52000);
setTimeout(() => {a({body: "‎Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name, mentions: arraytag})} , 56000);
setTimeout(() => {a({body: "Tao mệt rồi đéo chửi nữa" + " " + name, mentions: arraytag})} , 60000);
setTimeout(() => {a({body: "‎Nào ông chủ update lyric thì chửi tiếp nhé" + " " + name, mentions: arraytag})} , 64000);
    }