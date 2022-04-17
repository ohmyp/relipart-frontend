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

  getCardsData() {
    return fetch(`${this._baseUrl}/posts`).then((res) =>
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
}

const api = new Api({
  baseUrl: "https://api.respawn-spb.ru",
});

export default api;
