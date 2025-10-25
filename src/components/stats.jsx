import React from 'react'

export const Stats = () => {
  return (
    <section className='grid grid-cols-4 gap-4 bg-black text-white p-5'>
        <article className='col-span-6 lg:col-span-1'>
            <h2>3</h2>
            <p className='text-gray-500'>Years of academical experience</p>
        </article>
        <article className='col-span-6 lg:col-span-1'>
            <h2>2</h2>
            <p className='text-gray-500'>Projects</p>
        </article>
        <article className='col-span-6 lg:col-span-1'>
            <h2>21</h2>
            <p className='text-gray-500'>Technologies mastered</p>
        </article>
        <article className='col-span-6 lg:col-span-1'>
            <h2></h2>
            <p className='text-gray-500'></p>
        </article>
    </section>
  )
}

export default Stats