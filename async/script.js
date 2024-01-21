// setTimeout(function() {
//     alert('test')
// }, 2000)

// let counter = 0
// const interval = setInterval(function() {
//     console.log(++counter)
// }, 2000)


// setTimeout(function() {
//     clearInterval(interval)
// }, 5000)
    



// Callbacks. Old.
// Client -> Server > DB -> Server -> Client

// console.log('Client: wanna get users list')
// console.log('...')


// setTimeout(function() {
//     console.log('Server: get users at DB')
//     console.log('...')

//     setTimeout(function() {
//         console.log('DB: get users at DB')
//         console.log('...')

//         setTimeout(function() {
//             console.log('Server: post users to post')
//             console.log('...')

//             setTimeout(function() {
//                 console.log('Client: got users')
//                 console.log('...')
//             }, 1000)
//         }, 500)
//     }, 500)
// }, 1000)


// Promises

// const promise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         console.log('Server: get users at DB')
//         console.log('...')
//         resolve()
//     }, 1000)
// })


// promise.then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             console.log('DB: get users at DB')
//             console.log('...')
//             const users = [
//                 {id: 1, name: 'Федор'},
//                 {id: 2, name: 'Федор2'}
//             ]
//             resolve(users)
//         }, 1000)
//     })
// })
// .then((dbUsers) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             console.log('Server: transform and post users to post')
//             console.log('...')
//             const users = dbUsers.map(user => {
//                 return {
//                     ids: user.id + 1,
//                     name: user.name
//                 }
//             }) 
//             resolve(users)
//         }, 1000)
//     })
// })
// .then((users) => {
//     setTimeout(function() {
//         console.log('Client: got users', users)
//         console.log('...')
//     }, 5000)
// })
// .catch((error) => console.log(error))
// .finally(() => console.log('finnaly'))


// // Fetch


// document.querySelector('#load').addEventListener('click', load)

// function load() {
//     const url = 'https://jsonplaceholder.typicode.com/users'

//     fetch(url)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             const ul = document.querySelector('#list')
//             ul.innerHTML = ''

//             const html = data.map(function(item) {
//                 return `<li>${item.id}: ${item.name} (${item.email})</li>`
//             })

//             ul.insertAdjacentHTML('afterbegin', html.join(' '))
//         })
// }


// async function load() {
//     const url = 'https://jsonplaceholder.typicode.com/users'

//     const response = await fetch(url)
//     const data = await response.json()

//     const ul = document.querySelector('#list')
//     ul.innerHTML = ''

//     const html = data.map(function(item) {
//         return `<li>${item.id}: ${item.name} (${item.email})</li>`
//     })

//     ul.insertAdjacentHTML('afterbegin', html.join(' '))
// }


// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve()
//         }, ms)
//     })
// }


// const p1 = sleep(1500).then(function() {
//     return 'Promise 1500'
// })

// const p2 = sleep(3000).then(function() {
//     return 'Promise 3000'
// })


// Promise.all([p1, p2]).then(function() {
//     console.log('All')
// })

// Promise.race([p1, p2]).then(function() {
//     console.log('Race')
// })


// async function start() {
//     const dataRace = await Promise.race([p1, p2])
//     console.log(dataRace)

//     const dataAll = await Promise.all([p1, p2])
//     console.log(dataAll, dataRace)
// }

// start()



// // Реализовать класс MyPromise, чтобы работал как промис. Реализовать методы then, catch, finnaly
// class MyPromise {
//     constructor(callback) {
//         this.onCatch = null
//         this.onFinnaly = null
//         this.thenCbs = []
//         this.isRejected = false

//         function resolve(data) {
//             if (this.isRejected) {
//                 return
//             }

//             this.thenCbs.forEach(cb => {
//                 data = cb(data)
//             });

//             if (this.onFinnaly) {
//                 this.onFinnaly()
//             }
//         }

//         function reject(error) {
//             this.isRejected = true

//             if (this.onCatch) {
//                 this.onCatch(error)
//             }

//             if (this.onFinnaly) {
//                 this.onFinnaly()
//             }
//         }

//         callback(resolve.bind(this), reject.bind(this))
//     }

//     then(cb) {
//         this.thenCbs.push(cb)
//         return this
//     }

//     catch(cb) {
//         this.onCatch = cb
//         return this
//     }

//     finnaly(cb) {
//         this.onFinnaly = cb
//         return this
//     }
// }


// class MyEasyPromise {
//     constructor(callback) {
//         this.cbFinnaly = null
//         this.cbCatch = null
//         this.isRejected = false
//         this.thenCbs = []

//         function resolver(data) {
//             console.log('Resolver data', data)

//             if (this.isRejected) {
//                 return
//             }

//             this.thenCbs.forEach(cb => {
//                 console.log('Resolve', cb, data)
//                 data = cb(data)
//             });

//             if (this.cbFinnaly) {
//                 this.cbFinnaly()
//             }
//         }

//         function rejecter(error) {
//             this.isRejected = true

//             if (this.cbCatch) {
//                 this.cbCatch(error)
//             }

//             if (this.cbFinnaly) {
//                 this.cbFinnaly()
//             }
//         }

//         callback(resolver.bind(this), rejecter.bind(this))
//     }

//     then(cb) {
//         console.log('Then call', cb)

//         this.thenCbs.push(cb)
//         return this
//     }

//     catch(cb) {
//         console.log('Catch call', cb)

//         this.cbCatch = cb
//         return this
//     }

//     finnaly(cb) {
//         console.log('Finnaly call', cb)

//         this.cbFinnaly = cb
//         return this
//     }
// }

// const promise = new Promise(function(resolve, reject) {
//     console.log('Run promise')
//     // resolve('1000')
//     setTimeout(() => {
//         console.log('Promise call')
//         resolve('1000')
//     }, 1000)
// })

// promise
//     // .finnaly(() => console.log('finnaly'))
//     .catch(err => console.log(err))
//     .then(num => {
//         console.log(num)
//         return num*5
//     })
//     .then(num => num*=25)
//     .then(num => console.log('Done', num))


// const promise = new MyPromise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve('1000')
//     }, 1000)
// })

// promise
//     .then(num => num*=2)
//     .catch(err => console.log(err))
//     .then(num => num*=3)
//     .finnaly(() => console.log('finnaly'))
//     .then(num => console.log('Done', num))
