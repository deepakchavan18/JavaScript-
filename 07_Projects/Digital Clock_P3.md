# Projects related to DOM

## Project link
[Click here](link)

# Solution code

## Project 3 - Digital Clock 

### HTML & CSS
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

### JavaScript 
```Javascript
const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML=date.toLocaleTimeString()
},1000)
```