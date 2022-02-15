const li = document.querySelector('li')

// className

li.className = ''

console.log('className', li.className)

li.className += ' test'

console.log('className', li.className)


// classlist
li.classList.add('test')

li.classList.contains('test')

li.classList.toggle('test')

li.classList.contains('test')

li.classList.remove('test')