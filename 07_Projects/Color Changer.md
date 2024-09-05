# Projects related to DOM

## project link
[Click here](link)

# Solution code

## Project 1 - Color Changer 

### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>
    <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="purple"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="script.js"></script>
  </body>
</html>

```


### CSS
```css
html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}
#purple {
  background: purple;
}

```

### JavaScript
```javaScript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")   //Tag Name

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)

    ////Using  if 
    if(e.target.id === 'grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor=e.target.id
    }


    ////using Switch case 
    // const clickedButtonId = e.target.id;

    // switch (clickedButtonId) {
    //   case 'grey':
    //     body.style.backgroundColor = 'grey';
    //     break;
    //   case 'white':
    //     body.style.backgroundColor = 'white';
    //     break;
    //   case 'blue':
    //     body.style.backgroundColor = 'blue';
    //     break;
    //   case 'yellow':
    //     body.style.backgroundColor = 'yellow';   

    //     break;
    //   case 'purple':
    //     body.style.backgroundColor = 'purple';   

    //     break;
    //   default:
    //     console.log("Wrong Input");
    // }
    
  })
})
```
