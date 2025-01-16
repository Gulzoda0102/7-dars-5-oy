
const originalArray = [2, 4, 9, 10, 45, 67, 8, 90];

// Juft sonlar uchun bo'sh array
const evenNumbersArray = [];

// For tsikli yordamida juft sonlarni ajratish
for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 === 0) {
    evenNumbersArray.push(originalArray[i]); // Juft sonni yangi arrayga qo'shish
  }
}

// Prompt oynasida natijani ko'rsatish
const resultMessage = `Boshlang'ich array: ${originalArray}\nJuft sonlarga ajratilgan array: ${evenNumbersArray}`;
alert(resultMessage); // Prompt uchun alertdan foydalaniladi




// for(let gulzoda = 10; gulzoda >= 0; gulzoda--) {
//   console.log(gulzoda);
  
// }

// const puple = ["Alina", "Lily", "Taela", "Tina"];
// for(let index = 0; index < puple.length; index++){
//   console.log(puple[index][1]);
// }


// const number = [22, 56, 31, 27, 42, 75, 98, 21, 0, 29,66];
// const juft = [];
// const toq = [];
// for (let i = 0; i < number.length; i++){
//   if(number[i] % 2 === 0){
//     juft.push(number[i]);
//   } else {
//     toq.push(number[i]);
//   }
  
// }
// console.log(`Juft sonlar: ${juft}`);
//   console.log(`Toq sonlar: ${toq}`);




// let numbers = [2, 4, 9, 10, 45, 67, 8, 90];
// let evenNumbers = [];

// // For loop orqali juft sonlarni ajratish
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenNumbers.push(numbers[i]);  // Push metodidan foydalanamiz
//     }
// }

// console.log(evenNumbers);











const numbers = [2, 4, 9, 10, 45, 67, 8, 90]; 
const even= []; 
const odd = [];  

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
  } else {
    odd.push(numbers[i]); 
  }
}

console.log(even, "juft sonlarga ajratilgan array"); 
console.log(odd, "toq sonlarga ajratilgan array");



