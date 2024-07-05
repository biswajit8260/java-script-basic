loops in js:-
-  loops are used to excute a piece of code again and again.
1. for loop :-
  syntax:
  for (intialization;condition; updation){ 
     statement
     } 
     ex-
     for (let i = 1; i<=5; i++){
        console.log("web bocket")
     }
     2. while loop:-
      syntax:
      while (condition){
        statement
      }
String in java script:-
- string is a sequence of charcter used to represent text.
- create a string  -> str.length
- string indexing  -> str[0],str[1],str[2].........


Templete liters in js :-

- its a way to have embedeb exoreshion in string.
- its denoted on ``.`i.e today is a great day'

String interpolation :-

- to create a string by doing substituion of placeholders.
- ex. `string test ${exoression} string text`

String symbol :-
- \n - new line
- \n - tab inside a string

String methods :-

- these are built in function to mainpiyulate a string
1. str.toUppercase();
2. str.toLowercase();
3. str.slice(start,end)
4. str1.concat(str2)
5. str.trim()
6. str.replace(serachval,newval)
7. str.charAt(idx)

Arrays on js :-

- arrays is collection of items.
- ex;
let heroes = [" irenman","hulk","thor","batman"];
let marks = [87,68,98,12];
let info = [ "trahul",76,"delhi"];

- array index starting from "0"
- arr[0],arr[1],arr[2]........

Looping over in array :-

- loops  -> iterable
- syntax :-
for (let i = 0; i < arr.length,i++){
  //statement
}

pratice quickly :-
- for a given array

ARRAY METHOD :-

- PUSH -> ADD AN ELEMENT TO THE END.
- POP -> DELETE FROM END
- toString  -> converts array to string 
- concat -> joins multiple arrays & return to the starting .
- shift -> delete from start 
- sloice() ->returns a piece of the array
- splice() -> change original array (add, remove,replace)

For each loop in arrays:

- arr.forEach(callBackFunction)
- callBackFunction:here it is a function to excute for each element in the array.
- A callback is a function passed as an argument to another function.

syntax:-
arr.forEach((val) =>{
  console.log(val);
  })


  map methods :-
  - creates a new array with the results of some operation .the value its callback returns are used to form new array.

  - arr.map(callbackFunction(value,index,array))
  ex:
  let newArr = arr.map((val) => {
    return val *2;
  })

  FILTER METHOD OF ARRAY :-

  - creates a new array of element that gives true for a condition/filter.
  ex. all even elements.

  let newArr = arr.filter((val) => {
    return val % 2 ==0;
  })