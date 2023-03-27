import * as dotenv from 'dotenv'
import express from 'express'

import { fetchJson } from '../helpers/fetchWrapper.js'
import { postJson } from '../helpers/fetchWrapper.js'

dotenv.config()

const stekjes = express.Router()

stekjes.get('/aanmelden', function (request, response) {
    response.render('stekje-aanmelden')
})

stekjes.post('/', (request, response) =>{
  const stekjesUrl = process.env.API_URL + '/stekjes'
  postJson(stekjesUrl, request.body).then((data) => {
    // De waarden uit het formulier (niet de API)
    let newStekje = { ...request.body }
       // Stuur de gebruiker naar / als het gelukt is
       if (data.success) {
        response.redirect('/?memberPosted=true') // meegeven, message meegeven
  
        // Toon opnieuw het formulier (met waarden) als het niet gelukt is
      } else {
        const errormessage = `${data.message}: Mogelijk komt dit door de slug die al bestaat.`
        const newdata = { error: errormessage, values: newStekje }
        
        response.render('stekje-aanmelden', newdata)
    }

})
})

stekjes.get('/',(request, response) => {
    let stekjesUrl = process.env.API_URL+'/stekjes?orderBy=updatedAt&direction=ASC'
    fetchJson(stekjesUrl).then((data) => {
        response.render('stekjes',data)
        data.stekjes.map((stekje)=>{
            // console.log(stekje.fotos[0].original)
        })
    })
    
})

stekjes.get('/registreren', function (request, response) {
    response.render('stekje-registreren')
 })


stekjes.get('/:id', (request, response) => {
    let id = request.params.id
    let stekjeUrl = process.env.API_URL +'/stekjes?id='+ id
        fetchJson(stekjeUrl).then((data) => {
        response.render('stekje', data)
    })

})



  export default stekjes