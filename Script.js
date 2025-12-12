const apiKey: "674ba29857887e2e5f096bba376930a9";
async function getWeather(){
cpnst city = document.getElementById('cityInput').ariaValueMax;
const resultDiv = document.getElementById('weatherResult');

    if(!city){
            resultDiv.innerHTML = "Please enter a city name,";
                return;


    }
    const url = "https:// api.openweathermap.org/data/2.5/weather?q=${city} & appid=${apiKey}&units=metric";

        try{
            const response = await fetch(url);
            if (!response.ok) throw new Error('City not found');
                const data = await response.json();

                        const temp= data.main.temp;
                            const description = data.weather[0].description;
                            const place = data.name;
                                resultDiv.innerHTML= '
                                    <h3> ${pace}</h3>
                                    <p>Temperature: <strong>${temp}</strong></strong></p>
                                    <p>Condition: ${description}</p>
                                ';
        }
        catch (error){
            resultDiv.innerHTML = '<span style="color:red;'> Error: $ {error.message}</span>';
        }

}