const str = 'a green apple';

const map = new Map()

let count = 0;

for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
        if ((map.get(str[i]) + 1) === 2) {
            console.log(str[i]);
            break;
        }
        map.set(str[i], map.get(str[i]) + 1)
    } else {
        map.set(str[i], 1)
    }
}

console.log(map)