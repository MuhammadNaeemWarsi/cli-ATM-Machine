#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 20000;


let myPin = 4321;

let pinAnswer = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"enter your pin",
            type:"number"
        }
    ]
); 

if(pinAnswer.pin === myPin)
{
    console.log("correct pin code");

    let operationAns= await inquirer.prompt(
        [

            {
                name:"operation",
                message:"select option",
                type:"list",
                choices:["withdraw","fast cash","check balance"]
            }
        ]
    );
    console.log(operationAns);
    if (operationAns.operation ==="withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message: "enter amount",
                    type : "number",
                }
            ]
        );
        if(amountAns.amount>myBalance){
            console.log("insufficient Balance")
        }
        else {    
         myBalance -= amountAns.amount;

         console.log(`your remaining balance is ${myBalance}` )
          }
    } 
      else if(operationAns.operation==="fast cash"){
        let fastAmount = await inquirer.prompt(
     [
        {
            name:"fastcash",
            message:"select the fastcash amount",
            type:"list",
            choices:["1000","2000","5000","10000"]
        }
     ]


    );
    myBalance-=fastAmount.fastcash;
    console.log(`you have successfully fastcashed ${fastAmount.fastcash}\n your remaining balance is${myBalance}`)
      }

        
    
    else if (operationAns.operation === "check balance"){
        console.log(`your balance is ${myBalance}` )
    }

}
 else {
    console.log("wrong pin code")
 }