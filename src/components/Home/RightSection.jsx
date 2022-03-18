import { Avatar } from '@mui/material'
import React from 'react'

const RightSection = () => {
    return (
        <div className='w-80 sticky top-0 h-screen'>
            <div className=' bg-gray-100 mt-3 mb-3 rounded-xl p-2'>
                <p className='font-bold text-xl'>Who to follow</p>
                <div className='mt-3'>
                    <UserListItem name='Ramkumar' username='realr9m' userPhoto='user1' />
                    <UserListItem name='Arian Grande' username='arianagrande' userPhoto='user2' />
                    <UserListItem name='John Doe' username='johndoe' userPhoto='user3' />
                </div>

                <p className='text-blue-500 mt-3 cursor-pointer ml-3'>Explore more</p>

            </div>

            {/* FOOTER */}
            <div className='flex flex-wrap '>
                <span className='text-xs mx-1 hover:cursor-pointer underline underline-offset-1'>About</span>
                <span className='text-xs mx-1 hover:cursor-pointer underline underline-offset-1'>Help Center</span>
                <span className='text-xs mx-1 hover:cursor-pointer underline underline-offset-1'>Terms of Service</span>
                <span className='text-xs mx-1 hover:cursor-pointer underline underline-offset-1'>Terms of Service</span>
                <span className='text-xs mx-1 hover:cursor-pointer underline underline-offset-1'>Terms of Service</span>
                <span className='text-xs mx-1 hover:cursor-pointer underline underline-offset-1'>Privacy Policy</span>

                <span className='text-xs mx-1 hover:cursor-pointer underline underline-offset-1'>Ads</span>
                <span className='text-xs mx-1 hover:cursor-pointer underline underline-offset-1'>Settings</span>
            </div>
            <p className='text-center my-3 text-sm'>&copy; 2022. Twitter, Inc.</p>
        </div>
    )
}

export default RightSection

const UserListItem = ({ name, username, userPhoto }) => {
    return (
        <div className="flex justify-between items-start gap-5 p-3 rounded-lg cursor-pointer hover:bg-slate-200 ease-in-out duration-200">
            <div className="flex align-center justify-start gap-2">
                <Avatar src={`/assets/home/left/${userPhoto}.jpg`} />
                <div>
                    <p className='font-bold tex-base'>{name}</p>
                    <p className='text-sm'>@{username}</p>
                </div>
            </div>
            <button className="bg-black rounded-full px-8 py-2 text-white hover:bg-zinc-900">
                Follow
            </button>
        </div>
    )
}

export { UserListItem }