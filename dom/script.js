let p = document.querySelector('#test-id')

p.textContent = 'NewText'


// attributes
p.setAttribute('newAttribute', 'attributeValueTest')

var attributeValue = p.getAttribute('newAttribute')
console.log(attributeValue)


// class
p.classList.add('new-class')
let hasClass = p.classList.contains('new-class')

p.classList.remove('new-class')


// events
let $changeTextButton = document.querySelector('#change-text')
let $h1 = document.querySelector('h1')

$changeTextButton.addEventListener('click', function() {
    $h1.style.color = 'red'
})


$changeTextButton.addEventListener('click', function() {
    $h1.textContent = 'NewText2'
}, true) // погружение или всплытие - true/false


// с помощью event мы можем менять поведение событий
$changeTextButton.addEventListener('click', function(event) {
    event.stopPropagation() // останавливает событие на том элементе на котором произошел клик
    console.log(event);
    $h1.textContent = 'NewText2'
    event.preventDefault() // отменяет поведение события по умолчанию
}) // погружение или всплытие - true/false


// Обработка события по всем элементам внутри ноды
let $wrapper = document.querySelector('#wrapper')

$wrapper.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'p') {
        event.target.style.color = 'blue'
    }
})



// Размеры элемента
console.log($h1.getBoundingClientRect())


// Interval
let interval = setInterval(function() {

}, 3000) // Every 3 sec


// setTimeout
setTimeout()