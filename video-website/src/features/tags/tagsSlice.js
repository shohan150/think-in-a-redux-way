import { getTags } from "./tagsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

//videoSlice er moto e tagsSlice toiri. sudhu axios e /videos er jaigai /tags a hit korbe. baki sob almost same. 

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
    const tags = await getTags();
    return tags;
});

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tags = action.payload;
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.isLoading = false;
                state.tags = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default tagsSlice.reducer;


//oh, hae. redux devtools e dekha jabe thunk er protita action .pending, .fulfill 2 ta kore call/dispatch hoyeche. etar karon dev mode e 2 bar kore render kora hoi. amra index.js compoent e giye strictmode soriye dile e dekha jabe 2 bar kore request hocche. jodio production mode e emniteo strictmode r kaj kore na. 