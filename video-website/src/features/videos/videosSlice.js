import { getVideos } from "./videosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

//declare the initialState with video, loading and error data.
const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk. fetch video data asynchronously from json server using createAsyncThunk. the 2nd parameter takes an async callback that returns a promise. inside it the promise is made or requested on the getVideos function. depending on what this function returns the result of the promise depends.if successfull return the data with the promise fulfill.
export const fetchVideos = createAsyncThunk(
    "videos/fetchVideos",
    async ({ tags, search }) => {
        const videos = await getVideos(tags, search);
        return videos;
    }
);

//create the videoSlice
const videoSlice = createSlice({
    name: "videos",
    initialState,
    // directly ei reducer er kono kaj nai. etar kaj sudhu data fetch kora. sejonno e extraReducer e lagbe sudhu. sekhane 3 type promise er jonno builder format e 3 ta case or situation er jonno callback declare kori.
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                //request ongoing. loading true. error none.
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                //data successfully received. loading complete. keep the data from received payload inside state.
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                //error occured. loading phase complete, resulting into failure. no data received, set the error from received action.
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

//finally export the reducer. 
export default videoSlice.reducer;

//sathe fetchvideos const tao agei export kora ache. shei const k dispatch korle e videoSlice er extraReducer theke execute hobe. tobe thunk e const asole action creator er moto kaj kore. mane shei const k invoke korle, fetchVideos(), execute hoye server e request kore actionType/actionCreator toiri kore, shei creator er vitor action type, payload diye dispatch k dibe. tokhon asole shei action areator ta dispatch holo ebong videoSlice e ese extraReducer e ese execute hobe. 