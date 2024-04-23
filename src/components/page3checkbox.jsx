import React from 'react'

const page3checkbox = ({text}) => {
  return (
    <div className='w-full flex flex-row justify-between bg-gray-100 p-5 rounded-xl'>
        <p className='text-[18px] text-gray-600 font-bold'>{text}</p>
        <input type="checkbox" className='w-7 h-7' />
    </div>
  )
}

export default page3checkbox