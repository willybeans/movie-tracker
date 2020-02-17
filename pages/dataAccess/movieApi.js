const axios = require('axios');
const apiKey = '4bb16985';

export async function getMovies(searchQuery) {
return axios.get('http://www.omdbapi.com/?apikey=' + apiKey + '&' + searchQuery)
}
