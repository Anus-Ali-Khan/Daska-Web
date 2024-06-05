import React from 'react'
import Image from 'next/image'

const Card = ({image,name,title}) => {
  return (
    <>
      <div className='w-[31%] flex flex-col gap-y-5 my-5'>
      <div>
            <Image src={image}/>
            </div>
            <div>
            <h1 className='font-medium text-slate-600 '>{name}</h1>
            <h1 className='text-2xl font-semibold'>{title}</h1>
            </div>
      </div>
    </>
  )
}

export default Card
