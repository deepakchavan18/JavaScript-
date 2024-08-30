// (IIFE) Immediately Invoked Function Expression 

//For Eg Some Application performs Database connection when the Application is Started  

(function chai(){     //Function         //Named IIFE
    console.log("DB Connected");
})();     //() is for execution              //; is imp here to terminate 

((name) =>{           //Arrow Function     //Un-Named IIFE
    console.log(`DB Connected Two ${name}`);
})("Deepak");


//Question -How to write 2 IIFE ^


