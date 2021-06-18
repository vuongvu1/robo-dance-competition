export const BASE_URL = process.env.REACT_APP_API_URL;

async function basePost(url: string, data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function baseFetch(url: string) {
  const response = await fetch(url);
  return response.json();
}

export const fetchRobots = () => baseFetch(`${BASE_URL}/robots`);

export const fetchResults = () => baseFetch(`${BASE_URL}/danceoffs`);

export const postDanceResult = (data: Record<string, any>) =>
  basePost(`${BASE_URL}/danceoffs`, data);
