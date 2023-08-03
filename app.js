const readLine = require('readline');
const fs = require('fs');

/** Reading Input & Writing Output */
/********************************** */
// const r1 = readLine.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// r1.question('Please enter your name :> ',(name) => {
//     console.log('You entered the',name);
//     r1.close()
// })

// r1.on('close',
// () => {
//     console.log("Interface closed")
// })
/********************************** */

/** Reading and Writing a file Sync */
/********************************** */

// const textInput = fs.readFileSync('./files/input.txt','utf-8');
// console.log(textInput)
// let writeData = `Data reading from input : ${textInput} \n Date Created ${new Date()}`
//  fs.writeFileSync('./files/output.txt',writeData);

 /** Reading and Writing a file ASync */
/********************************** */
fs.readFile('./files/start.txt','utf-8',(error,data1) => {
    console.log(data1)
    fs.readFile(`./files/${data1}.txt`,'utf-8',(error2, data2) => {
        console.log(data2)
        fs.readFile('./files/append.txt','utf-8',(error3, data3) => {
            console.log(data3)
            fs.writeFile('./files/output.txt',`${data2}\n\nDate Created ${new Date()} `,()=>{
                console.log('File Written Successfully')
            })
        })
    }) 
});