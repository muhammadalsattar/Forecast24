import express, { response } from 'express'
import path from 'path'
import hbs from 'hbs'
import locationip from 'location-ip/location-ip.js'
import forecast from './utils/forecast.js'

const app = express()
const port = process.env.PORT || 3000

// Setting application configurations
app.set('view engine', 'hbs')
console.log(process.cwd())
app.set('views', path.join(process.cwd(), '/templates/views'))
app.use(express.static(path.join(process.cwd(), '/public')))
hbs.registerPartials(path.join(process.cwd(), '/templates/partials'))

// JSON HTTP Endpoint
app.get('/ipweather', (req, res)=>{
    forecast((error, data)=>{
        if(error)
        {
            return res.send(error)
        }
        locationip().then(locip=>{
            console.log(locip.ip)
            return res.send({
                weathermap: data,
                locip
            })
        })
    })
})
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
        forecast.forecast(data.lat, data.long, (err, data)=>{
            if(err)
            {
               return res.send({Error: err})
            }
            console.log(data)
            res.send({
                data
            })
        })
    })
})

// Application routes
app.get('', (req, res)=>{
    res.render('index')
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
app.listen(port, ()=>{
    console.log('Server is running on port: ' + port)
})