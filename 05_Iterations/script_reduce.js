//Reduce
//Used in Total of the Cart in website 
const myNums=[1,2,3]


//Simple Function
// const mytotal = myNums.reduce(function ( acc , currval ) {
//     console.log(`Acc:${acc} and Curr Val : ${currval}`);
    
//     return acc + currval;
// },0)       //Value of Accumulator
 
// console.log(mytotal);


//or


//Arrow Function
const myTotal = myNums.reduce((acc,curr) => acc+curr ,0)
// console.log(myTotal);







const ShoppingCart = [
    {
        ItemBane:"Clothes",
        ItemPrice:300
    },
    {
        ItemBane:"Biscuits",
        ItemPrice:100
    },
    {
        ItemBane:"Books",
        ItemPrice:799
    }
]
const PriceToPay = ShoppingCart.reduce((acc,item) => acc+item.ItemPrice,0)
console.log(PriceToPay);
