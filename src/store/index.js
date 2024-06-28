import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import { albumsApi } from "./apis/albumApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
    reducer:{
        users: userReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware);
    }
})

setupListeners(store.dispatch);

export * from './thunks/fetchUser';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export { useFetchAbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumApi';
export { useFetchPhotosQuery, useAddPhotosMutation, useRemovePhotosMutation } from './apis/photosApi'