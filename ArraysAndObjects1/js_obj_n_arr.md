# Introduction To Arrays and Objects
Now that we have learned about primitives in JavaScript, its time to talk about complex datatypes that is arrays, objects and at some point we may also include strings

## Arrays
*An Array is a set or collection of variables*
Since JavaScript is dynamicaly typed, we are allowed to put different types of variables in an array.

In JavaScript, an array is just an Object in itself. We can initialize an array as follows
```js
let arr=[];
let arr1=new Array();
```
*The recomended way of initializing an array is the first on, so we wil stick to it*
Since we said that an ` Array ` is an ` Object `, there are ` methods ` attached to them.

These methods help us operate with them for example if we want to know the number of ` elements ` in an array we use the ` length  ` method.

Each method is preceeded with a dot.
```js
arr.length;
arr.pop();
arr.shift();
```
methods and their explanation

| Method  | usage
|:------- | :-----
|` .push(...args) `| adding `args` elemennts to the end of the array
|` .pop() `| removing the last element in the array
|` .concat() `| adding two arrays and returns the combined array
| ` .at() `| returns an element at a specified index
| ` .fill() `| fills an array with a static value
| ` .forEach() `| calls a function for each element in the array
| ` .reverse() `| reverses the order of elements in an array
| ` .shift() `| removes the first element in the array
| ` .unshift()`| appends elements to the beginning of the array.
|` .splice() `| adds or removes elements from an array
| ` .toString() `| converts an array to a string and returns the string

## Objects
*An* `Object` *is a set of key value pairs*

They can be initalized as 
```js
let obj ={
    key:"value",
    key2:"value 2",
    nKey:23
};

let obj1=new Object();
obj1.key="value";
obj1.key2="another value";
obj1.nKey=12;
```
things to note 
* It is initialized using a pair of opening and closing curly braces
* keys and values are separated with a colon
* a key value pair is separated from another using a coma
* we can give it a new ` attribute ` using the dot operator

for every key value pair the key is ususaly refered to an object's ` attribute ` if its just a store of value and a ` method ` if it is a function

In some cases you are allowed to set attributes that have space between its characters 

for example if you are making a person object and you want to register the date of birth for that person, you are not restricted to use another type convention to achieve this, you may just do something like
```js
let person={
    name:"Eugene Sang",
    gender:"male",
    height:{
        value:180,
        unit:"cm"
    },
    "date of birth":new Date(2000, 12, 17);
}
```
to access the ` "date of birth" ` attribute we use the square brackets
` person["date of birth"]`
which is also not rested to this type of attributes 

we can as well say
` person["name"]` or ` person["gender"]`
to mean `person.name` and `person.gender` respectively

## Itarating Arrays and Objects
### Arrays
We can go through each element in an array using differnt methods but we are going to discuss the use of ` for ` loops

1. the traditional aproach
* foward loop, from first to last element
```js
for (let i =0; i<arr.length; i++){
    //arr[i] is the current element in the iteration
}
```
* reverse loop, from last to first element
```js
for (let i=arr.length-1; i>=0; i--){
    //arr[i] is the current element in the iteration
}
```
2. Modern implimentation, `for of` loop
```js
for (let element of arr){
    //element is the cuurent element in the iteration
}
```
### Objects
in JavaScript you can iterate through an object using the ` for in ` loop.

for example
```js
for (let attr in obj){
    
}
```
Inside the loop, `attr` referes to the `key name`

To be able to access the value ascociated with the key, we use the square brackets

because if you think about it, if you use the dot operator in each iteration, the system will look for an attribute with the key name of  the specified name of the iterator - in our case `attr` 

# IIFE and arrow functions
IIFE (immidiatly invoked function expressions) is a JavaSript idea of defining a function and running it right away

since a function in JavaScript is a first class citizen, you can return it from another function therefor when you call a function that returns another function, you will need to use **IIFE**

One such example is iterating through an array using ` .forEach() ` method. In each iteration you get access to the current ellement which you need to use as a parameter in your IIFE

for example
```js
arr.forEach(function(element){
    //do something
})
```
Another example is the ` setTimeout` and ` setInterval` functions where you pass as the first parameter the IIFE
```js
setTimeout(
    function(){
        //do something
    },
    1000
)
``` 
the above instruction will delay for 1000 miliseconds (1 second) before running the IIFE

example 2
```js
setIterval(
    function(){
        //do something
    },
    10000
)
```
the above instruction will run after every 10 seconds

## arrow functions
While IIFE as a concept is realy handy, it looks ugly to write the ` function ` key word every time we have to declare one

in ES6 standard, the idea of writting IIFE as an arrow function was introduced to curb this issue

Structure of an arrow function

1. It has opening and clossing brackets with arguements passed between them if any
2. They are followed by equal and greater than signs that are joined, no whitespace between them. This indicates that they are arrow functions and its from their structure that its name is derrived
3. The curly braces are put in the body of the function

Lets write the above code using arrow functions
```js
arr.forEach((element)=>{
    //do something
})

setTimeout(
    ()=>{
        //do something
    },
    1000
)

setIterval(
    ()=>{
        //do something
    },
    10000
)
``` 
they do the same thing but arrow functions are more elgant

### Other uses of arrow functions
Arrow functions are just like other functions with a little difference, so they can be used anywhere a function can be used

# Objects and arrays Tricks
## Destructuring
if you have an object `let obj={a:1, b:"alpha"}`
you can declare a variable that coresponds to an attribute in the object i.e a variable ` a ` and ` b ` that are derrived from the object.

To achieve this, we say 
```js
let {a, b}=obj;
```
we will have a local variable ` a ` and ` b` whose values are `1` and ` "alpha" ` respectively

*This is called **object destructuring***

We also have **Array Destructuring**

for example
```js
let arr=[1,"alpha"];
let [a,b]=arr;
```
`a ` and `b` are derrived from the array where a is the first element and b is the second element

## Spreading Arrays
if you have a function and its taking in any number of arguements, for example the ` .push()` method in `Arrays`, you need to spread the arguements in that if one value is passed, you do the operation with it ,
say add it to the array, if more than one is passed, you iterate through each value while you add it to your array.

lets use the knowledge we have to make a function that will sum all the numbers and return the result

```js
let addAll=(...input)=>{
    let answer=0;
    for(let element of input){
        answer+=element;
    }
    return answer;
}
console.log(addAll(1,2,3,4)) // 10
console.log(addAll(9,8,7,6)) // 30
```
## Strings
If you want to output a string in an elegant format, for example a message like

```js
let maxScore=5000;
let player={
    name:"Eugene Sang",
    home:"KV",
    score:3450,
    passed:true,
    id:"23fc54b10e94"
};
function createMessage(user){
    let message="dear, "+user.name+" of id : "+user.id+"\n"+
    "this is to inform you that you have";
    if(user.passed){
        message+=" succesfuly passed to the next level";
    }else{
        message+=" failed to go to the next level";
    }
    message+="after scoring "+user.score+" out of "+maxScore+"\n"+"your certificate will be delivered at "+user.home+"\n  thanks";
    return message;
}

console.log(createMessage(player))
```
we could avoid all that code polution using some JavaScript tricks to make it
```js
let maxScore=5000;
let player={
    name:"Eugene Sang",
    home:"KV",
    score:3450,
    passed:true,
    id:"23fc54b10e94"
};
let createMessage=(user)=>{
    let {name, home, score, passed, id}=user;

    let message=`dear, ${name} of id : ${id},
    this is to inform you that you have ${passed===true ? " succesfuly passed to the next level " : " failed to go to the next level" }
    after scoring ${score} out of ${maxScore}
    your certificate will be delivered at ${home}`;
    return message;
}

console.log(createMessage(player))
```
