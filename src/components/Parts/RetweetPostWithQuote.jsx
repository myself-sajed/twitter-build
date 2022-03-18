import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Post from './Post';
import EmbedTwitt from './EmbedTwitt';

const RetweetPostWithQuote = () => {
    return (
        <div className='w-full border-b border-t'>
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

                    {/* POST CAPTION */}


                    <p className='mb-3'>Hello there</p>
                    {/* POST IMAGE */}
                    {/* <div className='mt-3'>
                        <img src={'/assets/home/middle/t1.jpg'} draggable={false} className="w-full rounded-lg" alt="photo" />
                    </div> */}
                    <div className='border border-gray-300 rounded-[20px] '>
                        <EmbedTwitt />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RetweetPostWithQuote