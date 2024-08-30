const str1=500;
console.log(str1);

const str2 = new Number(500)
console.log(str2);

console.log(str2.toString);
console.log(typeof(str2));
console.log(str2.toString().length);



const min=10;
const max=20;

for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * (max - min +1 )) + min);
}