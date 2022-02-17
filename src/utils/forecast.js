const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=286642bf688df609cb2a7f375ab46b92&query=fetch:ip'
const forecast = (long, lat, callback)=>{
    request(`http://api.weatherstack.com/current?access_key=9588c85065de2e1fd6395fc24e6c4448&query=${lat},${long}`, {json: true}, (err, res)=>{
        if(err){
            callback('Cannot contact Weatherstack currently!', undefined)
        }
        else
        {
            callback(undefined, res.body)
        }
    })
}

module.exports = forecast