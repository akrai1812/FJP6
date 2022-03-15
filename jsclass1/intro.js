// // printing in js 
// console.log("hello world");


// // variables in js 
// // Number 
// let a = 10;
// console.log(a);

// // Character 

// let char = 'aman';
// console.log(char);

// // string 

// let str = 'i am string';
// console.log(str);
// //boolean 

// let bool= true;
// console.log(bool);

// // loops 

// // for loop 

// for(let i=1;i<=5;i++){
//     console.log(i);
// }


// let count =10;
// while(count>0){
//     console.log(count);
//     count--;
// }

// is a number prime in js (if else )
let n= 9;
let isPrime=true;
for(let i=2;i*i<=n;i++){
    if(n%i==0){
        isPrime=false;
    }
}
if(isPrime==true){
    console.log('number is prime');
}else{
    console.log('number is not prime');
}

