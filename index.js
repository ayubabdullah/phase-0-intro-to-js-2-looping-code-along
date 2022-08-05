// Code your solutions in this file
function writeCards(arrStr, eventName) {
    const messages =[];
    for(let i = 0; i < arrStr.length; i++) {
        messages.push(`Thank you, ${arrStr[i]}, for the wonderful ${eventName} gift!`);
    }

    return messages;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

