const characters = [
   {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      eye_color: "blue",
      gender: "male",
   },
   {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      eye_color: "yellow",
      gender: "male",
   },
   {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      eye_color: "brown",
      gender: "female",
   },
   {
      name: "Anakin Skywalker",
      height: "188",
      mass: "84",
      eye_color: "blue",
      gender: "male",
   },
];
// Array Filter
//1. Get characters with mass greater than 100

// function massGreaterThanTen(arr){
//     let newArr = [];
//     newArr = arr.filter((character) => character.mass > 100);
//     return newArr;
// }
// console.log(massGreaterThanTen(characters));

//2. Get characters with height less than 200

// function heightLessThanTen(arr){
//     let newArr = [];
//     newArr = arr.filter((character) => character.height < 200);
//     return newArr
// }
// console.log(heightLessThanTen(characters));

//3. Get all female characters

// function allFemale(arr){
//     let newArr = [];
//     newArr = arr.filter((character) => character.gender.toLowerCase() == 'female');
//     return newArr;
// }
// console.log(allFemale(characters));

//Array Map

//1. Get array of all names
// const arrOfNames = characters.map((character)=>{
//     return character.name;
// })
// console.log(arrOfNames);

//2. Get array of all first names

// const arrOfFirstNames = characters.map((character)=>{
//     return character.name.split(" ")[0];
// })
// console.log(arrOfFirstNames);

//Array Sort

//1.Sort By Weight
// const sortedByWeight = characters.sort((firstChar,secondChar) =>{
//    return firstChar.mass - secondChar.mass;
// })
// console.log(sortedByWeight);

//2.Sort By Name
// const sortedByName = characters.sort((firstChar, secondChar) => {
//    if(firstChar.name < secondChar.name){
//       return -1;
//    }
//    return 1;
// });
// console.log(sortedByName);

// Array Reduce

//1. Get the total mass of all characters
// const totalMass = characters.reduce((acc, cur) => {
//    return acc + Number(cur.mass);
// },0);
// console.log(totalMass);
