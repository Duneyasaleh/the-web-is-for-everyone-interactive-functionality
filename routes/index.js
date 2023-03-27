import * as dotenv from 'dotenv'
import express from 'express'

import { fetchJson } from '../helpers/fetchWrapper.js'

dotenv.config()

const index = express.Router()

// Maak een route voor de index
index.get('/', (request, response) => {
    fetchJson(process.env.API_URL).then((data) => {
      response.render('index', data)
      })
     
     })


export default index