// Import stylesheets
import './style.css';

const list = document.querySelector('.todos')
const inputTodo = document.querySelector('.add') 

const addTodo = (todo) => {
const htmlTemplate = `
  <li><span>${todo}</span> <i class="fas fa-trash"></i></li>
`
list.innerHTML += htmlTemplate
}

inputTodo.addEventListener('submit', (e) => {
  e.preventDefault()
  const toDo = e.target.value.trim()
  addTodo(toDo)
  console.log(e.target.value)
})