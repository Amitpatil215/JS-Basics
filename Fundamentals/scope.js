//! let vs var

// let
// it follows scooping

// var
// it acts as a global variable

// let iAmGlobal='someValue'

// if(true){
//     var iAmLocal='SomeMoreValue' 
//     console.log(iAmGlobal);
//     console.log(iAmLocal);
// }
// console.log(iAmLocal);



//---Kings Problem---//

// let king = 'John'

if (true) {
    // let king = 'sam'
    if (true) {
        king = 'Ram'
        console.log(king);
    }
}

if (true) {
    console.log("Im second part " + king);
}

// if u havent declered varibale using let,var,const and you using it
// here king='Ram' at line 27
// it act as a global variable