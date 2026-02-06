// let arr = [3,3,12,24,32,51,73]
// arr.forEach(item => {
//     if(item%2 == 0)
//         console.log(item)
//     });

//  console.log(arr.filter(item => item % 2 == 0 ));

// let obj = {name:"Dennis"};
// console.log(obj.name);
// obj.name = "Roy";
// console.log(obj.name);


// function greet(name){
// console.log(`Hello ${name}`);
// }
// greet("Aditya");


// const factorial = function(n)
// {
//     if(n == 1 || n == 0)
//         return 1;
//     else return n * factorial(n-1);
// }

// console.log(factorial(5));


// const palindrome = function(n)
// {
//     let temp = n;
//     let n1=0;
//     while(temp != 0){
//         let d = temp%10;
//         n1 = n1*10 + d;
//         console.log(n1);
//         temp=temp/10;
//     }
//     // console.log(n1);
//     if(n1 == n)
//         return 1;
//     else 
//         return 0;
//     // for(i=1;i<=10;i++)
//     //     console.log(n*i);
// }

// console.log(palindrome(2));

// const sales = "Toyota";
// function types(name)
// {
//     return name === "Honda"?name:"Sorry";
// }

// const car = {myCar:"Saturn",getCar:types("Honda"),special:sales};

// console.log(car.myCar);
// console.log(car.getCar);
// console.log(car.special);

// const student={name:"Ram",age:21,hobby:"cricket"};
// for(const key in student)
//     console.log(key,student[key]);

// const arr=[1,2,3,4,5,6,7];
// for(const key in arr)
//     console.log(key,arr[key]);
// const fruits=["Apple","Banana","Cherry"];
// for(const fruit of fruits)
//     console.log(fruit);


// for(const char of "Javascript")
//     console.log(char);


// let counter = 0;
// for(const char of "javascript")
// {
//     if(char == 'a' || char == 'e' ||char == 'i' ||char == 'o' ||char == 'u' )
//         counter += 1;
// }
// console.log(counter);

const colors = ["red","yellow","blue","green"];

for(const[index,color] of colors.entries())
    console.log(index,color);