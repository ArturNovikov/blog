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

      if (!response.ok) {
        throw {
          error: data,
          status: response.status,
        };
      }

      return {
        data: data,
        status: response.status,
      };
    } catch (error) {
      console.error(`Server responded with a status: ${error}`);
      throw error;
    }
  }

  async loginUser(loginData) {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: loginData }),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(`Server responded with a status: ${error.message}`);
    }
  }

  async updateUser(updateData) {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${BASE_URL}/user`, {
        method: 'PUT',
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: updateData }),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(`Server responded with a status: ${error.message}`);
    }
  }

  async fetchCurrentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    try {
      const response = await fetch(`${BASE_URL}/user`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching current user: ${error.message}`);
    }
  }
}

export default ApiService;
