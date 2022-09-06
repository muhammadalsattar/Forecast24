import express from 'express'
import path from 'path'
import hbs from 'hbs'
import bodyParser from 'body-parser'
import cors from 'cors'
import {getGeolocation, getWeather}from './utils/utils.js'

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = process.env.PORT || 4000

// Setting application configurations
app.set('view engine', 'hbs')
app.set('views', path.join(process.cwd(), '/templates/views'))
app.use(express.static(path.join(process.cwd(), '/public')))
hbs.registerPartials(path.join(process.cwd(), '/templates/partials'))

app.get('/', (req, res)=>{
    res.render('index.hbs')
})

app.post('/weather', async (req, res) => {
    let result;
    if(req.body.query){
        try
        {
        const geolocation = await getGeolocation(req.body.query)
        result = await getWeather(geolocation)
        }
        catch(e){
            res.send({error: e})
        }
        res.send(result)
    } else{
        result = await getWeather(req.body.geolocation)
        res.send(result)
    }
})


// Starting server
app.listen(port, ()=>{
    console.log('Server is running on port: ' + port)
})