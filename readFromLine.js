const readLine= require("readline");

const r1= readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Please enter your name: ", (res)=>{
    console.log("Hello "+ res);
})