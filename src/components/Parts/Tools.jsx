import React from 'react'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { CircularProgress } from '@mui/material';

const Tools = ({ twittInput, setPostActualImageURL, setPostImageURL, postImageURL, createPost }) => {


    function setPostImage(e) {
        let file = e.target.files[0];

        let reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
        }
        else {
            setPostActualImageURL(null)
            setPostImageURL(null)
        }

        reader.onload = function () {
            setPostImageURL(reader.result)
            setPostActualImageURL(file)
        };

        reader.onerror = function () {
            console.log(reader.error);
        };

    }


    return (
        <div className='flex justify-between items-center'>
            <div className="mt-2 flex items-center justify-start">
                <InsertPhotoOutlinedIcon color="primary" sx={{ fontSize: 39 }} className="cursor-pointer hover:bg-blue-100 rounded-full p-2" onClick={() => { document.getElementById('tweetInputAttachment').click() }} />

                <input type="file" id='tweetInputAttachment' hidden onChange={setPostImage} />

                <GifBoxOutlinedIcon color="primary" sx={{ fontSize: 39 }} className="cursor-pointer hover:bg-blue-100 rounded-full p-2" />
                <PollOutlinedIcon color="primary" sx={{ fontSize: 39 }} className="cursor-pointer hover:bg-blue-100 rounded-full p-2" />
                <SentimentSatisfiedAltOutlinedIcon color="primary" sx={{ fontSize: 39 }} className="cursor-pointer hover:bg-blue-100 rounded-full p-2" />
                <EventNoteOutlinedIcon color="primary" sx={{ fontSize: 39 }} className="cursor-pointer hover:bg-blue-100 rounded-full p-2" />
                <LocationOnOutlinedIcon color="primary" sx={{ fontSize: 39 }} className="cursor-pointer hover:bg-blue-100 rounded-full p-2" />
            </div>
            <div className='flex items-center justify-end gap-1'>
                <CircularProgress variant="determinate" value={twittInput.length / 3} sx={{ fontSize: 20 }} className="cursor-pointer p-2 mt-2" />
                <AddCircleOutlineOutlinedIcon color="primary" sx={{ fontSize: 39 }} className="cursor-pointer hover:bg-blue-100 rounded-full p-2 mt-2" />
                <button className="bg-blue-600 rounded-full px-5 py-2 text-white font-bold mt-2 hover:bg-blue-800 ease-in-out duration-300" onClick={createPost}>Tweet</button>
            </div>
        </div>
    )
}

export default Tools