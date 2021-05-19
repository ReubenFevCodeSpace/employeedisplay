const inquirer = require('inquirer');
const Employee = require("../Employerdisplay/lib/Employee")

const fs = require('fs');


function generatecard(info1,info2,info3){
    return card = `
    <div class="Employercard">
        <h1 class="Employername"></h1>
        <h2 class="emplyeroccupation"></h2>
        <p id="Idnum">${info1}</p>
        <p id="Email">${info2}</p>
        <p id="3rdinfo">${info3}</p>
    </div>` 
}

ManagerPrompt();
function ManagerPrompt(response){
inquirer.prompt([
    {
        type:"input",
        name:"employeename",
        message:"What is this employee's name",
    },
    
    {
        type:"input",
        name:"employeeid",
        message:"What is this employees id",
    },
    {
        type:"input",
        name:"email",
        message:"what is this employees email"
    },

]
).then((response)=>{
const employee = new Employee(response.employeename,response.employeeid,response.email);
const info1 = employee.getName();
const info2 = employee.getId();
const info3 = employee.getEmail();
const filename = "index.html"
const fileformat = generatecard(info1,info2,info3)
console.log(fileformat)
fs.writeFile(filename,fileformat,(err) =>
err ? console.log(err): console.log("success"))
})}



