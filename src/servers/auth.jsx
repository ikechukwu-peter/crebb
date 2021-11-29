import axios from "axios";
import { baseURL } from "./baseURl";

export const login = async (values) => {

    try {
        let { data } = await axios.post(baseURL+'users/login', values)
        return data
    } catch (err) {
        throw new Error(err.response ? err.response.data.err: "Please check your internet connection");
    }

}


export const signup = async (values) => {

    try {
        let { data } = await axios.post(baseURL+'users/register', values)
        return data
    } catch (err) {
            throw new Error(err.response ? err.response.data.err: "Please check your internet connection");
    }

}


