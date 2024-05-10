// console.log(username) //RefrenceError
// var a "there's no assignment operator here" //SyntaxError
// "hello".pop() //TypeError
// (10).toString(2) //Range Error

function addTwoNums(a,b){
    try{
        console.log(a+b)
    }catch(err){
        console.log(err)
    }
}

addTwoNums(5, "5")