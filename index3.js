const userId = 'u123'

localStorage.setItem('userId', userId)

localStorage.getItem('userId', userId)

localStorage.removeItem('userId')

localStorage.clear()

//armazenar objeto
const user = {
  name: 'pedro',
  age: 31,
  hobbies: ['ler', 'jogar']
}


localStorage.setItem('user', JSON.stringify(user))

//extrair os dados

const extarctUser = JSON.parse(localStorage.getItem('user'))


// testar o sessionStorage copioar a url e ver que não funciona

