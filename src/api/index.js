import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
      const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key': '376afcb7c0mshc5ff4acc5b4f064p141b4cjsn5d070d87f13d',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });
      return (data?.filter((place) => place.name && place.num_reviews > 0));
  } catch (error) {
    console.log(error);
  }
}