//http://localhost:8888/.netlify/functions/1-hello    ---Local host URL



const items = require('../assets/data')


exports.handler = async (event,context,cb) => { 
    return {
        headers:{'Access-Control-Allow-Origin':'*'},
        statusCode:200,
        body: JSON.stringify(items),
           }
}

