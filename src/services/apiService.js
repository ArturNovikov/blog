const BASE_URL = 'https://blog.kata.academy/api/';

class ApiService {
  async getGlobalArticles(pageNumber = 1) {
    const token = localStorage.getItem('token');
    const offset = (pageNumber - 1) * 20;
    try {
      if (!token) {
        const response = await fetch(`${BASE_URL}/articles?offset=${offset}`);
        const data = await response.json();
        return data;
      } else {
        const response = await fetch(`${BASE_URL}/articles?offset=${offset}`, {
          method: 'GET',
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        return data;
      }
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

      return data;
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

      if (!response.ok) {
        throw {
          error: data,
          status: response.status,
        };
      }
      return data;
    } catch (error) {
      console.error(`Server responded with a status: ${error.message}`);
      throw error;
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

      if (!response.ok) {
        throw {
          error: data,
          status: response.status,
        };
      }
      return data;
    } catch (error) {
      console.error(`Server responded with a status: ${error.message}`);
      throw error;
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

  async postNewArticle(resultData) {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ article: resultData }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Post article error: ', error.message);
    }
  }

  async deleteArticle(deleteData) {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${BASE_URL}/articles/${deleteData}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error deleting article: ${response.status}`);
      }
      return true;
    } catch (error) {
      console.error('Error in deleteArticle:', error.message);
      throw error;
    }
  }

  async updateAnArticle(updateArticleData, slug) {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${BASE_URL}/articles/${slug}`, {
        method: 'PUT',
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ article: updateArticleData }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Update article error: ', error);
    }
  }

  async toggleFavoriteArticle(slug) {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication token is not available.');
    }
    try {
      const responseForAuth = await fetch(`${BASE_URL}/articles/${slug}`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (!responseForAuth.ok) {
        throw new Error(`Error in response with status: ${responseForAuth.status}`);
      }
      const dataForAuth = await responseForAuth.json();
      if (!dataForAuth || !dataForAuth.article) {
        throw new Error('Article data is not available in the response.');
      }
      const method = dataForAuth.article.favorited ? 'DELETE' : 'POST';
      const response = await fetch(`${BASE_URL}/articles/${slug}/favorite`, {
        method,
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error favoriting article with status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error toggling article favorite status:', error);
      throw error;
    }
  }
}

export default ApiService;
