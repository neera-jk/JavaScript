console.log('Hello');
function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog("Hello")



function addTwoNums(a,b) {
    console.log(a + b)
}
function randomNum() {
    return Math.floor((Math.random() * 10) + 1)
}
function specificNum() {
    return 42
}
console.log(randomNum())
console.log(specificNum())
addTwoNums(randomNum(), specificNum())