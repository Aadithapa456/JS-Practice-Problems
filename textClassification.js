// function extract_vowel_consonant_count(text) {
//    // Your code here
// }
// let char =
//    "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.";
// let charNoSpaces = char.split(" ").join("");
// console.log("Hello");
// console.log(charNoSpaces.toLowerCase());
// console.log(charNoSpaces);
// let vowel = 0;
// let consontant = 0;
// let charExctract;
// let miscellaneous = 0;
// for (let i = 0; i < char.length; i++) {
//    // console.log(char.charAt(i));
//    charExctract = charNoSpaces.charAt(i);
//    console.log(charExctract);
//    if (
//       charExctract == "a" ||
//       charExctract == "e" ||
//       charExctract == "i" ||
//       charExctract == "o" ||
//       charExctract == "u"
//    ) {
//       vowel++;
//    } else {
//       if (charExctract == "," || charExctract == "!" || charExctract == ".") {
//          miscellaneous++;
//       } else {
//          consontant++;
//       }
//    }
// }
// console.log(vowel);
// console.log(consontant);
let chara = "Hello";
let char;
for (i = 0; i < chara.length; i++) {
   char = chara[i].toLowerCase();
}  
console.log("h".includes(char));