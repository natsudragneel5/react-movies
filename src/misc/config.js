const API_BASE_URL = 'https://movie-task.vercel.app/api';

export async function apiGet(queryString) {
  const response = fetch(`${API_BASE_URL}${queryString}`).then(r => r.json());
  return response;
}
