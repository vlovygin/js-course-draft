const rp = require('request-promise')

module.exports = async function(city = '') {
    const KEY = 'a3d70f710d9115d25818e42c141e1c2a'
    const uri = 'https://api.openweathermap.org/data/2.5/weather'

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        },
        json: true
    }

    try {
        const data = await rp(options)
        const celsius = (data.main.temp - 32) * 5/9

        return {
            weather: `${data.name}: ${celsius.toFixed()}`,
            error: null
        }
    } catch(error) {
        return {
            error: error.error.message
        }
    }
}