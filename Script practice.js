// *||||| 1. EVEN OR ODD //\\|||

// let num = prompt("Enter a number");
// f(num%2 ==0){
//     console.log("Number is even");
    
// }else{
//     console.log("Number is odd");
    
// }

// *|||\\ 2. Positive or Negative ||\\\\\///

// let num = prompt("Enter a number as for your wish")
// if(num > 0){
//     console.log("Number is Positive");
    
// }
// else if (num == 0){
//     console.log("Number is zero");
// }
// else{
//     console.log("Number is Negative");
// }

// *\\||//\\|\ 3. No. from 1 to 10 |||\\\///

// let num =1;
// for(num; num<= 10; num++){
//     console.log(num);
    
// } 

// * ///||\ 4. Sum of first 10 number ||\\\//

// let sum =0;
// for(i=1; i<= 10; i++){
// sum = sum + i;
//   console.log(sum); }

// * \\|| 5. MULTIPLICATION |||\\

// let num = 5;
// for(i=1; i<=10;i++ ){
// console.log(num,"x",i,"=",num*i);

// }

// *||\\ 6. CHECK DIVISIBILITY ||\\\\//

// let c = prompt ("Enter a Number");
// if (c % 3 ==0 && c % 5 ==0) {
// console.log("Divisible by both" );    
// }
// else if (c % 3 ==0){
//     console.log("Divisible only by 3");
// }
// else if (c % 5 ==0){
//     console.log("Divisible only by 5");
// }
// else {
//     console.log("Not Divisible");
    
// }

// *||\\ 7. FACTORIAL OF NUMBER ||\\//||

// let n = 5;
// mul = 1
// for(i = 1; i<=n; i++){
//     mul = mul * i;
// }
// console.log(mul);

//  *||\|| 8. SUM OF EVEN NO. (10 TO 20)

// let number = 0;
// for(let n=0;n<=20;n+=2){
//     number=number+n
// }
// console.log(number);

// */\ 9. REVERSE COUNTING /\\|

// for(let n = 10;n>=0;n--){  
//     console.log(n);
// }

// */\ 10. LARGEST OF TWO NUMBERS /\\\|

// a = 10
// b = 2

// if (a > b ){
//     console.log("a is greater");
// }else {
//     console.log("b is greater" );
// }


//*  ||||||||||||||||||||||||||||||||||||||||||||||||||||  \\

//  1. if number is multiple of 7
//  2. print squares of number 1 to 10
//  3. print first 10 multiples of any no. n
//  4. print no. from 50 to 40 in reverse order
//  5. check if no. is positive and even
//  6. print sum odd no. from 1 to 100
//  7. count how many no. btwn 1 to 100 are divisible by 3


//* 1.
// let num = 7;
// if(num%7==0){
//     console.log(num);
    
// } 

//* 2.
// let number = 1;
// for(number;number<=10;number++){
//     console.log(number*number);
    
// }

//* 3.
// let n = 5;
// for(i=1;i<=10; i++){
//     console.log(n,"x",i,"=",i*n);
    
// }

//* 4.
// let no = 50;
// for(no;no>=40;no--){
//     console.log(no);
    
// } 

//* 5.
// let b = prompt("Enter a Number");
// if(b>0){
//     if(b%2 ==0){
//     console.log("Number is Positive and even ");
    
// }else
//     console.log("Number is positive but not even");   
// }else{
// console.log("Number is not positive");

// }

//* 6.
// let sum=0;
// for(i=1;i<=100;i++){
//     if(i%2!=0){
//           sum = sum + i
//     } 
// }

//* 7.
// let count=0;
// for(let num=1;num<=100;num++){
//     if(num%3==0){
//         count++
//     }   
// }
// console.log(count);

//*
// let num = 12;
// let endingCondtion = Math.ceil(num/2);
// for(let i = 1;i<=endingCondtion;i++){
//     if(num%i == 0){
//         console.log(i);
//     }
// }
// console.log(12);
// console.log("End");

//* 
// let num = 36;
// let sqrt = Math.sqrt(num);
// for(let i=1;i<=sqrt;i++){
//     if(num%i==0){
//         console.log(i);
//     if(num/i !=i){
//         console.log(num/i);
//         }        
//     }
// }

//* COUNT DIGIT && REVERSE \\
// let num = 1236;
// count = 0;
// let rev = 0;
// let originalNumber = num;
// while(num > 0){
//     let lastDigit = num%10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num/10);
//     count++
// }
// if(originalNumber == rev){
//     console.log("Palindrome Number");
//     }else{
//         console.log("Not a Plaindrome Number");       
//     }
//     console.log("Original Number",originalNumber);
//     console.log();
    
// console.log(rev);

// console.log(count);

//* Sum of Digits \\
// let num = 456;
// let sum = 0;
// while(num > 0){
//     let lastDigit=num%10;
//     sum = sum + lastDigit;
//     num = Math.floor(num/10);
// }
// console.log(sum);

//* ARMSTRONG NUMBER \\
// let num = 153;
// let sumOfCubes = 0;
// let originalNumber = num;
// while(num > 0){
//     let lastDigit = num%10;
//     // rev = rev * 10 + lastDigit;
//     sumOfCubes=sumOfCubes+lastDigit**3;
//     num = Math.floor(num/10);
// }
//  if(originalNumber==sumOfCubes)
// {
//     console.log("Armstrong Number");
//     }else{
//         console.log("Not an Armstrong Number",originalNumber);       
//     }
//     console.log("Original Number",originalNumber);
// console.log("Sum of Cubes",sumOfCubes);
// * STRING \\||

// let bio = "Hello World";
// console.log(bio.length);
// console.log(bio.charAt(4));
// console.log(bio.indexOf("e"));
// console.log(bio.toUpperCase());
// console.log(bio.toLowerCase());
// console.log(bio.lastIndexOf("H"));
// console.log(bio.slice(7));
// console.log(bio.split(""));
// console.log(bio.substring(6));
// console.log(bio.replace("Hello","HI"));
// console.log(bio.replaceAll("l","1"));
// console.log(bio.repeat(2));








let Password = prompt ("Enter your Password")
if(Password.length >= 8 ){
    if(Password.includes("0") || Password.includes("1") || Password.includes("2") ||Password.includes("3") ||Password.includes("4") ||Password.includes("5") ||Password.includes("6") ||Password.includes("7") ||Password.includes("8") ||Password.includes("9")){   
    if(Password.includes("@") || Password.includes ("#")){
        console.log("Entered Password is accepted");    
    }else{
            console.log("Password must contain atleast one speacial character");
            
        }
    }else{
        console.log("Password should contain atleast one number"); 
    }
}else{
console.log("Password should contain atleast 8 characters");
 }
   



