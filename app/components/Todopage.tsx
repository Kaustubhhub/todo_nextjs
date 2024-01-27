import React from 'react'
import Image from 'next/image'
import TodoCard from './TodoCard'

export default function Todopage() {
  return (
    <>
      <div className='absolute'>
        <Image
          src="/bg-desktop-dark.jpg"
          alt='Background image'
          width={500}
          height={500}
          className='w-screen sm:w-screen' 
        />

        <div className='w-screen h-screen' style={{backgroundColor:"#161722", height:" 57vh", width:"100vw"}}>
        </div>
      </div>
      <TodoCard/>
      </>
  )
}
