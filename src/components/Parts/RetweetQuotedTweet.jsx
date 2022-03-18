import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const RetweetQuotedTweet = ({ retweet }) => {
    return (
        <div>
            <div className='w-full border-t border-b'>
                {/* {retweet && <p className='mx-9 font-bold text-gray-700 mt-3'><FlipCameraAndroidIcon className='mr-5' />You Retweeted</p>} */}
                <div className="flex items-start justify-start gap-5 p-2 mx-5">
                    <Avatar src={'/assets/home/left/dp.jpg'} />

                    <div className='w-full'>
                        <div className='flex items-start justify-between'>
                            <div className='flex justify-start items-center gap-1'>
                                <span className='font-bold hover:underline underline-offset-1 cursor-pointer'>Shaikh Sajed</span>
                                <span className='font-sm text-gray-600'>@sajedtwitts</span>
                                <span className='font-sm text-gray-600'> · </span>
                                <span className='font-sm text-gray-600'>20min</span>
                            </div>
                            <IconButton ><MoreHorizRoundedIcon /></IconButton>
                        </div>
                        <div className='border rounded-[20px] cursor-pointer hover:bg-slate-100 ease-in-out duration-300'>
                            <div className="p-2 rounded-lg">
                                <div className='flex items-start justify-start gap-2'>
                                    <img src={'/assets/home/left/dp.jpg'} alt="" className="rounded-full h-6" />
                                    <div className='flex justify-start items-center gap-1'>
                                        <span className='font-bold hover:underline underline-offset-1 cursor-pointer'>Shaikh Sajed</span>
                                        <span className='font-sm text-gray-600'>@sajedtwitts</span>
                                        <span className='font-sm text-gray-600'> · </span>
                                        <span className='font-sm text-gray-600'>20min</span>
                                    </div>
                                </div>
                                <p className='w-96 truncate overflow-hidden'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi nobis similique ut aspernatur temporibus sint animi ea in voluptas.</p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default RetweetQuotedTweet