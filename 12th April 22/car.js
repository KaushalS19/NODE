const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://marketcheck-cars-search-v1.p.rapidapi.com/search',
  headers: {
    'X-RapidAPI-Host': 'marketcheck-cars-search-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '993d681e51mshf76c754719a6dacp1220f6jsn8a2d642d6aeb'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});