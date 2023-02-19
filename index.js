// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
 
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
   
//   }

//   return gifts;
// }


function writeCards(name, e){
    let arr = [];
    for(let i = 0; i < name.length; i++){
         arr.push(`Thank you, ${name[i]}, for the wonderful ${e} gift!`)
    }
    return arr;
    
}


writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(n){
    while (n >= 0){
        console.log(n);
        n--;
    }
}
