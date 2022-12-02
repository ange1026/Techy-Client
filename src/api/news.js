import apiUrl from "../apiConfig";
import axios from "axios";

export const newsIndex = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/news'

    })
}

export const newsShow = (user, id) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/news/' + id,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
    
}