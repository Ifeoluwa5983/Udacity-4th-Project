
var Axios = require('axios')


const jwksUrl = 'https://ifeoh.us.auth0.com/.well-known/jwks.json'
Axios.get(jwksUrl).then(function (response) {
    console.log(response.data.keys[0].x5c[0], 'response')
});

