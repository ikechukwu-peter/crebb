import axios from 'axios'
import { baseURL } from "./baseURl";
export const book = async (values) => {

    let token = localStorage.token

    try {
        let { data } = await axios.post(baseURL + 'session/create', values, { headers: { 'Authorization': `Bearer ${token}` } })
        return data
    } catch (err) {
        throw new Error(err.response ? err.response.data.err : "Please check your internet connection");
    }
}
