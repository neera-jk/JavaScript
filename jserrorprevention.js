function addTwoNums(a, b){
    console.log(a + b)
}

addTwoNums(5, "5")

function addTwoNums(a, b){
    try{
        if(typeof(a) != "number"){
            throw new ReferenceError("the first argument is not a number")
        }
        else if(typeof(b) != "number"){
            throw new ReferenceError("the second argument is not a number")
        }
        else{
            console.log(a + b)
        }
    }
    catch(err){
        console.log("Errod", err)
    }
}

addTwoNums("5", 5)
console.log("It still works")



function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >=2
    var condition2 = typeof(match) == 'string' && match.length == 1
    if(condition1 && condition2 == true) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
            console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    else {
        console.log("Please pass correct argumetns to the function.")
    }
}
// letterFinder([], [])
letterFinder("cat", "C")