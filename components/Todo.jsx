import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'  

const Todo = ({ todo }) => {

  return (
    <li className='flex justify-between items-center gap-4 bg-slate-200 p-4 my-2 capitalize'>
    {/* if li complete => bg-slate-400 */}
            <div className='flex items-center gap-4'>
                <input className='cursor-pointer' type="checkbox" />
                {/* if input complete => line-through */}
                <p className=''>{todo.text}</p>
            </div>
            <button className='cursor-pointer flex items-center'><FaRegTrashAlt size={20} /></button>
    </li>
  )
}

export default Todo