const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geolocation = require('./utils/geolocation')
const forecast = require('./utils/forecast')

const app = express()

// Setting application configurations
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
app.use(express.static(path.join(__dirname, '../public')))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

// JSON HTTP Endpoint
app.get('/weather', (req, res)=>{
    if (!req.query.address)
    {
        return res.send({
            Error: 'Must provide an address!'
        })
    }
    geolocation(req.query.address, (err, data)=>{
        if(err)
        {
            return res.send({Error: err})
        }
        forecast(data.lat, data.long, (err, forecastdata)=>{
            if(err)
            {
               return res.send({Error: err})
            }
            res.send({
                weather_description: forecastdata.current.weather_descriptions[0],
                temperature: forecastdata.current.temperature,
                location: forecastdata.location.name + ', ' + forecastdata.location.region,
                precip: forecastdata.current.precip
            })
        })
    })
})

// Application routes
app.get('', (req, res)=>{
    res.render('index', {
        owner: 'Muhammad Abd-Elsattar'
    })
})
app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'Who are we',
        owner: 'Muhammad Abd-Elsattar'
    })
})
app.get('/help', (req, res)=>{
    res.render('about', {
        title: 'How can we help you',
        owner: 'Muhammad Abd-Elsattar'
    })
})
app.get('/help/*', (req, res)=>{
    res.render('error', {
        title: 'How can we help you',
        owner: 'Muhammad Abd-Elsattar',
        error: 'Oops! Cannot find this article'
    })
})
app.get('*', (req, res)=>{
    res.render('error', {
        title: 'Who are we',
        owner: 'Muhammad Abd-Elsattar',
        error: 'Oops! This page does not exist'
    })
})

// Starting server
app.listen(3000, ()=>{
    console.log('Server is running on port: 3000')
})