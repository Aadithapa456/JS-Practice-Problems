const people = [
   {
      firstName: "Aaditya",
      lastName: "Thapa",
      DOB: "2063/01/10",
      Department: "Game-Dev",
      Salary: "70000",
   },
   {
      firstName: "Aakash",
      lastName: "Koirala",
      DOB: "2062/04/20",
      Department: "Front-end",
      Salary: "60000",
   },
   {
      firstName: "Aaryan",
      lastName: "Dhakal",
      DOB: "2063/10/01",
      Department: "AI/ML",
      Salary: "85000",
   },
   {
      firstName: "Prajwal",
      lastName: "Diyali",
      DOB: "2062/03/23",
      Department: "Data-Science",
      Salary: "100000",
   },
   {
      firstName: "Prajwal",
      lastName: "Thapa",
      DOB: "2040/05/21",
      Department: "Game-Dev",
      Salary: "80000",
   },
];
function avgSalary(arr){
    let total = 0;
    let i = 0;
    arr.reduce((accumulator,person) => {
        i++;
        total += Number(person.Salary);
    },0);
    avg = total/i;
    return avg;

}
console.log(avgSalary(people));
function filterAboveThirty(arr){
    let filteredArray = [];
    filteredArray = arr.filter(person => 2080 - new Date(person.DOB).getFullYear() > 30);
    return filteredArray;
}
console.log(filterAboveThirty(people));
function fullName(arr){
    let arrFullName = [];
    arrFullName = arr.map((person)=>{
        return (`${person.firstName} ${person.lastName}`)
    });
    return arrFullName;
}
console.log(fullName(people));
function sortPersonByAge(arr) {
   return arr.sort(
      (a, b) => new Date(a.DOB).getTime() - new Date(b.DOB).getTime()
   );
}
console.log(sortPersonByAge(people));
