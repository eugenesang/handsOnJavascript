# Array.toSorted()

Consider the following code:

```js
const arr = [];
const immutable = [];

for(let i=0; i<10; i++){
    const n =  Math.random()*100;
    arr.push(parseInt(n));
    immutable.push(parseInt(n));
}

console.log('arr', arr);
console.log('imm', immutable);

const x = arr.sort((a,b)=>a-b);
const y = immutable.toSorted((a,b)=>a-b)

console.log('arr', arr);
console.log('imm', immutable);
```
The log will look like this:
```js
[
    89,
    96,
    45,
    7,
    18,
    43,
    17,
    38,
    93,
    37
]
[
    89,
    96,
    45,
    7,
    18,
    43,
    17,
    38,
    93,
    37
]
[
    7,
    17,
    18,
    37,
    38,
    43,
    45,
    89,
    93,
    96
]
[
    89,
    96,
    45,
    7,
    18,
    43,
    17,
    38,
    93,
    37
]
```

## Interpretation:
`Array.sort()` mutes the original Array. The newly introduced method `toSorted` avoids that.

### Other newly introduced methods
Other methods were introduced to modern browsers in 2023
