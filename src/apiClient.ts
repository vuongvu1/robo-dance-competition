export const BASE_URL = process.env.REACT_APP_API_URL;

const baseFetch = (url: string) =>
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });

export const fetchRobots = () => baseFetch(`${BASE_URL}/robots`);
