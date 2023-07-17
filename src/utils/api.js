import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyDHFRCkOUo-ejm9p7RFTsg_6WD4fLXAAzQ",
    cx: "97df93d4bdc1f45ca",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
