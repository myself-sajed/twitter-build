import { configureStore } from '@reduxjs/toolkit'
import componentSlice from './slices/componentSlice'
import loaderSlice from './slices/loaderSlice'
import openModalSlice from './slices/openModalSlice'


export default configureStore({
    reducer: {
        component: componentSlice,
        openModal: openModalSlice,
        loader: loaderSlice,
    },
})