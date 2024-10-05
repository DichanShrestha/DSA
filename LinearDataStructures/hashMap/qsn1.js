const str = 'a ggreen apple';

const map = new Map()
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
        map.set(str[i], map.get(str[i]) + 1)
    } else {
        map.set(str[i], 1)
    }
}

for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
        console.log(str[i]);
        break;
    }    
}
console.log(map);
