import axios, { Method } from 'axios';

type RequestParams = {
    method?: Method;
    user: string;
}

const BASE_URL = 'https://api.github.com/users/';

export const makeRequest = ( { method = 'GET', user }: RequestParams ) => {
    return axios({
        method,
        url: `${BASE_URL}${user}`,
    });
}