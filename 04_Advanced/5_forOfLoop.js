var john = {
    name: 'I am john',
    age: 24,
    isActive: true,
}

var marry = {
    name: 'I am Marry',
    age: 23,
    isActive: true
}

var sam = {
    name: 'I am same',
    age: 29,
    isActive: false,
}

let users = new Map()

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

console.log(users.size);
console.log(users.get('sam'));
console.log(users.keys());

for (const key of users.keys()) {
    console.log(key);

}

for (const [key, value] of users.entries()) {
    console.log(key + ' ' + value.name);

}

users.forEach((value, key) => console.log(key + ' ' + value.age))

/
var arrOfarr=[['one','1'],['two','2'],['three','3']];

let araayMap = new Map(arrOfarr)
console.log(araayMap);