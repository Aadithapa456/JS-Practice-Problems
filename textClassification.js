let char =
   "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.";
let charNoSpaces = char.split(" ").join("");
function extract_vowel_consonant_count(text) {
   let vowel = 0;
   let consontant = 0;
   let charExctract;
   let miscellaneous = 0;
   for (let i = 0; i < char.length; i++) {
      charExctract = charNoSpaces.charAt(i);
      console.log(charExctract);
      if (
         charExctract == "a" ||
         charExctract == "e" ||
         charExctract == "i" ||
         charExctract == "o" ||
         charExctract == "u"
      ) {
         vowel++;
      } else {
         if (
            charExctract == "," ||
            charExctract == "!" ||
            charExctract == "."
         ) {
            miscellaneous++;
         } else {
            consontant++;
         }
      }
   }
   return [miscellaneous,consontant];
}
console.log(extract_vowel_consonant_count(charNoSpaces));
