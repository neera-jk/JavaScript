// function listArrayItems(arr){
//   for(var i = 0; i < arr.length; i++){
//     console.log(arr[i])
//   }
// }

// var colours = ['red', 'orange', 'yellow', 'pink', 'green', 'blue', 'black']
// listArrayItems(colours)


// function letterFinder(word, match){
//     for(var i = 0; i < word.length; i++){
//         if(word[i] == match){
//             console.log("Found the", match, "at", i)
//         }
//         else{
//             console.log("---No match found at", i)
//         }
//     }
// }

// letterFinder("test", "t")



// var fruits = []
// fruits.push("apple")
// fruits.push("banana")
// console.log(fruits)
// fruits.pop("apple")
// console.log(fruits)


function arrayBuilder(one,two,three){
    var arr = []
    arr.push(one)
    arr.push(two)
    arr.push(three)
    console.log(arr)
}

arrayBuilder("apple", "banana", "kiwi")