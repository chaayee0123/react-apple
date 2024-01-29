import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "a0d386711ad67556d79705483b4ab43f",
        language: "ko-KR"
    }
})

export default instance;