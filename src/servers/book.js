import axios from 'axios'
import { baseURL } from "./baseURl";
export const book = async (values) => {

    let token = localStorage.token
    
    try {
        let { data } = await axios.post(baseURL+'session/create', values, {headers: {'Authorization': `Bearer ${token}`}})
        return data
    } catch (err) {
        let errorResponse = err.response.data.message.split(':')[2];
        let error = errorResponse.split(',')[0]
        throw new Error(err.response ? error: "Please check your internet connection");
    }

}
