const API_KEY = process.env.REACT_APP_CITY_API;

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9cdab1b206msh0f0387fffc13942p1dc787jsnf2140a2eb6a0',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
