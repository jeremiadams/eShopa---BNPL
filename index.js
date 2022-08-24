const PORT = 8080
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.listen(8080, () => console.log(`Server is Running on ${PORT}`))

app.get('/', (req,res) => {
    res.json('hi')
})

app.get('/apparel', (req,res) => {
    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://asos2.p.rapidapi.com/products/v2/list',
        params: {
            store: 'US',
            offset: '0',
            categoryId: '6993',
            limit: '48',
            country: 'US',
            sort: 'freshness',
            currency: 'USD',
            sizeSchema: 'US',
            lang: 'en-US'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    }

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    })
})

app.get('/shoes', (req,res) => {
    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://asos2.p.rapidapi.com/products/v2/list',
        params: {
            store: 'US',
            offset: '0',
            categoryId: '4172',
            limit: '48',
            country: 'US',
            sort: 'freshness',
            currency: 'USD',
            sizeSchema: 'US',
            lang: 'en-US'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    }

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    })
})

app.get('/jewelry', (req,res) => {
    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://asos2.p.rapidapi.com/products/v2/list',
        params: {
            store: 'US',
            offset: '0',
            categoryId: '5034',
            limit: '48',
            country: 'US',
            sort: 'freshness',
            currency: 'USD',
            sizeSchema: 'US',
            lang: 'en-US'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})

app.get('/cosmetics', (req,res) => {
    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://asos2.p.rapidapi.com/products/v2/list',
        params: {
            store: 'US',
            offset: '0',
            categoryId: '5020',
            limit: '48',
            country: 'US',
            sort: 'freshness',
            currency: 'USD',
            sizeSchema: 'US',
            lang: 'en-US'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})


