// console.log(myFunction(5, 6));

// function myFunction(p1, p2) {
//     return p1 * p2;
//   }


// console.log(myFunction(5, 6));


// // Cannot access 'myFunction2' before initialization 
// // console.log(myFunction2(5, 6))

// let myFunction2 = function(p1, p2) {
//     return p1 * p2
// }

// console.log(myFunction2(5, 6))




// // ES6 functions
// function getAge(year) {
//   const current = new Date().getFullYear()
//   return current - year
// }

// console.log(getAge(1990))


// const getAge2 = (year) => {
//   const current = new Date().getFullYear()
//   return current - year
// }

// console.log(getAge2(1990))


// // only one parameter
// const getAge3 = year => {
//   const current = new Date().getFullYear()
//   return current - year
// }

// console.log(getAge3(1990))


// const getAge4 = year => {
//   return new Date().getFullYear() - year
// }

// console.log(getAge4(1990))


// const getAge5 = year => new Date().getFullYear() - year

// console.log(getAge5(1990))



// Стрелочные функции
//
// const person = {
//   firstName: 'Fedor',
//   age: 25,
//   job: 'QA',
//   logNameWithTimeout: function() {
//     setTimeout(function() {
//       console.log(this.firstName)
//     }.bind(this), 1000)
//   }
// }

// console.log(person.logNameWithTimeout())

// const person2 = {
//   firstName: 'Fedor',
//   age: 25,
//   job: 'QA',
//   logNameWithTimeout: function() {
//     setTimeout(() => {
//       console.log(this.firstName)
//     }, 1000)
//   }
// }

// console.log(person2.logNameWithTimeout())

// const person3 = {
//   firstName: 'Fedor',
//   age: 25,
//   job: 'QA',
//   logNameWithTimeout() {
//     setTimeout(() => {
//       console.log(this.firstName)
//     }, 1000)
//   }
// }

// console.log(person3.logNameWithTimeout())



// // ecma6
// const createCar = (name, model) => {
//   return {
//     name,
//     model
//   }
// }

// const ford = createCar('Ford', 'Focus')
// console.log(ford)



// // Параметры по умолчанию
// const createPost = (title, text = '', date = new Date().toLocaleDateString()) => {
//   // date = date || new Date().toLocaleDateString() // ES5
//   return {
//     title,
//     text,
//     date}
// }

// const post = createPost('Title text', 'Simple text', new Date())
// console.log(post)

// const post2 = createPost('Title text')
// console.log(post2)




