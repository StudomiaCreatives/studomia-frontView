import http from "./http-common";

class StudentService {
  getAll() {
    return http.get("/students/all");
  }

  get(studentId) {
    return http.get(`/students/student/${student_id}`);
  }

  create(data) {
    return http.post("/students/add", data);
  }

  update(studentId, data) {
    return http.put(`/students/${studentId}/edit`, data);
  }

  delete(id) {
    return http.delete(`/students/student/${studentId}/delete`);
  }

  // deleteAll() {
  //   return http.delete(`/`);
  // }

  // findByTitle(title) {
  //   return http.get(`/tutorials?title=${title}`);
  // }
}

export default new StudentService();