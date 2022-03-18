import React from 'react'

const EmbedTwitt = () => {
    return (
        <div className='cursor-pointer hover:bg-slate-100 rounded-[20px]'>
            <div className="p-2 rounded-lg ">
                <div className='flex items-start justify-start gap-2'>
                    <img src={'/assets/home/left/dp.jpg'} alt="" className="rounded-full h-6" />
                    <div className='flex justify-start items-center gap-1'>
                        <span className='font-bold hover:underline underline-offset-1 cursor-pointer'>Shaikh Sajed</span>
                        <span className='font-sm text-gray-600'>@sajedtwitts</span>
                        <span className='font-sm text-gray-600'> · </span>
                        <span className='font-sm text-gray-600'>20min</span>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi nobis similique ut aspernatur temporibus sint animi ea in voluptas.</p>
            </div>

            <img src={'/assets/home/middle/t2.jpg'} alt="" className='w-full rounded-b-lg' />
        </div>
    )
}

export default EmbedTwitt