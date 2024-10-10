let arr = [1,2,3,4,5,6,7,8,9,10];
let filteredArray = [];
const filterEvenNumbers = () =>{
    arr.map((val)=>{
        if(val % 2 == 0){
            filteredArray.push(val);
        }
    });
    return filteredArray;
};
let result = filterEvenNumbers();
console.log(filteredArray);