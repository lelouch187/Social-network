import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../components/types/types';
import { RootState } from '../store';

interface ProfilePageState {
  posts: IPost[];
}

const initialState: ProfilePageState = {
  posts: [],
};

const profilePageSlice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    addPost: (state, { payload }: PayloadAction<IPost>) => {
      state.posts.push(payload);
    },
    removePost:(state,{ payload }:PayloadAction<string>)=>{
        state.posts=state.posts.filter(post=>post.id!==payload)
    }
  },
});

export const { addPost,removePost } = profilePageSlice.actions;

export const selectPosts = (state:RootState)=>state.profile.posts

export default profilePageSlice.reducer;
