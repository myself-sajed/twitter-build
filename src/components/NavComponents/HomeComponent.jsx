import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import ComposeTweetInHome from '../Parts/ComposeTweetInHome'
import Post from '../Parts/Post'


const HomeComponent = () => {

    const [twitts, setTwitts] = useState(null)
    const [user, setUser] = useState(null)

    // Fetch all the posts from the database
    useEffect(() => {

        const localUser = localStorage.getItem('user')
        if (!localUser) return
        setUser(JSON.parse(localUser))

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
        <div className='w-full '>
            <div className='sticky top-0 backdrop-blur-xl bg-white/80 z-20 '>
                <div className="flex justify-between items-center sticky py-3 top-3 px-3">
                    <p className='font-bold text-xl'>Home</p>
                    <img src={'/assets/home/middle/star.svg'} alt="" className="h-7 p-1 cursor-pointer hover:bg-slate-200 rounded-full" />
                </div>
            </div>
            <div className="p-3 w-full">

                <ComposeTweetInHome user={user} />

                {
                    twitts && twitts.map((post, index) => {

                        return <Post retweet={false} key={index} post={post} />



                    }

                    )
                }


            </div>
        </div>
    )
}

export default HomeComponent