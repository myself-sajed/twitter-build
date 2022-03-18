import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { IconButton } from '@mui/material';
import { UserListItem } from '../Home/RightSection';
import Post from '../Parts/Post';
import RetweetPostWithQuote from '../Parts/RetweetPostWithQuote';
import RetweetPost from '../Parts/RetweetPost';
import RetweetQuotedTweet from '../Parts/RetweetQuotedTweet';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const Explore = () => {

    const [twitts, setTwitts] = useState(null)

    // Fetch all the posts from the database
    useEffect(() => {
        const q = query(collection(db, "twitts"), orderBy('timestamp', 'desc'));
        onSnapshot(q, (querySnapshot) => {
            const posts = [];
            querySnapshot.forEach((doc) => {
                posts.push({ id: doc.id, twitt: doc.data() });
            });
            setTwitts(posts);
            console.log(posts)
        });
    }, [])


    return (

        <div className="bg-white">

            <div className='fixed top-0 backdrop-blur-xl bg-white/80 z-20 w-[42.2%]'>
                {/* SEARCH BAR */}
                <div className=' flex items-center justify-between ml-15 mt-2 px-8'>
                    <div className='flex align-center border border-gray-100 bg-gray-100 p-2 px-2 rounded-full w-full hover:border hover:border-blue-400 mr-10'>
                        <SearchIcon color='action' className='mx-2' />
                        <input type="search" size='50' className='border-none outline-none bg-transparent' placeholder="Search Twitter" />
                    </div>
                    <SettingsIcon className='cursor-pointer' />
                </div>

                {/* EXPLORE NAVBAR */}

                <div className='flex items-center justify-between mx-6 mt-2 mb-[1px]' id='exploreNavbar'>

                    <ExploreNavItem id='foryou' name='For You' classname='font-bold border-b-4' />
                    <ExploreNavItem id='covid19' name='COVID-19' classname='' />
                    <ExploreNavItem id='trending' name='Trending' classname='' />
                    <ExploreNavItem id='news' name='News' classname='' />
                    <ExploreNavItem id='sports' name='Sports' classname='' />
                    <ExploreNavItem id='entertainment' name='Entertainment' classname='' />

                </div>
            </div>


            {/* FEED */}

            <div className='mt-32 mx-[1px]'>

                {/* HERO IMAGE WITH NEWS */}
                <ExploreNewsWithHeroImage topic__type='Ukraine conflict · LIVE' headline='Russia is invading Ukraine. No peace talk yet.' image__url='/assets/home/middle/hero.jpg' />

                {/* NEWS CARD */}
                <ExploreNewsCard topic__type='Ukraine conflict · LIVE' headline='Indian students stranded in Ukraine seek help to come home' image__url='/assets/home/middle/news.jpg' trending__with='ukrainerussiacrisis' />
                <ExploreNewsCard topic__type='Ukraine conflict · LIVE' headline='Evacuation efforts continue as more flights with Indian nationals arrive in India' image__url='/assets/home/middle/news2.jpg' trending__with='ukrainerussiacrisis' />
                <ExploreNewsCard topic__type='Indian Elections · LIVE' headline='Assembly Elections 2022: First phase of voting gets underway in Manipur' image__url='/assets/home/middle/news3.jpg' trending__with='ManipurElections2022' />

                {/* TOPIC CARD */}
                <ExploreTopicCard topic__type='Ukraine conflict · LIVE' topic='Ukraine' tweet__count='1.2k' />
                <ExploreTopicCard topic__type='Election India · LIVE' topic='UP Elections' tweet__count='20k' />
                <ExploreTopicCard topic__type='Maharashtra · Trending' topic='Nawab Malik' tweet__count='19.3k' />
                <ExploreTopicCard topic__type='Politics · Trending' topic='#nuclearwar' tweet__count='23.8k' />
                <ExploreTopicCard topic__type='Science · Trending' topic='#physics' tweet__count='1,989' />

                {/* WHO TO FOLLOW CARD */}

                <p className='font-bold text-xl mx-5'>Who to follow</p>
                <div className='mt-3 mx-5 mb-2'>
                    <UserListItem name='Ramkumar' username='realr9m' userPhoto='user1' />
                    <UserListItem name='Arian Grande' username='arianagrande' userPhoto='user2' />
                    <UserListItem name='John Doe' username='johndoe' userPhoto='user3' />
                </div>


                {/* POST CARD */}
                {
                    twitts && twitts.map((post, index) => {

                        return <Post retweet={false} key={index} post={post} />



                    }

                    )
                }

                {/* RETWEET POST CARD */}
                <RetweetPostWithQuote />

                <RetweetQuotedTweet />





            </div>




        </div>








    )
}

export default Explore


const ExploreNavItem = ({ id, name, classname }) => {

    function changeActive(e) {
        // console.log(e.target.classList);
        // const classList = e.target.classList
        // classList.add("font-bold")
        // classList.add("border-b-4")

        const nodes = document.getElementById('exploreNavbar').children;
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            node.classList.remove("font-bold")
            node.classList.remove("border-b-4")

        }
        const classList = e.target.classList
        classList.add("font-bold")
        classList.add("border-b-4")
    }




    return <span id={id} className={` text-gray-700 ${classname}  border-blue-500 hover:bg-slate-200 p-3 cursor-pointer rounded ease-in-out duration-400`} onClick={changeActive}>{name}</span>
}

const ExploreNewsWithHeroImage = ({ topic__type, headline, image__url, }) => {
    return <div className='relative my-1' >

        <div className='w-full absolute bottom-0 cursor-pointer z-10 text-white pt-32 pb-5' style={{ boxShadow: 'inset 0 -138px 61px -46px #000000' }}>
            <div className='mx-5'>
                <span className='text-gray-200 mb-4 font-sm'>{topic__type}</span>
                <p className=' text-[27px] font-bold leading-7'>{headline}</p>
            </div>
        </div>
        <img src={image__url} className='w-full h-80 object-cover relative overflow-hidden  ' alt="" />

    </div>
}

const ExploreNewsCard = ({ topic__type, headline, image__url, trending__with }) => {
    return (
        <div className='w-full cursor-pointer hover:bg-gray-100 hover:ease-in-out duration-300 py-3'>

            <div className='flex items-start justify-between mx-5 gap-2'>
                <div>
                    <p className='text-gray-600'>{topic__type}</p>
                    <p className='font-bold w-full font-sans'>{headline}</p>
                    <p className='text-gray-600'>Trending with <span className='text-blue-500'>#{trending__with}</span></p>
                </div>
                <img src={image__url} alt="" className="rounded-lg h-24 w-24 object-cover" />
            </div>


        </div>
    )
}

const ExploreTopicCard = ({ topic__type, topic, tweet__count }) => {
    return (
        <div className='w-full cursor-pointer hover:bg-gray-100 hover:ease-in-out duration-300 py-3'>

            <div className='flex items-start justify-between mx-5 gap-2'>
                <div>
                    <p className='text-gray-600'>{topic__type}</p>
                    <p className='font-bold w-full font-sans'>{topic}</p>
                    <p className='text-gray-600'>{tweet__count}Tweets</p>
                </div>
                <IconButton><MoreHorizRoundedIcon /></IconButton>
            </div>


        </div>
    )
}

