import axios from 'axios';

export const getCharacters = async (url,params) => {
    try {
    let response = await axios.get(url, params);
    return response.data
    } catch(error){
        console.log("Nånting gick fel", error)
    }
}
