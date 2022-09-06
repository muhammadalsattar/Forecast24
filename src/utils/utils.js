import axios from 'axios'
import 'dotenv/config'

const getGeolocation = async (place) => {
    try{
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=1&access_token=${process.env.MAPBOXTOKEN}`)
        return response.data.features[0].center
    }
    catch(e) {
        throw new Error(e)
    }
}

const getWeather = async(coords)=>{
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[1]}&lon=${coords[0]}&appid=${process.env.OWMAPPID}&units=metric`)
        return response.data
    }
    catch(e) {
        return new Error(e)
    }
}

export {getGeolocation, getWeather}