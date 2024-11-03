import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    //baseQuery, endPoints are the bare minimum to create a reducer. These 2 are enough. If you provide these two then createApi will create a reducer for you in the reducer property. So, now in store.js we can directly assign the reducer apiSlice.reducer in store.js. Accha reducer bannche. tahole funtion er nam createApi keno rakhlo? Karon may be amra to mainly query korbo bole e rth-query use korchi. sejonno redux gives a vide that i am just writting code to process various api endpoints. And internally these apis will be processed and converted into reducers. Not only that it also add some required middleware automatically in apiSlice.middleware.
    reducerPath: "api", //the reducer name that goes into the store.js file. means, in the store, we assign each individual reducer as a key value pair. So, instead of controlling at the store, in rtk query, we are declaring the reducer name here directly. then use this name in the store as apiSlice.reducerPath. the default value is "api" even if we don't assign any value. Here, let us use "api" for now.
    //declare the base url of the server. The fetchBaseQuery takes even more options including fatchFn, method, headers, body, cache, redirect etc. for now we are using baseUrl only. 
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    //list of the allowed tag types. Now, these tags can be used on the apiSlice endpoints. ekhn provideTags diye kono particular endpoint er sathe tag take involve kora hobe. mane oi endpoint theke asa data k cache j korbe, shei cache er sathe ei tag k rakhbe. erpor invalidatesTags dile oi particular tag j cache er sathe involved, shei cache k invalid kore dibe. mane next time oi request korle r cache theke dekhabe na borong data fetch kore anbe. 
    tagTypes: ["Videos", "Video", "RelatedVideos"],

    //define all the api endpoints. Follows the builder pattern. 
    endpoints: (builder) => ({
        // first endpoint. declare the query path. query te evabe function na diye directly string o deya jai. query: "/videos". no problem. but jokhon dynamic value neya lagbe jemon, query: (id) => `/videos/${id}` tokhon function use kora lagbe. Sumit da jeta bollo 2 ta pattern mone na rekhe. sob somoy function diye e query ta likhte tahole confusion kom holo ei r ki. sob somoy function ei query likhte thakba. tobe hae more than one parameter pathate hle ekta object er vitor pathate hobe. mane se user theke pathano sokol request parameter first peremeter ei nibe. 
        //redux proti ta endpoint er jonno ekta kore hook baniye fele. useEndpointQuery. ekhn ei hook call korle e cholbe. useEffect, dispatch kichu lagbe. hook take invoke korle se asynchroously data niye asbe ebong {data, isLoading, isError, error} k return korbe. 
        //the advanced configuration video is high. check 8.7 or it's note to have an idea of how much control redux provides to the programmer.
        getVideos: builder.query({
            query: () => "/videos",
            keepUnusedDataFor: 600,
            //add videos tag to the cached data.
            providesTags: ["Videos"],
        }),
        //2nd endpoint to get single video data. 
        getVideo: builder.query({
            query: (videoId) => `/videos/${videoId}`,
            //add video tag to the cached data of each single video.
            providesTags: (result, error, arg) => [{ type: "Video", id: arg }],
        }),
        getRelatedVideos: builder.query({
            query: ({ id, title }) => {
                const tags = title.split(" ");
                const likes = tags.map((tag) => `title_like=${tag}`);
                const queryString = `/videos?${likes.join("&")}&_limit=4`;
                return queryString;
            },
            providesTags: (result, error, arg) => [
                { type: "RelatedVideos", id: arg.id },
            ],
        }),
        //operations are of mainly two types: query (read), mutation (add, edit, delete).
        addVideo: builder.mutation({
            //mutate korte query : () => "/videos" na pathiye pathate hobe object k, j at least url, request method and request body k hold korbe. Tobe method "GET" dile get o kora jabe. mane etokkhon er format e na kore chaile ei format e CRUD er sob action korte parba. 
            query: (data) => ({
                url: "/videos",
                method: "POST",
                body: data,
            }),
            //new video add hle, videos tag er cached data ba all videos er cached data k invalidate korlam. jate erpor server theke fresh all videos data niye ase.
            invalidatesTags: ["Videos"],
        }),
        editVideo: builder.mutation({
            query: ({ id, data }) => ({
                url: `/videos/${id}`,
                method: "PATCH",
                body: data,
            }),
            //kono particular video k edit korle oi particular video, related videos r all videos er cached data k invalidate korlam.
            //tobe invalidatesTags e callback function o deya j kina array k return korbe. whats the benefit? oi callback e parameter hisebe result complete howar por server theke pawa result, error hle error info, request er sathe pathano arguments pabe. ekhn shei info gulo use kore tag choose kore invalidate korte parbo. so, in the end array e pacche kintu callback dile kichu extra parameters pacchi.
            invalidatesTags: (result, error, arg) => [
                "Videos",
                { type: "Video", id: arg.id },
                { type: "RelatedVideos", id: arg.id },
            ],
        }),
        deleteVideo: builder.mutation({
            query: (id) => ({
                url: `/videos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Videos"],
        }),
    }),
});

export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useGetRelatedVideosQuery,
    useAddVideoMutation,
    useEditVideoMutation,
    useDeleteVideoMutation,
} = apiSlice;
