import axios from 'axios';

export function axiosWithAuth () {
  const token = localStorage.getItem('token');

  return axios.create({
    // baseURL: 'https://lambda-mud-test.herokuapp.com/',
    baseURL: 'https://django-unchained-mud-staging.herokuapp.com/',
    // baseURL: process.env.REACT_APP_URL,
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

export function axiosNoAuth() {
    return axios.create({
			// baseURL: 'https://lambda-mud-test.herokuapp.com/',
			baseURL: "https://django-unchained-mud-staging.herokuapp.com/",
			// baseURL: process.env.REACT_APP_URL,
		});
}

export default axiosWithAuth
