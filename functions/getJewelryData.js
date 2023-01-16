const axios = require('axios')

exports.handler = async function(event, context) {

    try {
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
        }

        const { data } = await axios.request(options)
    
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }

        
    } catch (error) {
        const { status, statusText, headers, data } = error.response
        return {
            statusCode: status,
            body: JSON.stringify({status, statusText, headers, data})
        }
    }
}