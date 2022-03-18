import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';




const LoginModal = ({ setIsLoginModalOpen }) => {
    return (

        <div className='fixed top-0 bottom-0 left-0 right-0 ' style={{ backgroundColor: '#000000ad' }}>

            {/* LOGIN MODAL */}
            <div className='relative w-screen'>
                <div className='w-1/3 bg-white rounded-2xl drop-shadow-2xl my-10 mx-auto ' style={{ height: '38rem', width: '38rem' }}>
                    <div className='flex align-center justify-start gap-60'>
                        <IconButton onClick={() => setIsLoginModalOpen(false)} ><CloseRoundedIcon /></IconButton>
                        <img src={'/assets/login/twitter.png'} className="h-7 mt-2" alt="" />
                    </div>
                    <div className="mt-5">
                        <div className='px-36 '>
                            <p className='text-2xl font-bold text-center'>Sign in to Twitter</p>
                            <div className='mt-5'>
                                <div className='flex items-center justify-center my-5 rounded-full p-2 gap-3 border-gray-400 border hover:bg-slate-100 cursor-pointer'>
                                    <img src={'/assets/login/google.png'} className='h-5' alt="" />
                                    <span className='text-center'>Sign up with Google</span>
                                </div>
                                <div className='flex items-center justify-center rounded-full p-2 gap-4 border-gray-400 border hover:bg-slate-100 cursor-pointer'>
                                    <img src={'/assets/login/apple.png'} className='h-5' alt="" />
                                    <span className='text-center'>Sign up with Apple</span>
                                </div>
                            </div>
                            <hr className='my-5 ' />

                            <TextField id="outlined-basic" margin="dense" fullWidth label="Phone, email or username" variant="outlined" />

                            <TextField id="outlined-basic" type='password' margin="dense" fullWidth label="Password" variant="outlined" />

                            <button type='button' class="rounded-full bg-black text-white py-2 mt-5 mx-auto w-full">Sign In</button>
                            <button type='button' class="rounded-full border border-slate-500 hover:bg-slate-100 text-black py-2 mt-5 mx-auto w-full">Save Forgot password?</button>
                        </div>

                    </div>
                    <div>
                        <p className="mt-10 text-center">Don't have an account? <span className='text-blue-500 cursor-pointer'>Sign up</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginModal