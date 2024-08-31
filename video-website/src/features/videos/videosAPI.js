import axios from "../../utils/axios";

//inside the getVideos function the request is made to json server using axios. why axios? it returns the data in useable format directly. no need to convert step by step using json.parse(). it allows to add interceptor. also declare the root url once and then just mention the sub-routed to fetch data. here, the axios instance is created in utils. there the base url has been declared. now importing that axios instance we just have to declare the route inside (/videos) and axios will hit that. this getVideos function also returns a promise. so if data fetching successful than promise success is returned. so it's a promise(getVideos) inside a promise (createAsyncThunk). finally the data is retuned as the axios keeps the received data inside .data or data property. 
export const getVideos = async () => {
    const response = await axios.get("/videos");

    return response.data;
};
