let str = '1,2,3,4,5,6,7,8,9,10'

let arr = str.split(',')
console.log(arr)

let strJoin = arr.join(';')
console.log(strJoin)

console.log(arr.reverse())


arr.splice(1, 2, 55, 60) // 1,4,5..

console.log(arr)

let newArr = arr.concat([777, 888]) // new copy of array
console.log(newArr)

let objArr = [
    {name: 'Fedor', age: 55},
    {name: 'Oleg', age: 15}
]


let foundPerson = objArr.find(function(person) {
    return person.age >= 18
})

console.log(foundPerson)


let myArray = [1,2,3,4,5,6,7,8,9]

var oddArray = myArray.filter(function(i) {
    return i % 2 === 0
})

console.log(oddArray)


let myArray2 = ['1', '2', '3', 4, 5, 6]

let numArray = myArray2.map(function(i) {
    return parseInt(i)
})

console.log(numArray)

let numArray2 = myArray2.map(i => {
    return parseInt(i)
})

console.log(numArray2)