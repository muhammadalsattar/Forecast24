import request from "request"

const geolocation = (place, callback)=>{
    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=1&access_token=pk.eyJ1IjoibXVoYW1tYWRhbHNhdHRhciIsImEiOiJja3preWJ2am0wbWthMm5xcjlqazRhMTU5In0.MSdN_n6QklZA2k39eH1rFA`, {json: true}, (err, res)=>{
        if (err)
        {
            return callback(undefined, err)
        }
        return callback(res.body.features[0].center, undefined)
    })
}

export default geolocation