# Projects related to DOM

## Project link
[Click here](link)

# Solution code

## Project 4 - Number Guessing Game

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body style="background-color:#212121; color:#fff;">
    <div id="wrapper">
      <h1>Number Guessing Game</h1>
    <p>Try and guess a random number between [ 1 and 100 ]</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a Number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS
```css
html {
  font-family: sans-serif;
}

body {
  width: 300px;
  max-width: 750px;
  min-width: 480px;
  margin: 0 auto;
  background-color: #212121;
}

.lastResult {
  color: white;
  padding: 7px;
}

.guesses {
  color: white;
  padding: 7px;
}

button {
  background-color: #141414;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  /* margin-left: 50px; */
}

#subt {
  background-color: #161616;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  border-style: none;
  margin-top: 50px;
  /* margin-left: 75px; */
}

#guessField {
  color: #000;
  width: 250px;
  height: 50px;
  font-size: 30px;
  border-style: none;
  margin-top: 25px;

  /* margin-left: 50px; */
  border: 5px solid #6c6d6d;
  text-align: center;
}

#guess {
  font-size: 55px;
  /* margin-left: 90px; */
  margin-top: 120px;
  color: #fff;
}

.guesses {
  background-color: #7a7a7a;
}

#wrapper {
  box-sizing: border-box;
  text-align: center;
  width: 450px;
  height: 550px;
  background-color: #474747;
  color: #fff;
  font-size: 25px;
}

h1 {
  background-color: #161616;

  color: #fff;
  text-align: center;
}

p {
  font-size: 16px;
  text-align: center;
}
```

### JavaScript 
```JavaScript 
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

const e=0;

//check whether the user is available to play
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  //Validates whether the number is between 1-100 or its number or not
  if(guess === '')
  {
    alert("Field is Empty ! Please enter a Number")
  }
  else if(isNaN(guess))
  {
    alert("Field is Empty ! Please enter a Number")
  }
  else if(guess < 1)
  {
    alert("Please enter a Mumber More Than 1")
  }
  else if(guess > 100)
  {
    alert("Please enter a Valid Number Less Than 100")
  }
  else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessege(`Game Over . Random Number was : ${randomNumber}`)
      endGame();
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  //Check Guess is higher or Lower or equal 
  if(guess===randomNumber){
    displayMessege(`You Guessed it Right `)
    endGame();
  }else if(guess<randomNumber){
    displayMessege(`Number is Too Low `)
  }else if(guess>randomNumber){
    displayMessege(`Number is Too High `)
  }
}

function displayGuess(guess){
  //cleans values | update arrays
  userInput.value=''
  guessSlot.innerHTML += `${guess}  , `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessege(message){
  //displays 
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML='<h2 id="newGame" style>Start New Game </h2>'
  startOver.appendChild(p)
  playGame=false
  newGame();
}


function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });