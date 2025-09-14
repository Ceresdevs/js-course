    //*ASSIGNING A VALUE TO A VARIABLE
    let variable1 = 3;
    let calculation = 2 + 2; 
    let result = variable1 + calculation;
    let message = 'Good Job!';
    let name = 'Jay';
    let isVerified = true;
    
    const variable2 = 5; //cannot be re-assigned (fixed value)
    var variable3 = 5; // just like let but some issue

   
    

     console.log(variable1); //3
     console.log(calculation); //4
     console.log(calculation + 2); //6
     console.log(result); //7

     console.log(message); //Good Job!
     console.log(message + name); //Good Job!jay
     console.log(`${message} ${name}.`); //Good Job! Jay.


     //*RE-ASSIGNING A VALUE TO VARIABKE
     variable1 = 5;
     console.log(variable1); //5

     variable1 = variable1 + 1;
     console.log(variable1) //6

     //*type of DATATYPES
     console.log(typeof variable1) //number
     console.log(typeof message) //string
     console.log(typeof isVerified) //boolean
