/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
    let votingAge=21;
    if (votingAge>18){
        console.log('true');
    }




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let a = 'memes';
let b = 'no fun';
if (b === 'no fun'){
    a = 'memes are bad'
    console.log(a);
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
a = '1999';
Number(a);
console.log(a);




//Task d: Write a function to multiply a*b 
function multiply(a,b){
    return a * b;
}




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYears(num1){
    return num1 * 7;
}




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(lb, age){
    if (age >= 1)
     {if (lb <= 5){
         return (lb * .05)
     }else if (lb >= 6 && lb <= 10){
        return (lb * .04)
    }else if (lb >= 11 && lb <= 15){
        return (lb * .03)
    }else if (lb > 15){
        return (lb * .02)
    }
    }else if (age > (2/12) ){
        if(age>(2/12) && age<(4/12)){
            return lb*.10;
        }else if(age>(4/12) && age<(7/12)){
            return lb*.05;
        }else if(age>(7/12) && age<(12/12)){
            return lb*.04;
        }

    }else{
        console.log('Too young to, or cannot, be calculated!');
    }

}  

console.log(dogFeeder(15,1));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
//rock = 0, paper = 1, sissors = 2
function rps(choice){
let cpu=Math.floor(Math.random()*3)
switch(cpu){ 
    case 0:
        if (choice === "paper"){
            console.log("You Win!");
        }else{
            console.log("You lost!");
        }
        return;
    case 1:
        if (choice === "sissors"){
            console.log("You Win!");
        }else{
            console.log("You lost!");
        } 
        return;
    case 2:
        if (choice === "rock"){
            console.log("You Win!");
        }
        else{
            console.log("You lost!");
        }
        }
}
let pgr="paper";
rps(pgr);
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmtomi(num1){
    return num1*.624371;
} 



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  function fttocm(num1){
      return num1*30.48;
  }




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  function annoyingsong(num1){
      for (let i = num1; i<=num1 && i>0; i--){
          let remainder=(i-1);
          console.log(i,'bottles of soda on the wall', i, 'bottles of soda, take one down pass it around', remainder,'bottles of soda on the wall');
      }
  }
annoyingsong(10);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  function gradecalculator(grade){
      if (grade >= 90){
          console.log('A for awesome!')
      }
      if (grade >=80 && grade <90){
          console.log('B is for not bad!')
      }
      if (grade >= 70 && grade < 80){
          console.log('C is for further clarification needed!')
      }
      if (grade >= 60 && grade < 70){
          console.log('D is for Degree!')
      }
      if(grade<60){
          console.log("F, I don't know what to say to you")
      }
  }
  gradecalculator(60);
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
function vowelcounter(word){
    word.includes('A','a','e','E','I','i','O','o','U','u');{

    }
}




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
var playerchoice = prompt("rock, paper or scissors?")
rps(playerchoice);