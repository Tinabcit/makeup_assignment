// Include for the first budget input.
function CreateBudget() 
{
    budget = document.getElementById("budget").value;
    document.getElementById("result-one").innerHTML = budget;
}
// Putting the first number and find the expenses.
function AddBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 + num2;
}

function SubtractBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num2-num1;   
}
// function to calculation the two amounts of the expenses.
function calculation()
{
    let calculationone = parseInt(document.getElementById("budget").value);
    let calculationtwo = parseInt(document.getElementById("secondNumber").value);
    let totalcalculation = budget + num2
    document.getElementById("result").innerHTML= totalcalculation;
}