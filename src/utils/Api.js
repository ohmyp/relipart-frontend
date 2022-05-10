class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getCardsData(shift) {
    return fetch(`${this._baseUrl}/posts/${shift}`).then((res) =>
      this._getResponseData(res)
    );
  }

  makeNewCardData(title, text, imageLink, description, date) {
    return fetch(`${this._baseUrl}/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: text,
        image: imageLink,
        description: description,
        date: date,
      }),
    }).then((res) => this._getResponseData(res));
  }

  deleteCardData(id){
    return fetch(`${this._baseUrl}/posts/${id}/delete`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    }).then((res) => this._getResponseData(res));
  }


  login(username, password){
    console.log(username, password)
    return fetch(`${this._baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    }).then((res) => this._getResponseData(res));
  }

}

const api = new Api({
  baseUrl: "https://api.respawn-spb.ru",
  // baseUrl: "http://localhost:3001",
});

export default api;
