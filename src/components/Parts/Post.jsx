import { Avatar, Icon, IconButton, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import { pink } from '@mui/material/colors';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { db } from '../../firebase/firebase';
import { getDoc, updateDoc, doc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';

const Post = ({ retweet, post }) => {

    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')
    const [showCommentInput, setShowCommentInput] = useState(false)

    // setting up the user
    useEffect(() => {
        const localuser = JSON.parse(localStorage.getItem('user'));
        if (!localuser) {
            console.log('returning the user');
            return
        }

        setUser(localuser)
    }, [])

    // showing all the comments
    const showComments = () => {

    }




    // Like a post
    async function likePost() {
        console.log(post.twitt.commentBy)
        const postRef = doc(db, "twitts", post.id);
        const docSnap = await getDoc(postRef);
        console.log('user', user);


        if (docSnap.exists()) {
            if (docSnap.data().likedBy.includes(user.userId)) {
                let myArray = post.twitt.likedBy;
                console.log('Liked by array ' + myArray);
                let myIndex = myArray.indexOf(user.userId);
                if (myIndex !== -1) {
                    myArray.splice(myIndex, 1);
                    await updateDoc(postRef, {
                        likedBy: myArray
                    });
                }
            } else {
                console.log('user in else', user.userId);

                await updateDoc(postRef, {
                    likedBy: [...docSnap.data().likedBy, user.userId]
                });
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    // Retweet a post
    async function retweetPost() {
        const postRef = doc(db, "twitts", post.id);
        const docSnap = await getDoc(postRef);
        console.log('user', user);


        if (docSnap.exists()) {
            if (docSnap.data().retweetBy.includes(user.userId)) {
                let myArray = post.twitt.retweetBy;
                console.log('retweetBy array ' + myArray);
                let myIndex = myArray.indexOf(user.userId);
                if (myIndex !== -1) {
                    myArray.splice(myIndex, 1);
                    await updateDoc(postRef, {
                        retweetBy: myArray
                    });
                }
            } else {
                console.log('user in else', user.userId);

                await updateDoc(postRef, {
                    retweetBy: [...docSnap.data().retweetBy, user.userId]
                });
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    // post a comment
    const postComment = async () => {
        if (comment === '') {
            return
        }
        else {
            setComment('')
            // setCommentLoading(true)
            const postRef = doc(db, "twitts", post.id);
            const docSnap = await getDoc(postRef);

            if (docSnap.exists()) {
                const commentId = `${Math.floor(Math.random() * 1e9)}-${new Date().getTime()}`
                const d = new Date().getTime()
                await updateDoc(postRef, {
                    commentBy: [...docSnap.data().commentBy, { commentUser: user.userData, theComment: comment, time: d, commentId, replyBy: [] }].sort(function (x, y) {
                        return y.time - x.time;
                    })
                });

                // setIsCommentOpen(true)
                // setCommentLoading(false)
                // setShowCommentInput(false)
            } else {
                console.log("No such document!");
            }
        }
    }




    return (
        <div className='w-full border-t border-b' id={post && post.id}>
            {retweet && <p className='mx-9 font-bold text-gray-700 mt-3'><RepeatRoundedIcon className='mr-5' />You Retweeted</p>}
            <div className="flex items-start justify-start gap-5 p-2 mx-5 relative">

                <Avatar src={post && post.twitt.authorPhoto} />


                <div className='w-full'>
                    <div className='flex items-start justify-between'>
                        <div className='flex justify-start items-center gap-1'>
                            <span className='font-bold hover:underline underline-offset-1 cursor-pointer'>{post && post.twitt.authorName}</span>
                            <span className='font-sm text-gray-600'>{post.twitt && post.twitt.authorUsername}</span>
                            <span className='font-sm text-gray-600'> · </span>
                            <span className='font-sm text-gray-600'>{new Date(post.twitt.timestamp?.seconds * 1000).toLocaleTimeString()}</span>
                        </div>
                        <IconButton ><MoreHorizRoundedIcon /></IconButton>
                    </div>

                    {/* POST CAPTION */}

                    {post.twitt.tweetText}

                    {/* POST IMAGE */}

                    {post.twitt.postImageURL ? <div className='mt-3'>
                        <img src={post.twitt.postImageURL} draggable={false} className="w-full rounded-lg cursor-pointer" alt="photo" />
                    </div> : null}


                    {/* POST ACTIONS */}
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-start gap-0 cursor-pointer py-2'>
                            <IconButton className='hover:text-blue-400' onClick={() => setShowCommentInput(!showCommentInput)}>
                                <ChatBubbleOutlineRoundedIcon className='hover:text-blue-400' />
                            </IconButton>
                            <span className='hover:text-blue-400 text-black'>{post.twitt.commentBy.length}</span>
                        </div>
                        <div className='flex items-center justify-start gap-0 cursor-pointer py-2'>
                            <IconButton onClick={retweetPost} className='hover:text-green-500' >

                                <RepeatRoundedIcon className={`${user && post.twitt.retweetBy.includes(user.userId) ? 'text-green-500' : 'hover:text-green-500 '}`} />

                            </IconButton>
                            <span className={`${user && post.twitt.retweetBy.includes(user.userId) ? 'text-green-500' : 'hover:text-green-500 text-black'}`}>{user && post.twitt.retweetBy.length}</span>
                        </div>
                        <div className='flex items-center justify-start gap-0 cursor-pointer py-2'>
                            <IconButton className='hover:text-pink-500 ' onClick={likePost}  >

                                {
                                    user && post.twitt.likedBy.includes(user.userId) ?
                                        <FavoriteRoundedIcon sx={{ color: pink[500] }} />
                                        :
                                        <FavoriteBorderRoundedIcon />

                                }




                            </IconButton><span className={`hover:text-pink-600 text-black ${user && post.twitt.likedBy.includes(user.userId) ? 'text-pink-600' : null}`} >{user && post.twitt.likedBy.length}</span>
                        </div>
                        <div className='flex items-center justify-start gap-0 cursor-pointer py-2'>
                            <IconButton className='hover:text-blue-500' ><ShareRoundedIcon /></IconButton>
                        </div>

                    </div>

                </div>

            </div>
            {
                showCommentInput ?
                    <div className='mx-7 mb-3'>
                        <div className='flex items-start justify-start gap-3 w-full'>
                            <Avatar src={user.userData.photoURL} />
                            <div className='w-full flex items-center justify-between gap-2' >
                                <TextField
                                    multiline
                                    placeholder="Reply this tweet"
                                    color="primary"
                                    fullWidth
                                    variant="standard"
                                    value={comment}
                                    onChange={(e) => {
                                        if (e.target.value.length < 0 || e.target.value.length > 300) {
                                            return
                                        } else {
                                            setComment(e.target.value)
                                        }
                                    }}
                                />
                                <IconButton onClick={postComment}><SendRoundedIcon color='primary' /></IconButton>
                            </div>

                        </div>


                        {/* // this is comment section */}


                        {
                            post.twitt.commentBy.length > 0 ?
                                <>
                                    <h2 className="text-lg my-2">Replies on the twitts :  </h2>
                                    <div className="border-l-2 ml-10 m-0 p-0 border-gray-300 h-10"></div>
                                </>
                                :
                                <h2 className="text-md my-2">No replies yet. Be the first one to reply... </h2>
                        }

                        {post.twitt.commentBy && post.twitt.commentBy.map((comment, index) => {
                            return <div className="flex items-start justify-start gap-5 mt-1 mx-5 my-3" key={index} id={comment.commentId}>

                                <Avatar src={comment.commentUser.photoURL} />

                                <div className='w-full'>
                                    <div className='flex items-start justify-between'>
                                        <div className='flex justify-start items-center gap-1'>
                                            <span className='font-bold hover:underline underline-offset-1 cursor-pointer'>{comment.commentUser.name}</span>
                                            <span className='font-sm text-gray-600'>{comment.commentUser.username}</span>
                                            <span className='font-sm text-gray-600'> · </span>
                                            <span className='font-sm text-gray-600'>{new Date(comment.time).toLocaleTimeString()}</span>
                                        </div>
                                        <IconButton ><MoreHorizRoundedIcon /></IconButton>
                                    </div>

                                    {/* POST CAPTION */}

                                    {comment.theComment}
                                </div>
                            </div>
                        })
                        }

                    </div>
                    :
                    null
            }


        </div>
    )
}

export default Post