import { IconButton, } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setTweetModalClose } from '../../redux/slices/openModalSlice'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ComposeTweetInHome from './ComposeTweetInHome';

const ComposeTweetInModal = () => {

    const dispatch = useDispatch()



    return (
        <div className="fixed top-0 bottom-0 z-30 h-full left-0 right-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div className="bg-white h-[600px]  my-20 w-[600px] rounded-[20px] p-2">
                <IconButton onClick={() => { dispatch(setTweetModalClose()) }}><CloseRoundedIcon color='primary' /></IconButton>

                <div className='h-[500px] overflow-auto change__scrollbar'>
                    <div className="p-3 ">

                        <ComposeTweetInHome />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComposeTweetInModal