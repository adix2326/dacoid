import React from 'react'
import NextBtn from './nextbtn'
import {Link} from 'react-router-dom'

const page1 = () => {
  return (
    <div className='w-screen p-5 flex flex-col justify-center gap-10'>
        <div className='flex flex-row justify-end'>
            <Link to="register">
                <button className='text-blue-800 text-xl underline'>Skip</button>
            </Link>
        </div>
        <img className='w-3/4 mx-auto' src="https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xx1mI1U-yJ6RmuGEo1mtRxHwwalaBLHZWGd10bTpoVmUionEoDQZuviVQ6WoVzNDOsHl~0yy0ilAOlhE7bkA4vHBJH0DbqU9dwhXfqlk6jw1xdyF0f33oy5zbojfG2QWYudfPu~cYNQINXjXYkZuoLCeasONMGowwLq3P1TygHCHF51hwYNk8gOjU0dslJ3zLmSMuhiEV3cmW2V2OTu0zfQmANaaxPYR-14ZtD7PkGhKKhgMQo6kBHsZkBqZQsc-HfhFMCRjiJeSb-UlF5I~pJ1kggf-mor3DrAaPZhP7ikYQBqvZSZnFpga9F46Saa4bffCCrUiL1kG9lJ93vZx2Q__" alt="img" />
        <div className=''>
            <h3 className='font-bold text-xl'>Track Your Goal</h3>
            <p>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
        </div>
        <div className='flex justify-end'>
            <Link to='page2'>
                <NextBtn />
            </Link>
        </div>
    </div>
  )
}

export default page1