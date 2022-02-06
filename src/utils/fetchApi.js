import axios from "axios"

const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY


export const baseUrl = 'https://deep-translate1.p.rapidapi.com/language/translate/v2'

export const fetchAvailableLanguages = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
            'x-rapidapi-key': RAPID_API_KEY
          }
    })

    return data
}



export const translateApi = async (targetLang, query) => {
    
    const options = {
        method: 'POST',
        url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
          'x-rapidapi-key': RAPID_API_KEY
        },
        data: {q: query, target: targetLang}
      };


    const { data } = await axios.request(options).catch(err => console.log('err', err))

    return data
}