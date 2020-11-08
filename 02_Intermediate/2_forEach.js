const days = ['Mon', 'Tue', 'Wed', "Thr", 'Fri', 'Sat']

/// For each
// days.forEach((value, index) => {
//     console.log(value);
//     console.log(index);
// });


///For Loop
for (let i = 0; i < days.length; i++) {
    console.log(days[i]);
}

console.log();

for (let i = days.length - 1; i >= 0; i--) {
    console.log(days[i]);
}