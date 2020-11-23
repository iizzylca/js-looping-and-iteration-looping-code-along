let array = []

const writeCards = (names, theEvent) => {
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${theEvent} gift!`);
    }
    return array;
}

const countDown = (num) => {
    let i = num
    while (i<= num && i>= 0) {
        console.log(i);
        i--;
    };
}

countDown(10)
