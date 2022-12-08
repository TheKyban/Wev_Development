const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20a4f232c2msh8e2e6ab17df0b98p1cec88jsna876dc0cf5f9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Muzaffarpur', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));