import request from "request"

const geolocation = (place, callback)=>{
    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=1&access_token=${process.env.MAPBOXTOKEN}`, {json: true}, (err, res)=>{
        if (err)
        {
            return callback(undefined, err)
        }
        return callback(res.body.features[0].center, undefined)
    })
}

export default geolocation