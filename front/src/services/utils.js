const HOME_API = "http://127.0.0.1:3001/api/homes";

const getHomes = async () => {
  return fetch(HOME_API).then(getJSON);
};

const getHomeById = async (id) => {
  return fetch(`${HOME_API}/${id}`).then(getJSON);
};

const getJSON = (response) => response.json();

export { getHomes, getHomeById };
