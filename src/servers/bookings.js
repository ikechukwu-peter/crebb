import axios from 'axios'
import { baseURL } from "./baseURl";
export const bookings = async () => {

    let token = localStorage.token
    
    try {
        let { data } = await axios.get(baseURL+'session/get-all-sessions', {headers: {'Authorization': `Bearer ${token}`}})
        return data
    } catch (err) {
       console.log(err)
        throw new Error(err.response ? err.response.data: "Please check your internet connection");
    }

}
