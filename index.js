
// const li = document.querySelector('li')

// console.log('li text', li.textContent)


// //substitui todos o descendentes
// li.innerHTML = '<h2>Novo texto</h2>'


// const ul = document.querySelector('ul')
// ul.innerHTML = '<h2>Novo texto</h2>'

// //problema de performace renderização
// ul.innerHTML = ul.innerHTML + '<li>mais um item</li>'

// //pesquisar a doc
// ul.insertAdjacentHTML('beforeend','<li>mais um item</li>')



// //vantagem ter acesoa  varias propriedades
// const newLi = document.createElement('li')

// newLi.textContent = 'novo item da lista'

// ul.appendChild(newLi)

// //aceita uma string e pode inserir varios de uma vez
// ul.append('teste pedro')


// //aceita uma string e pode inserir varios de uma vez no inicio
// ul.prepend('teste pedro primeiro')

// //argumento clona ou nçao os descendentes

// newLi.cloneNode(true)

// //live lists vs static list
// const listaQuery = document.querySelectorAll('li')
// const listaTag = document.getElementsByTagName('li')
// // ver as diferençs apos 
// ul.appendChild(newLi)

// //remover elemento
// li.remove()
// li.parentElement.removeChild(li)

// //selecionar botao
// const button =  document.querySelector('button')

// const buttonClickHandler = () => {
//   alert("clicou no botao onClick")
// }

// // consegue adicioanr apenas uma função e não consegue remover o evento
// button.onclick = buttonClickHandler

// // não pode adicionar de novo 
// // button.onclick = function2

// button.addEventListener('click', buttonClickHandler)

// button.removeEventListener('click', buttonClickHandler)

// //exemplo perguntar o que acontece
// button.addEventListener('click', () => {
//   console.log('clicked')
// })

// button.removeEventListener('click', () => {
//   console.log('clicked')
// })


// const buttonClickHandler2 = event => {
//   console.log("event", event)
// }

// //entender o objeto evento
// button.addEventListener('click',buttonClickHandler2)

// //criar uma função pra desabilitar o botao clicado

// const buttons = document.querySelectorAll('button')

// const buttonClickHandler3 = event => {
//   event.target.disabled = true
//   console.log('event')
// }

// buttons.forEach((button) => {
//   button.addEventListener('click',buttonClickHandler3)
// })

// //prevent default
// const form = document.querySelector('form')

// form.addEventListener('submit', event => {
   
//   console.log('event',event)
// })



// event delegation

//pegar li dar o color vermelho pra li clicado
const liList = document.querySelectorAll('li')

//problema de performance
liList.forEach(li => {
  li.addEventListener('click', event => {
   
    event.target.style.color = 'red';
  })
})


// event delegation
const ul = document.querySelector('ul')

ul.addEventListener('click', event => {
   
  event.target.style.color = 'red';
})









