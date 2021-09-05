function whatsappToJSON(whatsappChat){
    ntext=whatsappChat.split(`
`);
let arr=new Array();
ntext.forEach(d=>{
    let e=[];
    let date=d.slice(0,10);
    let time=d.slice(11,16);
    let message=d.slice(20,d.length);
    message=message.split(':');
    let sender=message[0];
    if(message.length<2){
        sender="";
    }
    message=message.join(":");
    message=message.slice(sender.length+1, message.length);
    sender?sender=sender:sender="whatsapp";
    arr.push({date,time,sender,message});
})
return JSON.stringify(arr);
}
