import http from "./http-common";

class LoginService {
  login(data) {
    return http.post("/signIn", data);
  }

  
}

export default new LoginService();