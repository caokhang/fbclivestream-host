import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://fbclivestream.com:8080";

class UserService {
  getPublicContent() {
    return axios.get(API_URL);
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }


  getInfoUser() {
    return axios.get(API_URL  + "/profile", { headers: authHeader() });
  }


  getAllUser() {
    return axios.get(API_URL + "/user", { headers: authHeader() });
  }

  deleteUser(id) {
    return axios.delete(API_URL + "/user/" + id, { headers: authHeader() });
  }

  getUserById(id) {
    return axios.get(API_URL + '/user/' + id, { headers: authHeader() });
  }

  setUserById(id, data) {
    return axios.put(API_URL + '/' + id, data, { headers: authHeader() })
  }

  insertUser(data) {
    return axios.post(API_URL + '/user', data, { headers: authHeader() })
  }

  editUser(user) {
    return axios.put(API_URL + '/user/' + user.id, user, { headers: authHeader() })
  }

}

export default new UserService();
