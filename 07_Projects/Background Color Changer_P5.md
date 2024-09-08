# Solution code

## Project 5 - Background Color Changer

### HTML & CSS
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Background Color Changer</title>
  </head>
  <body style="background-color: #212121; color: #fff">
    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="script.js"></script>
  </body>
</html>
```

### JavaScript
```javascript
//Generate a Random Color 

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'

  for(let i=0;i<6;i++)
  {  
     color += hex[Math.floor(Math.random()*16)]
  }
  return color
}

let intervalId
const startChangingColor = function(){
 if(!intervalId){
   intervalId = setInterval(changebgcolor,1000)
 }

 function changebgcolor(){
   document.body.style.backgroundColor = randomColor()
 } 
}

const stopChangingColor = function(){
 clearInterval(intervalId);
 intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
```