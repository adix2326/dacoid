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
        <img className='w-3/4 mx-auto' src="https://s3-alpha-sig.figma.com/img/9958/8bb7/dbf14a6d26ec54e2ba9e71eaef184f6b?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaF8rMmvfqmePqO8U9FcI-Vj-rIs2-s2wBqi2eQU-eqSg4BT9mcxM9szMdI0l-Wx6339LRlvWmZxTo7DLkPgNY5TDpNfSrytPWvsbs7BQhx-qw579iY9Ku-U4OsgEJy-qrHnYY2XY4U4HdQRO7~bYooqRsx4Gkgy3y0WWQLGAIk3nQrhPuzhv-TaIBHiYpIoxK~S69VrUoN~bjuF3PJJ~MQY~1DYK29We51YBJ6e5P5Aft1AThbXiqrKivz8kn~NTpXZAjX7akU5N1zEPZjeoSl-O80YIJnW8udKSbgEG5nycAgUwlaqL0PdNkqh8wxmcGh3~PmJHFm03Wnmrd0sFA__" alt="img" />
        <div className=''>
            <h3 className='font-bold text-xl'>Get Burn</h3>
            <p>Let's keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
        </div>
        <div className='flex justify-end'>
            <Link to="register">
                <NextBtn/>
            </Link>
        </div>
    </div>
  )
}

export default page1