import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    put: (url: string, body: any) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
};

const profile = {
    get: () => requests.get('/profile'),

    update: (data: any) => requests.put(`/profile/${data.id}`, data),

    deleteFramework: (profileId: number, frameworkId: number) =>
    requests.delete(`/profile/${profileId}/framework/${frameworkId}`),
    
    updateFramework: (profileId: number, frameworkId: number, data: any) =>
    requests.put(`/profile/${profileId}/framework/${frameworkId}`, data),
};


const agent = {profile}
export default agent;