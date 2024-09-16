const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(descriptor)

// console.log(Math.PI)
// Math.PI=4
// console.log(Math.PI)


const propertyChanger = {
    name : "Deepak",
    price:540,
    isAvailable : true,

    orderPizza : function(){
        console.log("Code Fat gaya");
    }
}

console.log(propertyChanger);

console.log(Object.getOwnPropertyDescriptor(propertyChanger,'name'))


// Object.defineProperty(propertyChanger ,'name',{
//     value : "Devil",
//     writable : false,
//     configurable : false,
//     enumerable : false
// })

// console.log(Object.getOwnPropertyDescriptor(propertyChanger,'name'))


for (let [key,value] of Object.entries(propertyChanger)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}
        
