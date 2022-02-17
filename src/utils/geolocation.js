const request = require('request')

const geolocation = (address , callback)=>{
    request(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibXVoYW1tYWRhbHNhdHRhciIsImEiOiJja3preTltcGYwbDNvMnV0YXN6bDltN3U4In0.x2_PM5F2qFhFRfaLQlDG_Q&limit=1`,
        {json: true},
        (err, res)=>{
            if (err)
            {
                callback('Cannot contact Mapbox currently!', undefined)
            }
            else if(res.body.message || res.body.query[0] === 'undefined'){
                callback('Please provide an address', undefined)
            }
            else if(res.body.features.length === 0)
            {
                callback('Cannot find provided address', undefined)
            }
            else
            {
                callback(undefined, {lat: res.body.features[0].geometry.coordinates[0], long: res.body.features[0].geometry.coordinates[1]})
            }
        })
}

module.exports = geolocation