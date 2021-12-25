// read and write file are exclusively nodejs so you might find other places to fetch your data
const {readFile, writeFile}=require('fs');
let combination=(str)=>{
    var fn=function(active, rest, a){
        if(!active && !rest) return;
        if(!rest){
            a.push(active);
        } else{
            fn(active+rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}
let permute=(nums)=>{
    let result=[];
    if(nums.length ===0) return [];
    if(nums.length ===1) return [nums];
    for(let i=0; i<nums.length; i++){
        const currentNum=nums[i];
        const remainingNums=nums.slice(0, i).concat(nums.slice(i+1));
        const remainingNumsPermuted=permute(remainingNums);
        for(let j=0; j<remainingNumsPermuted.length; j++){
            const permutedArray=[currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
        }
    }
    return result;
}
function uniq(result){
    let final=[];
    result.forEach(d=>{
        typeof(d)=='object'? final.push(d.join('')): final.push(d);
        
    })
    result=new Set(final);
    return result;
}

function makesSense(word, dictionary){
    word=word.toLowerCase();
    for(let w of dictionary){
        w=w.toLowerCase();
        if(word===w){
            return true;
        }
    }
    return false;
};
function allCombo(w, dict){
   let words=uniq(permute(w));
   let ww=[];
   for(let word of words){
       let d=combination(word);
       d.forEach(dat=>ww.push(dat));
   }
   words=uniq(ww);
    let ret=[];
    for(let word of words){
        if(makesSense(word, dict)){
            ret.push(word);
        }
    }
    return ret;
};
//nodejs only, you may just fetch the dictionary data from elsewhere
readFile("words.txt", (err, data)=>{
    if (err){
        return err;
    }else{
        data=data.toString();
        data=data.split("\n");
        writeFile('words.json', JSON.stringify(data), err=>err);
    }
});
readFile('words.json', (err,data)=>{
    if(err) return err;
    data=data.toString();
    data=JSON.parse(data);
    let ret=allCombo("leegnd", data);
    console.log(ret);
})
// This implementation is very ineffective
