import Todo from '@/components/Todo'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Home() {

  const [todos, setTodos] = useState(['Learn React', 'Start Trading Professionally', 'Read 10 pages of Think and Grow Rich'])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]'>
        <div className='bg-slate-100 max-w-[500px] w-full m-auto rounded-md p-4 shadow-xl'>
          <h3 className='text-3xl font-bold text-center text-gray-800 p-2'>To Do App</h3>
          <form className='flex justify-between gap-2'>
            <input className='border p-2 w-full text-xl' type="text" placeholder='Add Todo' />
            <button className='border p-4 bg-purple-500 text-slate-100'><AiOutlinePlus size={30} /></button>
          </form>
          <ul>
            {
              todos.map((todo, index) => <Todo key={index} todo={todo} />)
            }
          </ul>
          <p className='text-center p-2'>You have {todos.length} todos.</p>
        </div>
      </div>
    </>
  )
}
