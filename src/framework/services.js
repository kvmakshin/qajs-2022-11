import supertest from "supertest";
// import vikunjaConfig from "./config";
import bookstoreConfig from "./config";
const { url } = bookstoreConfig;
// const { vikunjaUrl } = vikunjaConfig;
// let token = "";

// const user = {
//   login: (payload) => {
//     return supertest(vikunjaUrl)
//       .post("/api/v1/login")
//       .set("Accept", "application/json")
//       .send(payload);
//   },

//   async getAuthToken() {
//     const payload = vikunjaConfig.credentials;
//     const res = await user.login(payload);
//     return res.body.token;
//   },

//   async getAuthTokenInCache() {
//     token = await this.getAuthToken();
//     return token;
//   },

//   user: (token) => {
//     return supertest(vikunjaUrl)
//       .get("/api/v1/user")
//       .set("Accept", "application/json")
//       .set("Authorization", `Bearer ${token}`);
//   },
// };
// export default user;

const bookController = {
  createBook: (payload) => {
    return supertest(url)
      .post("/BookStore/v1/Books")
      .set("Content-Type", "application/json")
      .send(payload);
  },

  updateBook: (isbn, payload) => {
    return supertest(url)
      .put(`/BookStore/v1/Books/${isbn}`)
      .set("Content-Type", "application/json")
      .send(payload);
  },

  getBookInfo: (isbn) => {
    return supertest(url).get("/BookStore/v1/Book").query({ ISBN: isbn });
  },

  deleteBook: (isbn) => {
    return supertest(url).delete("/BookStore/v1/Book").query({ ISBN: isbn });
  },
};

export default bookController;
