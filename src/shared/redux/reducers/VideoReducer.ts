import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  video: [],
};

export const videoReducer = createSlice({
  name: 'mainVideo',
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const {setVideos} = videoReducer.actions;

export default videoReducer.reducer;
