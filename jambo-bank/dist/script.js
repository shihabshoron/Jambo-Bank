//login click function//
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function()
{
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";

})
//deposit click function//
const addDeposit = document.getElementById("addDeposit");
addDeposit.addEventListener("click",function()
{
  // const depositAmount = document.getElementById("depositAmount").value; //to get the input or print out//
  // const depositNumber = parseFloat(depositAmount); //to convert string to number//
  const depositNumber = getInputNumber("depositAmount");


  // const currentDeposit = document.getElementById("currentDeposit").innerText;//read the numbers//
  // const currentDepositNumber = parseFloat(currentDeposit);//changing string to number//
  // const totalDeposit = depositNumber + currentDepositNumber;
  // document.getElementById("currentDeposit").innerText = totalDeposit; //to get the text written inside a span element using innertext//

  updateSpanText("currentBalance", depositNumber);
  updateSpanText("currentDeposit", depositNumber)

  document.getElementById("depositAmount").value = "";
})

//withdraw button handler//
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function()
{
  const withdrawNumber = getInputNumber("withdrawAmount");
  updateSpanText("currentWithdraw",withdrawNumber);
  updateSpanText("currentBalance", -1* withdrawNumber);
  
  document.getElementById("withdrawAmount").value = "";
  
  })

function getInputNumber(id)
{
const withdrawAmount = document.getElementById(id).value;
const withdrawNumber = parseFloat(withdrawAmount);
return withdrawNumber;
}

function updateSpanText(id, depositNumber)
{
   
  const currentBalance = document.getElementById(id).innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  document.getElementById(id).innerText = totalBalance;

}