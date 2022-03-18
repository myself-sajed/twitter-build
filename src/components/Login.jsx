import React, { useState } from 'react'
import LoginModal from './Parts/LoginModal'


const Login = () => {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    return (
        <>
            <div className='flex'>




                {/* LEFT SECTION */}
                <div className="w-1/2 h-screen relative">
                    <img src={'/assets/login/login-hero-bg.png'} className='w-full absolute h-screen' alt="" />
                    <img src={'/assets/login/twitter-logo.svg'} className='mx-auto absolute w-full' style={{
                        height: '20rem', marginTop: '157px', filter: 'invert(100%) sepia(0%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)'
                    }} alt="" />
                </div>

                {/* RIGHT SECTION */}
                <div className='w-1/2 p-8'>
                    <img src={'/assets/login/twitter.png'} className='h-10' alt="" />
                    <p className='my-16 font-bold text-7xl'>Happening Now</p>
                    <div>
                        <p className='font-bold text-4xl mb-5'>Join Twitter Today</p>
                        <div className='w-1/2'>
                            <div className='flex items-center justify-center my-2 rounded-full p-2 gap-3 border-gray-400 border hover:bg-slate-100 cursor-pointer'>
                                <img src={'/assets/login/google.png'} className='h-5' alt="" />
                                <span className='text-center'>Sign up with Google</span>
                            </div>
                            <div className='flex items-center justify-center rounded-full p-2 gap-4 border-gray-400 border hover:bg-slate-100 cursor-pointer'>
                                <img src={'/assets/login/apple.png'} className='h-5' alt="" />
                                <span className='text-center'>Sign up with Apple</span>
                            </div>
                        </div>
                        <hr className='my-5 w-1/2 ' />
                        <div className='flex w-1/2 bg-blue-500 text-white font-bold items-center justify-center my-2 rounded-full p-2 gap-3 border-gray-400 border hover:bg-blue-600 cursor-pointer'>
                            Sign up with Phone or Email
                        </div>
                        <p className='text-xs w-1/2 '>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>

                        <p className='font-bold mt-10'>Already have an account?</p>
                        <div className='w-1/2 rounded-full text-center p-2 my-3 text-blue-500 font-bold border-gray-400 border hover:bg-slate-100 cursor-pointer ' onClick={() => { setIsLoginModalOpen(true) }}>
                            Sign In
                        </div>
                    </div>
                </div>

                {/* MODAL */}

                {isLoginModalOpen ? <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} /> : null}
                {/* MODAL */}


            </div>
            {/* FOOTER */}
            <div className='flex align-center justify-between mx-4'>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>About</span>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>Help Center</span>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>Terms of Service</span>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>Privacy Policy</span>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>Cookie Policy</span>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>Accessibility</span>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>Ads</span>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>Blog </span>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>Status</span>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>Carriers</span>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>Marketing</span>
                <span className='text-xs hover:cursor-pointer underline underline-offset-1	'>Settings</span>
            </div>
            <p className='text-center my-3 text-sm'>2022. Twitter, Inc.</p>
        </>

    )
}

export default Login