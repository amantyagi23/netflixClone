import axios from "axios";


async function getMoviesData(apiUrl){
    try {
        const response = await axios.get(apiUrl)
        return response;
    } catch (err) {
        throw new Error(err.message.toString())
    }
}


export {getMoviesData}