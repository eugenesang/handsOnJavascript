function fixArray(arr, maxVal){
	let carry=0, ret=[];
	for(let i of arr){
		i+=carry;
		if(i>=maxVal){
			carry=parseInt(i/maxVal);
			i=i%maxVal;
		}else{
			carry=0;
		}
		ret.push(i);
	}
	if(carry>0){
		ret.push(carry);
		return fixArray(ret, maxVal);
	}
	return ret;
}
function arrToString(arr){
	let string="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	let str='';
	for(let i of arr) str+=string[i];
	return str;
}
function* createId(arr){
    while(true){
		arr[0]++;
		arr=fixArray(arr,62);
		yield(arrToString(arr));
	}
}
let chatIds=createId([23,45,67,89,23,45]);
let msgId=createId([1234567]);
let peopleId=createId([876543]);
let ChatStore=[], peopleRecord=[]; 
function findChatById(id){
    for(let chat of ChatStore){
        if(chat.id===id){
            return chat;
        }
    }
    return null;
}
class Person{
    constructor(name, phone_number){
        this.contact=phone_number;
        this.name=name;
        this.joined=new Date();
        this.id=peopleId.next().value;
        this.chats=[];
        peopleRecord.push(this);
    }
}
class Chat{
	constructor(host, guest){
		this.id=chatIds.next().value,
		this.host=host,
		this.guest=guest,
		this.messages=new Array(),
		this.createdAt=new Date();
        host.chats.push(this.id);
        guest.chats.push(this.id);
        ChatStore.push(this);
	}
};
class Message{
    constructor(chatId, message, pinned, sender){
        this.id=msgId.next().value;
        this.content=message;
        this.createdAt=new Date();
        this.pinned=pinned;
        this.chatId=chatId;
        this.sender=sender.id;
        this.sent=false;
        this.delivered=false;
        this.read=false;
        findChatById(this.chatId).messages.push(this);
    }
    getChat(){
        return findChatById(this.chatId);
    }
}
let me=new Person("Eugene", "0718925969"), damah=new Person("Damah","0793668962");
let meAndDee=new Chat(me, damah);
let mssg= new Message(meAndDee.id, "Good Evining", null, me);
let mssg2=new Message(meAndDee.id, "Goode evening", mssg.id, damah)
console.log(peopleRecord);