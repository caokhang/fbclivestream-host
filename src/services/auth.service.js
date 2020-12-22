import axios from "axios";
import { Header } from "rsuite";

const API_URL = "http://fbclivestream.com:8080";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "/login", {
        username,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }


}

export default new AuthService();
