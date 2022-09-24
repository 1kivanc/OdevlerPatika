import { useState} from 'react'
import { toast } from 'react-toastify'; 
function TodoForm({setTodos,todos}) {

    const [todoValue, setTodoValue] = useState('')

    const handleSubmit = (e) => {
        if(todoValue === ''){
            toast.error('lütfen boş bırakmayınız');
        }else if (todos.includes(todoValue)){
            toast.error('daha önceden eklenmiş')
        }else {
            const newTodo = todoValue.trim()
            setTodos([...todos , newTodo])
            toast.success('eklendi')    
        }
        
    }
  return (
    <div>
        <header className='header'>
            <h1>Todos</h1>
        </header>
        <form action="" id="todo-form">
        <input 
        type="text" 
        id='from-input' 
        placeholder="Bir aktivite giriniz"
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}>
            
        </input>
        <button onClick={(e) =>{
            e.preventDefault()
            handleSubmit()
            setTodoValue('')
        }}>
        <i className="fa-solid fa-plus"></i>
        </button>
    </form>
    </div>
    
  )
}

export default TodoForm