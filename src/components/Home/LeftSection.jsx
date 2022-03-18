import React, { useEffect, useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar, IconButton } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useDispatch } from 'react-redux';
import { changeComponentTo } from '../../redux/slices/componentSlice';
import { setTweetModalOpen } from '../../redux/slices/openModalSlice';

const LeftSection = () => {

    const dispatch = useDispatch()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const localUser = localStorage.getItem('user')
        if (!localUser) return
        setUser(JSON.parse(localUser))
    }, [])


    return (
        <div className='h-screen flex flex-col justify-between sticky top-0 ' >
            <div>
                <IconButton ><TwitterIcon fontSize="large" color='primary' /></IconButton>

                <div id='left__nav__items'>
                    <NavListItem image__name='home' nav__name='Home' childClass='font-bold' parentClass='bg-slate-200' />
                    <NavListItem image__name='explore' nav__name='Explore' />
                    <NavListItem image__name='notification' nav__name='Notifications' />
                    <NavListItem image__name='messages' nav__name='Messages' />
                    <NavListItem image__name='bookmarks' nav__name='Bookmarks' />
                    <NavListItem image__name='lists' nav__name='Lists' />
                    <NavListItem image__name='profile' nav__name='Profile' />
                    <NavListItem image__name='more' nav__name='More' />
                </div>


                <button color='primary' className='rounded-full mt-3 px-24 bg-blue-500 text-white font-bold py-3 hover:bg-blue-600' onClick={() => { dispatch(setTweetModalOpen()) }}>Tweet</button>
            </div>

            <div className='flex align-center justify-between mb-3 hover:rounded-full p-2 cursor-pointer hover:bg-slate-200 ease-in-out duration-300'>
                <div className='flex align-center gap-2'>
                    <Avatar src={user && user.userData.photoURL} />
                    <div className=''>
                        <p className='font-bold'>{user && user.userData.name}</p>
                        <p className='text-sm'>@{user && user.userData.username}</p>
                    </div>
                </div>
                <IconButton><MoreHorizOutlinedIcon color='black' /></IconButton>
            </div>
        </div>

    )
}

export default LeftSection



const NavListItem = ({ image__name, nav__name, parentClass, childClass }) => {

    const dispatch = useDispatch()


    function changeActive(e) {


        const nodes = document.getElementById('left__nav__items').children;
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            node.children[1].classList.remove("font-bold");
            node.classList.remove("bg-slate-200");

        }
        const classList = e.currentTarget.children[1].classList
        classList.add("font-bold")
        e.currentTarget.classList.add("bg-slate-200")
        dispatch(changeComponentTo(image__name))
    }


    return (
        <div className={` ${parentClass && parentClass} flex gap-5 align-center p-3 hover:bg-slate-100 rounded-full cursor-pointer ease-in-out duration-300`} onClick={changeActive}>
            <img src={`/assets/home/left/${image__name}.svg`} className='h-7' alt="" />
            <span className={`text-xl ${childClass && childClass}`}>{nav__name}</span>
        </div>
    )
}

export { NavListItem }