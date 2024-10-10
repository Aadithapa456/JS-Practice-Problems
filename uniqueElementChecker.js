let a = [1, 2, 3, 2, 4, 5, 4, 6, 7, 7, 9];
let b = [];
let c = [];

for (let i = 0; i < a.length; i++) {
  let threshold = 1;
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] == a[j]) {
      threshold++;
      if (threshold > 1) {
        a.splice(j, 1);
        // j--;
        b.push(a[i]);
      }
    }
  }
  if (threshold <= 1) {
    c.push(a[i]);
  }
}
console.log(`Repeated Elements: ${b}`);
console.log(`Unique Elements: ${c}`);