// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
const event = "surprise"

const thankYouMessage = []
function writeCards(names, event) {
for (let i=0; i < names.length; i++){
const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
thankYouMessage.push(message)   
}
return thankYouMessage
}
function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }

