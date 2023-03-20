import * as dotenv from 'dotenv'
import express from 'express'

import { fetchJson } from '../helpers/fetchWrapper.js'

dotenv.config()

const stekjes = express.Router()

stekjes.get('/', function (request, response) {
    let stekjesUrl = process.env.API_URL+'/stekjes'
    fetchJson(stekjesUrl).then((data) => {
        response.render('stekjes',data)
        data.stekjes.map((stekje)=>{
            console.log(stekje.fotos[0].original)
        })
    })
    
  })
  stekjes.get('/:id', function (request, response) {
    let id = request.params.id
    let stekjeUrl = process.env.API_URL +'/stekjes?id='+ id
     fetchJson(stekjeUrl).then((data) => {
      response.render('stekje', data)
       })
    
  })

  export default stekjes