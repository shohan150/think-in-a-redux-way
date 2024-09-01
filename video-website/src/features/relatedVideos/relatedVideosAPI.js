import axios from "../../utils/axios";

// ?tags_like=javascript&tags_like=react&id_ne=4&_limit=5
// ['tags_like=javascript', 'tags_like=react']

export const getRelatedVideos = async ({ tags, id }) => {
    const limit = 5;
    //eta json server er documentation onujayi kivabe request korte hobe tag diye related video pete, se hisebe request kora hoyeche. tahole related maz 5 ta video dibe. ar id_ne mane ei id ta not include. ei id bade baki kono 5 ta dibe. 
    let queryString =
        tags?.length > 0
            ? tags.map((tag) => `tags_like=${tag}`).join("&") +
              `&id_ne=${id}&_limit=${limit}`
            : `id_ne=${id}&_limit=${limit}`;

            //finally, ei queryStirng use kore request korlam.
    const response = await axios.get(`/videos?${queryString}`);

    return response.data;
};
