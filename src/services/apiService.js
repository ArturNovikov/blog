const BASE_URL = 'https://blog.kata.academy/api/';

class ApiService {
  async getGlobalArticles(pageNumber = 1) {
    const offset = (pageNumber - 1) * 20;
    try {
      const response = await fetch(`${BASE_URL}/articles?offset=${offset}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Server responded with a status: ${error.message}`);
    }
  }

  async registerUser(userData) {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: userData }),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(`Server responded with a status: ${error.message}`);
    }
  }
}

export default ApiService;
