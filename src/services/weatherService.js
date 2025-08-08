const API_KEY = 'dd4831d2b3e645ca86c31022250808';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

const show = async (city) => {
    try {
        const queryString = `&q=${city}` // allows us to search for the city the user inputs
        const res = await fetch(BASE_URL + queryString) // adds our search city on base URL and tries a GET request to the weather API

        // we need to convert the response to JSON
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }

}

// show('Thousand Oaks')
export {
    show, 
}