import { create } from 'apisauce';
import { API_URL } from '../../config/env';
import * as API from '../../config/api';
// import AuthManager from '../../lib/AuthManager'

const api = create({ baseURL: API_URL });

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_USERS.replace(/{(page)}/, 2))
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUserDetail = (id) => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_USER.replace(/{(id)}/, id))
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
