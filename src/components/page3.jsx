import React from 'react'
import Page3Checkbox from './page3checkbox'
import {Link} from 'react-router-dom'

const page3 = () => {
  return (
    <div className='w-full h-screen p-5 flex flex-col justify-around'>
        <div className='flex flex-col justify-center gap-7'>
            <h3 className='text-xl font-bold text-center'>What are your goals?</h3>
            <Page3Checkbox text="Weight Loss" />
            <Page3Checkbox text="Muscle Gain" />
            <Page3Checkbox text="Flexibilty and Mobility" />
            <Page3Checkbox text="Event-specific training" />
            <Page3Checkbox text="Mindfulness and Mental Health" />
        </div>
        <Link to="/page3"><button className='bg-gradient-to-r from-blue-200 to-blue-400 w-full p-4 rounded-2xl text-xl font-bold text-white shadow-sm mt-10 mb-5'>Confirm</button></Link>
    </div>
  )
}

export default page3