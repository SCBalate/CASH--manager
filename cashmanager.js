const billAmount = document.querySelector('#bill-amount')
const cashGiven = document.querySelector('#cash-given')
const checkButton = document.querySelector('#check-button')
const errorMessage = document.querySelector('#error-message')
const noOfNotes = document.querySelectorAll('.no-of-notes')
const noteStore = [2000, 500, 200, 100, 20, 10, 5, 1]

checkButton.addEventListener('click', function validateBillAmount() {
  hideMessage()
  if (billAmount.value > 0) {
    validateCashAmount()
  } else {
    showMessage('Bill Amount must be greater than 0')
  }
})

function validateCashAmount() {
 
   if (cashGiven.value - billAmount.value === 0) {
    showMessage('No need to return change😊')
  } else if (cashGiven.value - billAmount.value > 0) {
    const cashToReturn = cashGiven.value - billAmount.value
    calculateNotes(cashToReturn)
} else if (billAmount.value > cashGiven.value) {
    showMessage('Do you wanna wash plates?')
  } else {
    showMessage('Invalid cash amount')
  }
}

function calculateNotes(cashToReturn) {
  for (let i = 0; i < noteStore.length; i++) {
    const numberOfNotes = Math.trunc(cashToReturn / noteStore[i])
    cashToReturn = cashToReturn % noteStore[i]
    noOfNotes[i].innerText = numberOfNotes
  }
  showMessage('You should give this change')
}

function hideMessage() {
  errorMessage.style.display = 'none'
}

function showMessage(msg) {
  errorMessage.style.display = 'block'
  errorMessage.innerText = msg
}
