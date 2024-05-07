var clothes = []
clothes.push("shirt", "pant", "shorts", "socks", "tie")
console.log(clothes)
// var makeup = ["foundation", "eyeliner"]
// var together = clothes.concat(makeup)
// console.log(together)
// clothes.push("belt")
// console.log(clothes)
// console.log(together)
// var dest = [...clothes, ...makeup] //destructuring of array
// console.log(dest)

var [shirt, ...rest] = clothes
console.log(rest)


// Hoisting
// c = 5
// console.log(c)
var a = 10
let b = 20
const c = 30
console.log(a)
console.log(b)
const  test = () =>{
    let b = 30
    var    a = 40
        console.log(a)
        console.log(b)
}
test()
console.log(a)
console.log(b)



// var obj = {
//     a:10,
//     b:20,
//     c:30

// }

// const {a, ...rest} = obj
// console.log(a)
// console.log(rest)
// console.log(obj)