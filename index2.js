
// solução 1

const queue = []

const changeColor = (elem, color, index) => {

  const s = index * 1000

  setTimeout(() => {
    console.log('dentro do setTime out')
    elem.style.backgroundColor = color
  }, s)
}

const runQueue = () => {
  queue.forEach((e, i) => {
    changeColor(e.elem, e.color, i)
  })

  console.log('fora do loop')

  queue.forEach(e => {
    changeColor(e.elem, 'white', queue.length + 1)
  })

  console.log('fora do loop 2')

  while(queue.length > 0 ) {
    queue.pop()
  }

}

for(let elem of document.querySelectorAll('*')) {
  elem.addEventListener("click", event => {
    //console.log(`Capturing: ${elem.tagName} - ${event.target.tagName}`)
    // event.stopPropagation()
    queue.push({elem, color:'red'})
  }, true);
  elem.addEventListener("click", event => {
    // console.log(`Bubbling: ${elem.tagName} - ${event.target.tagName}`)
    // event.stopPropagation()
    queue.push({elem, color: 'green'})
    if(elem.tagName === 'HTML') {
      runQueue()
    }
  });
}



// solução 2

// criar uma lista com todos os elementos html

// var allElements = document.querySelectorAll('*')

// // adicionar o event listner de click em cada um deles

// var contador = 1

// var colorir = (elemento, cor) => {

//     var segundos = contador * 1000

//     setTimeout(() => {
//         elemento.style.backgroundColor = cor
//     }, segundos)
// }



// allElements.forEach(elem => {
//     elem.addEventListener('click', (event) => {
//         //colorir os elementos na fase capturing de vermelho
//         colorir(elem, 'red')
//         contador++
//     }, true)
//     elem.addEventListener('click', (event) => {
//         //colorir os elementos na fase bubbling de verde
//         colorir(elem, 'green')
//         contador++

//         if(elem.tagName === 'HTML') {
//           allElements.forEach(elemento => {
//             colorir(elemento,'white')
//           })

//           contador = 1
//         }
//     })
// })

