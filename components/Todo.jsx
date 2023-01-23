import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'  

const Todo = ({ todo, toggleComplete }) => {

    const style = {
        li: 'flex justify-between items-center gap-4 bg-slate-200 p-4 my-2 capitalize',
        liCompleted: 'flex justify-between items-center gap-4 bg-slate-400 p-4 my-2 capitalize',
        text: 'cursor-pointer',
        textCompleted: 'cursor-pointer line-through'
    }

  return (
    <li className={todo.completed ? style.liCompleted : style.li}>
            <div className='flex items-center gap-4'>
                <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed ? 'checked' : ''}/>
                <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textCompleted : style.text}>{todo.text}</p>
            </div>
            <button className='cursor-pointer flex items-center'><FaRegTrashAlt size={20} /></button>
    </li> 
  )
}

export default Todo