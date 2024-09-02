//Itearation for Objects

const myObj={
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    css:"Cascading Style Sheet"
}

for (const key in myObj) {
    console.log(`Full Form for ${key} is ${myObj[key]}`);
}