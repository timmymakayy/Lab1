//a function that multiply each number under 70 by 2

const ages =[25, 31, 42, 77]
// using if statement 
const PartD = ages.map((item) => {
if(item < 70){
    return item *2;
}else {
return item;
}
});

console.log(PartD);