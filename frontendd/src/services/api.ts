import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
};

const profile = {get: () => requests.get("/profile")}
const agent = {profile}

export default agent;
