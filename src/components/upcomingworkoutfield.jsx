import React from 'react'

const upcomingworkoutfield = ({logo, content, datetime}) => {
  return (
    <div className='w-full shadow-md p-4 flex gap-4 justify-between items-center rounded-xl'>
        <div className='flex gap-4'>
            <img width={50} src={logo} alt="logo" border="0"/>
            <div>
                <h5 className=''>{content}</h5>
                <p className='text-gray-400 text-[13px]'>{datetime}</p>
            </div>
        </div>
        <label htmlFor="toggle-switch">
            <input type="checkbox" name="" id="toggle-switch" className='cursor-pointer h-7 w-14 rounded-full appearance-none bg-blue-400 bg-opacity-25 border-2 border-blue-300 checked:border-2 checked:border-blue-400 checked:bg-blue-200 checked:opacity-25 tansition duration-200' />
        </label>
    </div>
  )
}

export default upcomingworkoutfield