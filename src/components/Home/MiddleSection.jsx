import React from 'react'
import Explore from '../NavComponents/Explore'
import { useDispatch, useSelector } from 'react-redux';
import HomeComponent from '../NavComponents/HomeComponent'
import ComposeTweetInModal from '../Parts/ComposeTweetInModal';
import { changeComponentTo } from '../../redux/slices/componentSlice';


const MiddleSection = () => {

    const component = useSelector(state => state.component.component)
    const twittModalOpen = useSelector(state => state.openModal.tweetModalOpen)
    const dispatch = useDispatch()

    return (
        <>
            <div className="w-1/2 border-l border-r">
                {twittModalOpen ? <ComposeTweetInModal /> : null}
                {
                    component === 'home' ? <HomeComponent /> : component === 'explore' ? <Explore /> : <h1 className="text-center text-blue-500 cursor-pointer font-bold underline underline-offset-1"
                        onClick={() => { dispatch(changeComponentTo('home')) }} >Page not found. Go to Home</h1>
                }

            </div>


        </>
    )
}

export default MiddleSection