import { createSlice } from '@reduxjs/toolkit'

export const openModalSlice = createSlice({
    name: 'openModal',
    initialState: {
        tweetModalOpen: false,
        replyModalOpen: false,
    },
    reducers: {
        setTweetModalOpen: (state,) => {
            state.tweetModalOpen = true
        },
        setTweetModalClose: (state,) => {
            state.tweetModalOpen = false
        },
        setReplyModalOpen: (state,) => {
            state.replyModalOpen = true
        },
        setReplyModalClose: (state,) => {
            state.replyModalOpen = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTweetModalOpen, setTweetModalClose, setReplyModalClose, setReplyModalOpen } = openModalSlice.actions

export default openModalSlice.reducer