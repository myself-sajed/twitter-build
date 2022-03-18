import { Avatar, LinearProgress, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PublicIcon from '@mui/icons-material/Public';
import Tools from './Tools';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../firebase/firebase';
import { startLoading, stopLoading } from '../../redux/slices/loaderSlice';
import { setTweetModalClose } from '../../redux/slices/openModalSlice';



const ComposeTweetInHome = () => {


    const [twittInput, setTwittInput] = useState('')
    // States for creating a post
    const [postImageURL, setPostImageURL] = useState(null);
    const [postActualImageURL, setPostActualImageURL] = useState(null);

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.loader.isLoading)
    const [user, setUser] = useState(null)
    useEffect(() => {
        const localUser = localStorage.getItem('user')
        if (!localUser) return
        setUser(JSON.parse(localUser))
    }, [])



    // For creating a post
    async function createPost() {

        if (twittInput.length < 1) return;

        dispatch(startLoading())
        dispatch(setTweetModalClose())
        console.log('post image :', postActualImageURL)
        // Validation
        if (postImageURL === null || postImageURL === undefined) {



            // Post object for download URL with image
            const post = {
                authorName: user.userData.name,
                authorUsername: `@${user.userData.username}`,
                authorPhoto: user.userData.photoURL,
                postImageURL: null,
                tweetText: twittInput,
                timestamp: serverTimestamp(),
                commentBy: [],
                likedBy: [],
                retweetBy: [],
            }
            sendToFirebase(post)
        }
        else {
            const storage = getStorage();
            const storageRef = ref(storage, `tweets/${new Date().getTime()}`);

            const uploadTask = uploadBytesResumable(storageRef, postActualImageURL);

            uploadTask.on('state_changed',
                async (snapshot) => {

                    switch (snapshot.state) {
                        case 'paused':
                            break;
                        case 'running':
                            break;

                    }
                },
                (error) => {
                    console.log('Sorry the uploadTask failed');
                },
                async () => {

                    await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {


                        // Post object for download URL with image
                        const post = {
                            authorName: user.userData.name,
                            authorUsername: `@${user.userData.username}`,
                            authorPhoto: user.userData.photoURL,
                            postImageURL: downloadURL,
                            tweetText: twittInput,
                            timestamp: serverTimestamp(),
                            commentBy: [],
                            likedBy: [],
                            retweetBy: [],
                        }

                        sendToFirebase(post)
                    });
                }
            );

        }
        // Add data to firebase storage
        async function sendToFirebase(post) {
            await addDoc(collection(db, "twitts"), post);


            // Extra
            setPostImageURL(null);
            setPostActualImageURL(null);
            setTwittInput('');
            dispatch(stopLoading())
        }
    }






    return (
        <div className='mt-4'>
            <div className='flex items-start justify-start gap-3 w-full'>
                <Avatar src={user && user.userData.photoURL} />
                <div className='w-full' >
                    <TextField
                        label="What's Happening?"
                        multiline
                        placeholder="Wanna say something?"
                        color="primary"
                        fullWidth
                        focused
                        value={twittInput}
                        onChange={(e) => {
                            if (e.target.value.length < 0 || e.target.value.length > 300) {
                                return
                            } else {
                                setTwittInput(e.target.value)
                            }
                        }}
                    />

                    <div className='flex items-center rounded-full cursor-pointer hover:bg-blue-100 w-48 gap-2 mt-3  px-2' >
                        <PublicIcon sx={{ fontSize: 19 }} color='primary' />
                        <p className='text-[#1976d2] font-bold'>Everyone can reply</p>
                    </div>
                    {/* if there's an attachment */}
                    {
                        postImageURL ? <div className='w-full mt-3 object-cover relative'>
                            <CloseRoundedIcon className='cursor-pointer absolute left-2 top-2 bg-white rounded-full hover:bg-slate-200 ease-in-out duration-300 ' onClick={() => {
                                setPostActualImageURL(null)
                                setPostImageURL(null)
                            }} />
                            <div className='h-96 overflow-auto change__scrollbar'>
                                <img src={postImageURL} accept="image/png, image/jpg, image/jpeg" alt="diff" className='img-responsive rounded-lg' />
                            </div>
                        </div> : null
                    }
                    <div className='border-t mt-3 mb-2'>
                        <Tools twittInput={twittInput} createPost={createPost} setPostImageURL={setPostImageURL} setPostActualImageURL={setPostActualImageURL} postImageURL={postImageURL} />
                    </div>
                    {isLoading ? <LinearProgress className='my-3' /> : null}

                </div>
            </div>
        </div>
    )
}

export default ComposeTweetInHome