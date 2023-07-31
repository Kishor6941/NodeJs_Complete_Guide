const readLine = require('readline');
const r1 = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question('Please enter your name :> ',(name) => {
    console.log('You entered the',name);
    r1.close()
})

r1.on('close',
() => {
    console.log("Interface closed")
})