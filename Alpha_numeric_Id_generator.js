let to_string=(num)=>{
    let characters="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let r="";
    if(num[0]){
        for(let i of num) r+=characters[i];
    } else{
        r=characters[num];
    }
    return r;
}
function next_value(arr){
    let ret=[],carry=0;
    for(let i of arr){
        i+=carry;
        if(i>61){
            carry=parseInt(i/62);
            i%=62;
        }else{
            carry=0;
        }
        ret.push(i);
    }
    if(carry>0){
        ret.push(carry);
       return next_value(ret);
    }
    return ret;
}
function* id_gen(){
    let arr=[0];
    while(true){
        arr[0]++;
        yield to_string(next_value(arr));
    }
}
let id=id_gen();
let counter=0;
while(counter<1000000){
    counter++;
    id.next();
}
console.log(id.next());
