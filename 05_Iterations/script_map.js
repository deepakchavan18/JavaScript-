//map
const newArr=[1,2,3,4,5,6,7,8,9,10]

const newNum = newArr.map( (num) =>{
    return num + 10                //when we open the Scope use return keyword or it gives result as undefined
})
// console.log(newNum);



//Chaining of map()
const newNum1 = newArr
                    .map((num) => num * 10 )        //Result of this will pass to next chain
                    .map((num)=> num + 1 )                
                    .filter( (num) => num>= 40 )     //map returns all but filter returns only true part
                    
console.log(newNum1);


