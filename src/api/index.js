import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
      const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          currency: 'INR'
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_API_KEY,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });
      return (data?.filter((place) => place.name && place.num_reviews > 0));
  } catch (error) {
    console.log(error);
  }
}

export const getWeatherData = async (lat, lon) => {
  try {
    const{ data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    return(data);
  } catch (error) {
    console.log(error);
  }
}