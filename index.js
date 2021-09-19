var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000,500,100,20,10,5,1];
const changeTable = document.querySelector(".change-table");
const nextButton = document.querySelector("#next-button");

cashGiven.style.display = "none";
checkButton.style.display = "none";
changeTable.style.display = "none";

nextButton.addEventListener("click", function displayNext(){
  cashGiven.style.display = "block";
  checkButton.style.display = "block";
  changeTable.style.display = "block";
});



checkButton.addEventListener("click", function validateBillAndCashAmount(){
  hideMessage();
  if (billAmount.value > 0){
    if (parseInt(billAmount.value) <= parseInt(cashGiven.value)) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    }
    else {
      showMessage("Fancy a chat with the cops?");
    }
  }
  else{
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned){
  for(let i=0; i< availableNotes.length; i++){
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    console.log(numberOfNotes);
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage(){
  message.style.display = "none";
}

function showMessage(msg){
  message.style.display = "block";
  message.innerText = msg;
}
