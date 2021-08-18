import http from "./Http-common";

class ExpertService {
  getAll() {
    return http.get("/experts/all");
  }

  get(expertId) {
    return http.get(`/experts/${expertId}`);
  }

  create(data) {
    return http.post("/experts/add", data);
  }

  update(expertId, data) {
    return http.put(`/expers/${expertId}/edit`, data);
  }

  delete(expertId) {
    return http.delete(`/experts/${expertId}/delete`);
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new ExpertService();