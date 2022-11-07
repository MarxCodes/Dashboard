const OPEN_WEATHER_API_KEY = 'd0a10211ea3d36b0a6423a104782130e';


export async function getNews(newsId: string) {

}

export async function getWeather(latitude: string, longitude: string) {
  const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}}`;
  const response = await fetch(openWeatherURL)
  if (response.ok) return response.json();
}

export async function getSport() {

}

export async function addPhotos() {

}

export async function addTasks() {

}

export async function deleteTasks() {
}

export async function editTasks() {

}


