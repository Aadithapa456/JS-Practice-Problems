let arr = [2, 4, 6, 8, 4, 9, 14, 4];
let desiredNumber = 4;
const countOccurance = (val, occurance) => {
  let occuranceOfNumber = 0;
  val.forEach((a)=>{
    if(a == occurance){
        occuranceOfNumber++;
    }
  })
  return occuranceOfNumber;
};
let result = countOccurance(arr, desiredNumber);
console.log(result);
