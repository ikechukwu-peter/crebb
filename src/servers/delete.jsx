import axios from 'axios'
import { baseURL } from "./baseURl";
export const deleteReq = async (sessionId) => {
    console.log(sessionId)

    let token = localStorage.token

    try {
        let { data } = await axios.delete(baseURL + 'session/delete/' + sessionId, { headers: { 'Authorization': `Bearer ${token}` } })
        return data
    } catch (err) {
        console.log(err.response.data.err)
        throw new Error(err.response ? err.response.data.err : "Please check your internet connection");

    }

}
