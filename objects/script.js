// // simple object
// let person = {
//   name: 'Василий',
//   year: 1990,
//   friends: ['Федор', 'Илья'],
//   car: {
//     model: 'Kia',
//     year: 2012
//   },
//   calculateAge: function() {
//     this.age = 2023 - this.year
//   }
// }

// person.test = 'test'
// console.log(person)

// // JSON
// let jsonPerson = JSON.stringify(person)
// console.log(jsonPerson)

// let parsedJson = JSON.parse(jsonPerson)
// console.log(parsedJson)


// // Date object
// let date = new Date()
// console.log(date)


// // Has own property
// console.log(person.hasOwnProperty('car'))


// // prototypes
// // person.__proto__ => Object.prototype
// console.log(person.__proto__ === Object.prototype)
// console.log(person.car.__proto__ === Object.prototype)

// // [].__proto__ => Array.__proto__ => Object.prototype
// let arr = [1,2,3]
// console.log(arr.__proto__.__proto__ === Object.prototype)



// // Old style class objects ES5
// function Car(name, year) {
//   this.name = name
//   this.year = year
// }

// // add prototype (method)
// Car.prototype.getAge = function() {
//   return new Date().getFullYear() - this.year
// }

// // add prototype (property)
// Car.prototype.color = 'black'


// var ford = new Car('Ford', 2012)
// ford.color = 'red'
// console.log(ford)

// var bmv = new Car('BMW', 2010)
// console.log(bmv)



// // another way to create object with prototype with descriptor
// //
// // writable - change value (default: false)
// // get 
// // set
// // configurable - change or delete keys (default: false)
// // enumerable - iterate keys object  (default: false)
// var ford2 = Object.create({
//   // prototypes
//   calculateDistancePerYear: function() {
//     // this.distancePerYear = 333
//     Object.defineProperty(this, 'distancePerYear', {
//       value: Math.ceil(this.distance / this.age),
//       enumerable: true,
//     })
//   }
// }, {
//   // properties
//   name: {
//     value: 'Ford',
//     enumerable: true
//   },
//   model: {
//     value: 'Focus',
//     enumerable: true
//   },
//   year: {
//     value: 2015,
//     enumerable: true
//   },
//   distance: {
//     value: 120500,
//     writable: true,
//     enumerable: false
//   },
//   age: {
//     get: function() {
//       return new Date().getFullYear() - this.year
//     },
//     set: function() {

//     }
//   }
// })

// console.log(ford2)


// // iterable object keys
// for (var key in ford2) {
//   console.log(key, ford2[key])
// }

// // iterable without prototype keys
// for (var key in ford2) {
//   if (ford2.hasOwnProperty(key)) {
//     console.log(key, ford2[key])
//   }
// }

// // iterable another way without prototype keys
// Object.keys(ford2).forEach(function(key) {
//   console.log(ford2[key])
// })




// // Замыкания
// var createCounter = function(counterName) {
//   var counter = 0
  
//   return {
//     increment: function() {
//       counter++
//     },
//     decrement: function() {
//       counter--
//     },
//     getCounter: function() {
//       return counter
//     }
//   }
// }


// var counterA = createCounter('Counter A')
// var counterB = createCounter('Counter B')




// // Context
// var person = {
//   name: 'Fedor',
//   age: 25,
//   job: 'QA',

//   // displayInfo: function(ms) {
//   //   var self = this // через замыкание
//   //   setTimeout(function () {

//   //     console.log('Name:', self.name),
//   //     console.log('Job:', self.job),
//   //     console.log('Age:', self.age)
//   //   },ms)
//   // }

//   displayInfo: function(ms) {
//     setTimeout(function () {
//       console.log('Name:', this.name),
//       console.log('Job:', this.job),
//       console.log('Age:', this.age)
//     }.bind(this), ms)
//   }
// }


// person.displayInfo(500)



// var person2 = {
//   name: 'Fedor',
//   age: 25,
//   job: 'QA',
//   }

// function printObject(objName) {
//   for (var key in this) {
//     if (this.hasOwnProperty(key)) {
//       console.log(key, this[key])
//     }
//   }
// }

// var printPerson = printObject.bind(person2) // bind return new function with context
// printPerson('Person obj name')

// printObject.call(person2, 'Person obj name') // bind and call function

// printObject.apply(person2, ['Person obj name']) // args by array


// [1, 2, 3] => [1, 4, 9]
// [5, 'hello', 10] => [25, 'hellohello', 100]


// Array.prototype.double = function() {
//   return this.map(function(item) {
//     if (typeof item === 'number') {
//       return item *= item
//     }
//     if (typeof item === 'string') {
//       return item += item
//     }
//   })
// }


// console.log([1, 2, 3].double().double())
// console.log([5, 'hello', 10].double())


// // ecma5 error with var context
// for (var i = 0; i < 5; i++) {
//   console.log("before timeout", i)
//   setTimeout(function() {
//     console.log("in timeout", i)
//   }, 5000)
//   console.log("after timeout", i)
// }

// console.log('finish', i)





// // Динамические атрибуты и деструктуаризация
// yearFiled = 'year'

// const bmw = {
//   name: 'BMW',
//   // ['model' + Math.random()]: 'X5', // Динамические атрибуты
//   ['model']: 'X5',
//   [yearFiled]: 2010,

//   logFields() {
//     const {name, year, model} = this // Деструктуризация
//     return {name, model, year}
//   }
// }

// // console.log(bmw)
// console.log(bmw.logFields())

// const yearES5 = bmw.year
// const {year} = bmw

// console.log(yearES5, year)




// // Spread разворачивает объект
// 
// function spread() {
//   const title = 'Some title'
//   const text = 'Some text'
//   saveForm({title, text})
// }
// 
// spread()
// 
// function saveForm(data) {
//   const {title, text} = data
// 
//   const formData = {
//     data: new Date().toLocaleDateString(),
//     title,
//     text
//   }
//   console.log('Form data', formData )
// }
// 
// function saveForm({title, text}) {
//   const formData = {
//     data: new Date().toLocaleDateString(),
//     title,
//     text
//   }
//   console.log('Form data', formData )
// }

// // Spread
// function saveForm(data) {
//   const formData = {
//     data: new Date().toLocaleDateString(),
//     ...data // Spread
//   }
//   console.log('Form data', formData )
// }

 
// // Rest сбор всех параметров в список

// function rest() {
//   const title = 'Some title'
//   const text = 'Some text'
//   saveRestForm(title, text)
// }

// rest()

// function saveRestForm(...args) {
//   const [title, text] = args // Деструктуаризация списка
  
//   const formData = {
//     data: new Date().toLocaleDateString(),
//     title,
//     text
//   }
//   console.log('Form data', formData )
// }



class RootElement {
    constructor(tagName = 'div') {
        this.$el = document.createElement(tagName)
    }

    hide() {
        this.$el.style.display = 'none'
    }
}


class Box extends RootElement {
    constructor(color, size = 150, tagName) {
        super(tagName)
        this.color = color
        this.size = size
    }

    create() {
        this.$el.style.color = this.color
        this.$el.style.width = this.$el.style.height = `${this.size}px`

        document.querySelector('#wrapper').insertAdjacentElement('afterbegin', this.$el)

        return this
    }
}


redBox = new Box('red').create()
console.log(redBox)
blueBox = new Box('blue', size=777).create()
console.log(blueBox)
