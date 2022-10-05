import axios from "axios";


export const fetchCharecters = async (url) => {
    const res = await axios.get(url)
    return res.data;
};
