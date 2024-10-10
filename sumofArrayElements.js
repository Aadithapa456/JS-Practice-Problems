async function sumArrayElements(arr) {
    return new Promise((resolve,reject) =>{
        let sum = arr.reduce((a,b)=>{
            return a+b;
        })
        resolve(sum);
    })
}
async function main() {
    let arr = [1,2,3,4,5,6,7];
    try{
        let result = await sumArrayElements(arr);
        console.log(result);
    }catch(error){
        console.log("Sorry there was some error",error);
    }
}
main();