// function basics
// var x = 10;
// a();
// b();
// console.log(x);

// function a()
// {
//     var x = 100;
//     console.log(x);
//      x = 300;
//     console.log(x);
// }

// function b()
// {
//     var x = 200;
//     console.log(x);
// }

// if we write a output of a function outtside the local function block the engine will not be  able to find answer and gives a output of "not defined"

// var a = 10;
// function a()
// {
//     var x=100;
// }
// a()
// console.log(a)
// console.log(x)

// scope and lexical environment

// function a()
// {
//     b();
//     function b()
//     {
//         console.log(x);
//     }

// }

// var x = 20;
// a();

// we cannot access let or const before initialisation and we get a error
// console.log(a);
// let a = 100;

// we cannot print anything if we give var variable in a block because var variables memory allocation is in global so it will act as a global component
// const a = 30;
// {
//    var a = 40;
// }
// console.log(a);

// we cannot redclare same variable if we call first var then call let or const
// var a = 20;
// let a = 30;
// console.log(a);

// closure : function along with its lexical  environment is called closure
// when u return a function within a function it will return both function and its lexical environment(closure),so it have refrence to its lexical parent even its exicution context gets delted from call stack after completing the work

// function x()
// {
//     let a = 10;
//     function y()
//     {
//         console.log(a);
//     }

//     return y;
// }

// var z = x();
// console.log(z);

// z();

// settimeout function :it is a call back function.... while using setimeout java script saves it in another place and runs the remaining code and the setimeout will only be executed once the time interval exceeds

// function x()
// {
//     var a = 10;
//     setTimeout(function() {
//         console.log(a);
//     },3000);
//     console.log("hello javascript");
// }

// var a = 5;
// x();
// console.log(a*a)

// while using var as variable in settimeout loop execution it refernce to the same memory space & everytime the call back function saves elsewhere it also have refernce bound to it also the javascript will not
// wait for none hence the loop will iterates and always gives the same answer
// for(var i=1;i<=10;i++)
// {
//     setTimeout(function() {
//         console.log(i);
//     },i * 1000);
// }

// to overcome this problem we can either use let as variable because it is block scoped so every time i iterates the reference is new i with iterated form so we get the exact answer as ecxpected
// for(let i=1;i<=10;i++)
// {
//     setTimeout(function() {
//         console.log(i)
//     }, i * 1000);
// }

// or else we can use var itself with new refernce to it by putting it inside an another function and giving refernce to new i everytime

//     for(var i=1;i<=5;i++)
// {
//     function close(i)
//     {
//         setTimeout(function ()
//         {
//             console.log(i)
//         }, i * 1000);

//     }
//     close(i);
// }

// a();
// b();
// // function statement or function declaration
// function a()
// {
//     console.log("a is called");
// }

// function expression
// var b = function()
// {
//    console.log("b is called");
// }

// differnce between function statement & function expression is in case of hoisting...In case of function statment it works properly because its a pure function but in case of function expression we are assigning function into a variable so during hoisting the value of var will be undefined in memory creation phase only in code execution phase the function is assigned into it until then it is not assigned to b so when we invoke b(); it will throw an error b is not a functiion

// anonymous function : these are functions without a name and if use it in function statemnt it will throw error of function must have a name...so the use of anonymous is to use it as values and assign those in to another varible like in function expression
// function ()
// {
//     console.log("hello");
// }

// named function expression : here we are giving a name to function thats the difference but if call the xyz(); it will throw an error because the function xyz is assigned to var b so it cant be called because its not in global context

// var b = function xyz()
// {
//     console.log("b is called");
// }

// b();

//       returning a function within a function
// function a()
// {
//     return function()
//     {

//     }
// }

// console .log(a());

//      call back function: here the function that is passed as an argument is known as call back function.....so in this example function y() is call back function..call back function is used to not block the main thread(call stack)...when a work that last more time the other works will be blocked because everything works in synchronously in call stack...in order to avoid the blocking of call stack, call back function is used so it will take the fuction elsewhere and only comes to call stack only after it called or after the time exceeds
// function x(param1)
// {
//     console.log(param1)
// }

// x(function y(){

// });

//      example for how event loop works

// console.log("start");

// let btn = document.getElementById("btn");
// btn.addEventListener("click",function cb(){
//     console.log("call back");
// });

// console.log("ends");

//         ARRAY FILTER METHOD
// const arr = [2,4,3,7,6,8];  //we have to filter a new array of only even numbers

// function isEven(x)
// {
//     return x % 2 === 0;
// }

// const output = arr.filter(isEven);

// console.log(output);

//      if we have o find the  odd number

// const arr = [1,2,3,4,5,6,7];

// function isOdd(x)
// {
//     return x % 2;
// }

// const output = arr.filter(isOdd);
// console.log(output);

//    ARRAY FILTER METHOD WITH ARROW FUNCTION
// const arr = [1,2,3,4,5,6,7];

// const output = arr.filter(x => x % 2);

// console.log(output);

//          ARRAY MAP

// const arr = [3,2,7,4];

// function isTriple(x)
// {
//   return x * 3;
// }

// const output = arr.map(isTriple);

// console.log(output);

//          this whole code can also be written as also like this
//  const arr = [3,2,7,4];

//  const output = arr.map(function isTriple(x){
//     return x * 3;
//  });
//  console.log(output);

//     or we can write it as a arrow function

//  const arr = [3,2,7,4];

//  const output = arr.map(x => x * 3);

//  console.log(output);

//          ARRAY REDUCE METHOD :it is used to give an single output by traversing whole array like sum of array or greatest number in array etc

//  BEFORE GOING INTO THAT DIRECTLY LETS TAKE AN EXAMPLE OF SUM OF ARRAY USING TRADITIONAL LOOP METHOD

// const arr = [1,2,3,4,5];

// function findSum(arr)
// {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(findSum(arr));

//          NOW WE CAN USE REDUCE METHOD : here we have to use two parameters accumulator and current,  its written in the notebook,refer to know more about acc & curr

// const arr = [1,2,3,4,5];

// const output = arr.reduce(function (accu,curr){
//     accu = accu + curr;
//     return accu;
// },0);

// console.log(output);

// USING REDUCE METHOD TO FIND MAX NUM IN ARRAY

// const arr = [1,2,3,4,5,6,9];

// const output = arr.reduce(function(max,curr)
// {
//     if(curr > max)
//     {
//         max = curr;
//         return max;
//     }
// },0);

// const users = [
//     {firstName: "akshay", lastName: "saini", age: 26},
//      {firstName: "donald", lastName: "trump", age: 75},
//      {firstName: "elon", lastName: "musk", age: 50},
//       {firstName: "aflah", lastName: "ahamed", age: 24},
//     ]

//     // we have to find the full name of the all users...here we can use map method to run over all the objects and adding the firstname and lastname to give us full name

//     const output = users.map(x => x.firstName +" "+x.lastName);
//     console.log(output);

// const users =
// [
//    {firstName: "akshay", lastName: "saini", age: 26},
//    {firstName: "donald", lastName: "trump", age: 75},
//    {firstName: "elon", lastName: "musk", age: 50},
//    {firstName: "aflah", lastName: "ahamed", age: 24},
// ]

//     // we have to find the firstname of the people whose age is less than 30....here we can filter out those with age less than 30 and we can use map method to giver= only the first name

// const output = users.filter(x => x.age < 30).map(x => x.firstName);
// console.log(output);

//    we can also use reduce method to find the firstname of the users
// const users =
// [
//   {firstName: "akshay", lastName: "saini", age: 26},
//   {firstName: "donald", lastName: "trump", age: 75},
//   {firstName: "elon", lastName: "musk", age: 50},
//   {firstName: "aflah", lastName: "ahamed", age: 24},
// ]

// const output = users.reduce(function (acc,curr){
//     if(curr.age < 30){
//         acc.push(curr.firstName);
//     }
//     return acc;
// },[]);

// console.log(output);

//          COMPARING TWO JAVASCRIPT OBJECTS GIVES FALSE
// let x = new String("aflah");
// let y = new String("ahamed");

// console.log(x === y);

//              ARRAY SORT METHOD
// in case of string its correctly sorts,if u use capital letters it will be first sorted because of ASCII value of uppercase is less than lower case
// const arr = ['apple','Apple','banana','Orange'];

// const output = arr.sort();
// console.log(output);

// but in case of numbers it will sort very badly eg:
// const arr = [1,32,25,100,200];
// const output = arr.sort();
// console.log(output);//in here we get new array of [1,100,200,25,32] which is not true....to make it right we have to use a function "compare function"

// const arr = [1,32,25,100,200];
//      ascending order
// const output = arr.sort(function (a,b){
//     return a - b;
// });
// console.log(output);

//       OR the function can be written as arrow function

// const arr = [1,32,25,100,200];
// //      ascending order
// const output = arr.sort( (a,b) => a - b);

// console.log(output);

// const arr = [1,32,25,100,200];
// //      descending order
// const output = arr.sort( (a,b) => b- a);

// console.log(output);

//          LOOP

//FOR LOOP

// const arr = ["john","doe","bob","aflah"];

// for(let i = 0;i < arr.length;i++)
// {
//     console.log(arr[i]);
// }

// THIS CAN BE ALSO DONE BY USING "FOR OF"LOOP

// const arr = ["john","doe","bob","aflah"];

// for(element of arr)
// {
//    console.log(element);    //here the array values are assigned into a new variable name by using "of" & the name is allowed to print
// }

// function onClick ()
// {
//    const element = document.getElementById("hello");
//    element.remove();
// }

// const arr = [1,2,3]

// const resultArr = arr.map((value,index) =>{
//     if(index > 0){
//         arr.push(5)
//     }
//     return value;
// });

// console.log(resultArr,arr)

// callback example

// setTimeout(function()
// {
//     const Array = [1,32,24,6,2]

//     const filterArr = Array.filter(function (element)
//     {
//        if (element > 20)
//        {
//         return element;
//        }
//     })
//     console.log(filterArr);
// },3000);

// function x(callback)
// {
//     callback();

//    const array = [1,2,3,4,5]

//    const newArr = array.map((element) => element * element )

//    console.log(newArr);

//     // y();
// }

// x(function y()
// {
//     const arr = [21,23,12,9,42,54]

//     const sortedArr = arr.sort((a,b) => a - b )

//     console.log(sortedArr);
// });

// function x (callback)
// {
//     console.log("x");
//     callback();
// }

// function y()
// {
//     console.log("y");
// }

// x(y);

// setTimeout(function (){
//     console.log(`AFLAH`)
// },5000);

// let myArray = [1, 2, 3, 4];
// 	let a=[]
// 	const returnValue = myArray.forEach((element) => {
// 	a.push(element * element);

// 	});
// 	console.log(a);

// function findShort(s){

// 	let splittedArr = s.split(` `)

// 	let newArr = []
// 	for(let i = 0;i < splittedArr.length;i++)
// 	{
// 		newArr.push(splittedArr[i].length)
// 	}

//    let sorted = newArr.sort((a,b)=>a - b)

// 	console.log(sorted[0])
//    }

//    findShort(`this is My script tutorial`)

//       PROMISES

// const cart = [`shoe`,`pants`,`kurtas`];

// createOrder(cart)
// .then(function(orderId){
// 	console.log(orderId)
// 	return orderId;
// })
// .then(function(orderId){
// 	return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
// 	console.log(paymentInfo);
// })
// .catch(function(err){
// 	console.log(err.message);
// })
// .catch(function(Err){
// 	console.log(Err.message)
// })

// function createOrder(cart)
// {
// 	const pr = new Promise(function(resolve, reject) {

// 		if(!validateCart(cart))
// 		{
// 			const err = new Error(`cart is not valid`)

// 			reject(err);
// 		}

// 		const orderId = `24345242`

// 		if(orderId)
// 		{
// 			resolve(orderId)
// 		}

// 	})
// 	return pr;
// }

// function proceedToPayment(orderId)
// {
// 	let pro = new Promise(function(resolve, reject) {

// 		if(!validatePayment(orderId))
// 		{
// 			const Err = new Error(`payment not succesfull`)

// 			reject(Err);
// 		}
// 		else
// 		{
// 			resolve("payment is succesfull")
// 		}
// 	})
// 	return pro
// }

// function validateCart(cart)
// {
// 	return true;
// }

// function validatePayment(orderId)
// {
// 	return false;
// }

// let b= 20;
// function a()
// {
// 	function c()
// 	{
// 		console.log(b)
// 	}
// 	c();
// }

// a()

// const a = 20;

// {
// 	a = 25;
// }

// console.log(a)

// function x()
// {
// 	var a = 10
// 	function y()
// 	{
// 		console.log(a)
// 	}
// 	return y;
// }

// var z = x();

// console.log(z);

// z()

// function a(x)
// {
// 	// console.log(x)
// }

// function b()
// {
// 	console.log(10);
// }

//  a(b());

// const array = [`red`,`blue`,`green`,`yellow`]

// const pushedArr = array.slice(1)

// console.log(array,pushedArr)

// function x(){
// 	console.log(`helo`)
// }

// function y(x)
// {
// 	x();
// }

// y(x);

// let str = "apple,banana,orange"

// let part = str.slice(6,12)

// console.log(part)

// const arr = {
// 	firstName:"Aflah",
// 	lastName:"Ahamed"
// }

// for(let key in name){
// 	console.log(name[key])
// }

// console.log(arr.lastName +" "+ arr.firstName)

// Lexical eg

// let a = 20

// let hello = ()=>{
// 	console.log(a)
// }

// hello()

// function a(){
// 	let x = 10
// 	function b(){
// 		console.log(x+x)
// 	}
// 	b()
// }
// a()

// const arr = [2,3,4,5]

// function isBiggerThanOne(element){
// 	return element >1
// }
// console.log(arr.every(isBiggerThanOne))

// const arr =[1,2,3,4,5]

// arr.fill(6,2,4)

// console.log(arr);

// let arr = [22,16,18,1,29]

// console.log(arr.findLast(ele=>ele>18))

// let array = [23,21,4,[[34,23,[21,43]]]]

// console.log(array.flat(1))

// let arr = [1,2,3,4]

// let multipleArr = arr.map(element=>element*element)

// console.log(multipleArr)

// let string = "apple,orange,banana"

// let part = string.substring(5,12)

// console.log(part)

// function sum(a,b,...rest){
// console.log(rest)
// }

// sum(10,20,30,40,50)

//  (function (){
//     let name = `Aflah`
//     // return name;
//     console.log(name);
// })()

// const p1 = Promise.resolve("Promise P1"); //returns a promise of resolved value "Promise P1"
// const p2 = new Promise((resolve, reject) => { //Promise method to resolve or reject values
//     reject("Promise P2"); //P2 will contain promise of rejecting value "Promise P2", leading to an error while using Promise.all method
// });
// const p3 = new Promise((resolve, reject) => {
//     resolve("Promise P3"); //P3 will contain resolved value "Promise P3"
// });

// Promise.all([p1, p2, p3]).then(values => {
//     console.log(values); //will generate an error due to the rejection of promise P2
// });

// let arr = [2,4,6,5]

// let result = arr.find(x=>x > 4)

// console.log(result)

//    OBJECT DESTRUCTURING

// const person = {
//     name:`aflah`,
//     place:`calicut`,
//     age:24
// }

// let {name,place,age} = person

// console.log(name)

// console.log(`Aflah
// ahamed
// jebin
// mohamed`)

// INSERTION SORT

// let a = [23, 14, 64, 11, 9, 13];

// for (let i = 1; i < a.length; i++) {
//   let temp = a[i];
//   j = i - 1;
//   while (j >= 0 && a[j] > temp) {
//     a[j + 1] = a[j];
//     j--;
//   }
//   a[j + 1] = temp;
// }

// console.log(a);

// RECUSRION

// let num = 10

// let sum = function (num){
// if(num > 0){

//    return  num +  sum(num-1)
// }
// else{
//     return false;
// }
// }
// let result = sum(num)

// let num = 5

// let factorial = function (num){
// if(num == 0){

//    return  1
// }
// else{
//     return num *  factorial(num-1);
// }
// }
// let result = factorial(num)

// console.log(result)

// let websites = []

// for(i = 0;i < 1000;i++){
//     websites.push(`codewars`)
// }

// console.log(websites);

// ANAGARAM prblem

// const isAnagram = (test,original)=>{
// return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('') ? true :false

// }

// let result = isAnagram('silent','listen')

// console.log(result);

// Longest combination

// function longestConsec(strarr, k) {
//     if(k <= 0 || k > strarr.length){
//         return ""
//     }

//   if(k == 1){

//     let longestElement = strarr[0]

//     for(i = 1;i < strarr.length;i++){
//         if(longestElement.length < strarr[i].length){
//           longestElement = strarr[i]
//         }
//     }
//     return longestElement
//   }

//   if(k > 1){
//     let longestCombination = "";
//         for (let i = 0; i <= strarr.length - k; i++) {
//             let combination = strarr.slice(i, i + k).join("");
//             if (combination.length > longestCombination.length) {
//                 longestCombination = combination;
//             }
//         }
//         return longestCombination;
//   }
// }

// let result = longestConsec(["tree","appletree","pineappletree","mango"],3)

// console.log(result);

// to part an array

// function partList(arr) {
//   let newArr = [];

//   for (i = 0; i < arr.length - 1; i++) {
//     newArr.push([arr.slice(0, i + 1).join(" "), arr.slice(i + 1).join(" ")]);
//   }
//   return newArr;
// }

// let result = partList(["az", "toto", "picaro", "zone", "kiwi"]);

// console.log(result);

// function seriesSum(num){

//     let sum = 0

//     for(i = 0;i < num;i++){
//         sum+= 1/(1+i*3)
//     }
//     return sum.toFixed(2)
// }

// let result = seriesSum(5)

// console.log(result);

// function reverseLetter(str) {
//    return str.replace(/[^a-z]/gi,'').split('').reverse().join('')
//   }

//   let result = reverseLetter(`afl?a!h`)

//   console.log(result);

// function nearestSqr(n){
// return Math.pow(Math.round(Math.sqrt(n)),2)
// }

// let result = nearestSqr(111)

// console.log(result);

// function mxdiflg(a1, a2) {
//   let newArr = a1.concat(a2);
//   let lengthArr = [];
//   for (i = 0; i < newArr.length; i++) {
//     lengthArr.push(newArr[i].length);
//   }
//   lengthArr.sort((a, b) => a - b);
//   let longestLength = lengthArr[lengthArr.length - 1] - lengthArr[0];
//   return longestLength;
// }

// let result = mxdiflg(
//   [
//     "hoqq",
//     "bbllkw",
//     "oox",
//     "ejjuyyy",
//     "plmiis",
//     "xxxzgpsssa",
//     "xxwwkktt",
//     "znnnnfqknaz",
//     "qqquuhii",
//     "dvvvwz",
//   ],
//   ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// );
// console.log(result);

// function persistence(num){
// let number = num.toString()
// let times = 0
// while(number.length > 1){
//   times++
//   number = number.split('').map(Number).reduce((a,b)=>a * b).toString()
// }
// return times
// }

// let result = persistence(874)

// console.log(result);

// function wave(str) {
//   let newArr = [];
//   for (i = 0; i < str.length; i++) {
//     newArr.push(`${str.replace(str[i], str[i].toUpperCase())}`);
//   }
//   return newArr;
// }

// let result = wave(`helso`);

// console.log(result);

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   let factorial = 1;

//   for (i = n; i > 0; i--) {
//     factorial *= i;
//   }
//   return factorial;
// }

// let result = factorial(5);
// console.log(result);

// function divCon(x) {
//   let stringArr = [];
//   let integerSum = 0;
//   for (i = 0; i < x.length; i++) {
//     if (typeof x[i] === "string") {
//       stringArr.push(x[i]);
//     } else {
//       integerSum += x[i];
//     }
//   }
//   let stringSum = stringArr.map((x) => +x).reduce((a, b) => a + b, 0);
//   return integerSum - stringSum;
// }

// let result = divCon(["1", "2", "4", 8, "3", 6, 10]);
// console.log(result);

// function order(words){
//   return words.split(' ').sort((a,b)=>a.match(/[1-9]/)-b.match(/[1-9]/)).join(' ')
//   }

//   let result = order(`is2 Thi1s T4est 3a`)
//   console.log(result);

// function reverse(array) {
//   return array.reverse()
// }

// let result = reverse([637, 361])
// console.log(result);

// function createPhoneNumber(numbers){
//   let join = numbers.join('')
//   return `(${join.slice(0,3)}) ${join.slice(3,6)}-${join.slice(6)} `
// }

// let result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// console.log(result);

// function tidyNumber(n) {
//   return (
//     n.toString().split("").join("") ==
//     n
//       .toString()
//       .split("")
//       .sort((a, b) => a - b)
//       .join("")
//   );
// }
// let result = tidyNumber(12);
// console.log(result);

// function twoSum(nums,target){
//   let newArr = []
//   for(i=0;i<nums.length-1;i++){
//     for(j=i+1;j<nums.length;j++){
//       if(nums[i]+nums[j]===target){
//         newArr.push(i,j)
//         break;
//       }
//     }
//     }
//     return newArr
// }

// let result = twoSum([1,2,3,4],5)
// console.log(result);

// var findMedianSortedArrays = function(nums1, nums2) {
//   let concatArr=nums1.concat(nums2).sort((a,b)=>a-b)
//     if(concatArr.length % 2=== 0){
//         return concatArr.slice(concatArr.length/2-1,(concatArr.length/2)+1)
//     }else{
//       return concatArr.slice(concatArr.length/2,concatArr.length/2+1)
//     }
// };

// console.log(findMedianSortedArrays([1,3],[2,4]));

// var removeDuplicates = function(nums) {
//   let set1 =Array.from( new Set(nums))
//   // let newArr = Array.from(set1)
//   return (set1)
// };

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// var searchInsert = function(nums, target) {
//   if(nums.includes(target)){
//       return nums.indexOf(target)
//   }else{
//     nums.push(target)
//     return nums.sort((a,b)=>a-b).indexOf(target)

//   }
// };

// console.log(searchInsert([1,3,5,6],2));

// var merge = function(nums1, m, nums2, n) {
//   nums1.length=m
//   nums2.length=n
//  let concatArr = nums1.concat(nums2)
//  return concatArr.sort((a,b)=>a-b)
// };

// console.log(merge([0],0,[1],1));

// let a = {}
// let b = {key:"b"}
// let c = {key:"c"}

// a[b] = 123
// a[c] = 456

// console.log(a[b]);

// var isPalindrome = function(s) {
//   let regex = /[a-z]/g
//   let smallLetterStr = s.toLowerCase()
//   let newString = smallLetterStr.match(regex).join('')
//   let flag = 0
//   for(i = 0;i < newString.length/2;i++){
//     if(newString[i]!==newString[newString.length-1-i]){
//           flag = 1
//           break;
//     }
//   }
//   if(flag===1){
//     return false
//   }else{
//     return true
//   }
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// var trailingZeroes = function(n) {
//   product = 1
//  for(i=n;i>0;i--){
//      product*=i
//  }
//  count = 0
//  let newArr = product.toString().split('')
//  console.log(newArr);
//  for(i=0;i<newArr.length;i++){
//      if(newArr[newArr.length-1]==0){
//          count++
//      }
//  }
//  return count
// };

// console.log(trailingZeroes(5));

// var containsDuplicate = function(nums) {
//     let flag = 0
//     for(i=0;i<nums.length-1;i++){
//         for(j=i+1;j<nums.length;j++){
//             if(nums[i]===nums[j]){
//                 flag = 1
//                 break
//             }
//         }
//     }
//     if(flag===1){
//         return true
//     }else{
//         return false
//     }
// };

// console.log(containsDuplicate([1,2,3,4]));

// function first(arr, n) {
//     arr.length = n
//      return arr
//    }

//    let result = first(['a','b','c','d','e'],2)
//    console.log(result);

// var reverse = function(x) {
//   let reversed = x.toString().match(/[0-9]/gi).reverse().join('')
//   let numb = Number(reversed)
//   return reversed
// };

// console.log(reverse(123));

// var myAtoi = function(s) {
//  let S = s.trim().split(' ')
//  let sliced = S.slice(0,1).join('')
//   let numb =Number(sliced)
//   return numb
// };

// console.log(myAtoi("4193 with words"));

// var isPalindrome = function(x) {
//   console.log(x.toString().split('').reverse().join(''));
//   console.log(x.toString());
//   return x.toString().split('').reverse().join('')===x.toString()
// };

// console.log(isPalindrome(121));

// var romanToInt = function (s) {

//   let newArr = []
//    newArr.push(s.replaceAll("I", 1)+",".replaceAll("V",5)+"".replaceAll("X",10)+"".replaceAll("L",50)+"".replaceAll("C",100)+"".replaceAll("D",500)+"".replaceAll("M",1000));
//   console.log(newArr);
// };

// console.log(romanToInt(`XXII`));

// var removeElement = function (nums, val) {
//   let newArr = [];
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       newArr.push(nums[i]);
//     }
//   }
//   return newArr;
// };

// console.log(removeElement([3, 2, 2, 1, 3], 1));

// var maximumGap = function (nums) {
//   let greatestDifference = 0;
//   nums.sort((a, b) => a - b);
//   for (i = 0; i < nums.length; i++) {
//     if (Math.abs(nums[i] - nums[i + 1]) > greatestDifference) {
//       greatestDifference = Math.abs(nums[i] - nums[i + 1]);
//     }
//   }
//   return greatestDifference;
// };

// console.log(maximumGap([3, 6, 9, 1]));

// var hammingWeight = function(n) {
//     let newArr = n.toString().split('')
//     console.log(newArr);
//     let count = 0
//     for(i=0;i<newArr.length;i++){
//         if(newArr[i]==1){
//             count++
//         }
//     }
//     return count
// };

// console.log(hammingWeight(00000000000000000000000000001011));

// var rob = function(nums) {
//     let newArr = []
//     for(let i =0;i < nums.length;i++ )
//     {
//         if(i % 2 === 0)
//         {
//             newArr.push(nums[i])
//         }
//     }
//     console.log(newArr);
//     let sum = newArr.reduce((a,b)=> a+b)
//     return sum
// };

// console.log(rob([1,2,3,4,5,6]))

// var calculate = function(s) {
//     let strArr =  s.replace(/\D/,'').split('')
//     let numArr = []
//     for(i=0;i<strArr.length;i++){
//         numArr.push(parseInt(strArr[i]))
//     }
//     return numArr.reduce((a,b)=>a+b,0)
//  };

//  console.log(calculate('2+2'));

// var countPrimes = function(n) {
//     let newArr = []
//     for(i =;i<n;i++){
//         for(j=2;j<i;j++){
//             if(i%j!==0){
//                 newArr.push(i)
//             }
//         }
//     }
//     return newArr.length
// };

// console.log(countPrimes(10));

// function chooseBestSum(t, k, ls) {
//   let newArr = [];
//   for (i = 0; i < ls.length; i++) {
//     for (j = i + 1; j < ls.length; j++) {
//       for (k = j + 1; k < ls.length; k++) {
//         newArr.push([ls[i], ls[j], ls[k]]);
//       }
//     }
//   }

//   let sumArr = [];
//   for (i = 0; i < newArr.length; i++) {
//     const innerArr = newArr[i];
//     const innerSum = innerArr.reduce((a, b) => a + b, 0);
//     sumArr.push(innerSum);
//   }
//   let filterArr = [];
//   filterArr.push(sumArr.filter((x) => x <= t));
//   let flattenArr = [].concat(...filterArr);
//   let sortedArr = flattenArr.sort((a, b) => b - a);
//   return sortedArr[0];
// }

// let result = chooseBestSum(174, 3, [50, 55, 57, 58, 60]);

// console.log(result);

// function uniTotal(string) {
//   let numArr = [];
//   for (i = 0; i < string.length; i++) {
//     numArr.push(string.charCodeAt(i));
//   }
//   return numArr.reduce((a, b) => a + b, 0);
// }

// let result = uniTotal("aaa");
// console.log(result);

// function removeUrlAnchor(url){
//   let newStr = url.slice(0,url.indexOf('#'))
//   return newStr
// }

// let result = removeUrlAnchor("www.codewars.com#about")
// console.log(result);

// let num = 11
// let flag = 0

// for(i=2;i<num;i++){
//     if(num%i===0){
//         flag=1
//         break
//     }
// }
// if(flag===0){
//     console.log(`prime`);
// }else{
//     console.log(`not prime`);
// }

// var findDigit = function (num, nth) {
//     if(nth<=0){
//         return -1
//     }
//   if (num < 0) {
//     num = num * -1;
//     let str = num.toString();
//     if (nth > str.length) {
//       return 0;
//     } else {
//       return str[str.length - nth];
//     }
//   } else {
//     let str = num.toString();
//     if (nth > str.length) {
//       return 0;
//     } else {
//       return str[str.length - nth];
//     }
//   }
// };
// let result = findDigit(5673, 2);
// console.log(result);

// function sortMyString(S) {
//     let strArr = S.split('')
//     let oddStrArr = []
//     let evenStrArr = []
//     for(i=0;i<strArr.length;i++){
//          if(i%2===0){
//              evenStrArr.push(strArr[i])
//          }else{
//              oddStrArr.push(strArr[i])
//          }
//     }
//     let joinedEvenStr = evenStrArr.join('');
//     let joinedOddStr = oddStrArr.join('')

//      return `${joinedEvenStr} ${joinedOddStr}`;
//  }

//  let result = sortMyString('CodeWars')
//  console.log(result);

// function decipherThis(str) {
//     let newArr = str
//     console.log(newArr);
// };

// let result = decipherThis('72olle 103doo 100ya')

// function incrementer(nums) {
//   let incrementArr = [];
//   for (i = 0; i < nums.length; i++) {
//     incrementArr[i] = nums[i] + i + 1;
//   }
//   let strArr = incrementArr.toString().split(",");

//   for (i = 0; i < strArr.length; i++) {
//     if (strArr[i].length > 1) {
//       strArr[i] = strArr[i].replace(strArr[i][0], "");
//     }
//     strArr[i] = parseInt(strArr[i]);
//   }
//   return strArr;
// }

// let result = incrementer([4, 6, 9, 1, 3]);
// console.log(result);

// var filterString = function (value) {
//   let newArr = [];
//   let strArr = value.split("");
//   for (i = 0; i < strArr.length; i++) {
//     if (strArr[i].match(/\d/)) {
//       newArr.push(strArr[i]);
//     }
//   }
//   let num = Number(newArr.join(""));

//   return Number(num);
// };

// let result = filterString(`1a2b3`);
// console.log(result);
