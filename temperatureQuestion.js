const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Howdy, whats your name?" , function (answer) {
    if (answer === 80) {
        console.log("Perfect day outside")
    }
    if (answer < 50) {
        console.log("Its freezong")
    }
    reader.close()
})