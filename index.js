
const li = document.querySelector('li')

console.log('li text', li.textContent)


//substitui todos o descendentes
li.innerHTML = '<h2>Novo texto</h2>'


const ul = document.querySelector('ul')
ul.innerHTML = '<h2>Novo texto</h2>'

//problema de performace renderização
ul.innerHTML = ul.innerHTML + '<li>mais um item</li>'

//pesquisar a doc
ul.insertAdjacentHTML('beforeend','<li>mais um item</li>')



//vantagem ter acesoa  varias propriedades
const newLi = document.createElement('li')

newLi.textContent = 'novo item da lista'

ul.appendChild(newLi)

//aceita uma string e pode inserir varios de uma vez
ul.append('teste pedro')


//aceita uma string e pode inserir varios de uma vez no inicio
ul.prepend('teste pedro primeiro')

//argumento clona ou nçao os descendentes

newLi.cloneNode(true)

//live lists vs static list
const listaQuery = document.querySelectorAll('li')
const listaTag = document.getElementsByTagName('li')
// ver as diferençs apos 
ul.appendChild(newLi)

//remover elemento
li.remove()
li.parentElement.removeChild(li)








