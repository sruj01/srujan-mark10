var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var errorMessage1 = document.querySelector(".error-message1");
var errorMessage2 = document.querySelector(".error-message2");
var noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000,500,100,20,10,5,1];
const changeTable = document.querySelector(".change-table");
const nextButton = document.querySelector("#next-button");
const cashGivenLabel = document.querySelector("#cash-given-label");

cashGiven.style.display = "none";
checkButton.style.display = "none";
changeTable.style.display = "none";

nextButton.addEventListener("click", function displayNext(){
  if(billAmount.value < 0){
    errorMessage1.innerText = "Bill amount can't be negative";
  }
  else if(billAmount.value){
    cashGiven.style.display = "block";
    checkButton.style.display = "block";
    changeTable.style.display = "block";
    errorMessage1.style.display = "none";
    cashGivenLabel.innerText = "Cash Given";
  }
  else{
    errorMessage1.innerText = "Field cannot be empty";
  }


});


checkButton.addEventListener("click", function validateBillAndCashAmount(){
  hideMessage();

  if (cashGiven.value > 0){
    if (parseInt(billAmount.value) <= parseInt(cashGiven.value)) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    }
    else {
      showMessage("Fancy a chat with the cops?");
    }
  }
  else{
    showMessage("Invalid Cash input");
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
  errorMessage2.style.display = "none";
}

function showMessage(msg){
  errorMessage2.style.display = "block";
  errorMessage2.innerText = msg;
}
