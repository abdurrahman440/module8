const age = 20;

// system 1 
// if(age>18){
//     console.log("please vote");
// }
// else{
//     console.log("grow up kid");
// }

// system 2
// age>18 ? console.log("please vote"):console.log("grow up kid")

// system 3
let price=500;
const isleader=false;

// if(isleader){
//     price=0;
// }
// else{
//     price=price + 100;
// }


 price=isleader ? 0 : price + 100;
console.log(price);
