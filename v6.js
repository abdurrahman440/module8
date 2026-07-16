// const marks=50;

// if(marks>=80){
// console.log("A+");
// }
// else if(marks>70){
//     console.log("B+");
// }
// else if(marks>60){
//     console.log("C+");
// }
// else if(marks>50){
//     console.log("D+")
// }
// else{
//     console.log("F");
// }


const totalAmount=1200;

if(totalAmount>5000){
    const discount=30;
    const discountAmount=totalAmount*discount/100;
    const payAmount=totalAmount-discountAmount;
    console.log(payAmount)
}
else if (totalAmount>1199){
    const discount=10;
    const discountAmount=totalAmount*discount/100;
    const payAmount=totalAmount-discountAmount;
    console.log(payAmount)
}
else{
    console.log(totalAmount)
}