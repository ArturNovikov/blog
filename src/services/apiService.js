const BASE_URL = 'https://blog.kata.academy/api/';

class ApiService {
  async getGlobalArticles(pageNumber = 1) {
    try {
      const response = await fetch(`${BASE_URL}/articles?page=${pageNumber}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Server responded with a status: ${error.message}`);
    }
  }
}

export default ApiService;
