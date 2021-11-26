import axios from 'axios'
import { baseURL } from "./baseURl";
import setAuthToken from '../utilities/SetAuthToken';
export const book = async (values) => {

    let token = localStorage.token
    console.log(token)
    let man = setAuthToken()

    console.log(man)
    try {
        let { data } = await axios.post(baseURL+'session/create', values, {headers: {'Authorization': `Bearer ${token}`}})
        return data
    } catch (err) {
        console.log(err)
        throw new Error(err.response ? err.response.data.err: "Please check your internet connection");
    }

}
