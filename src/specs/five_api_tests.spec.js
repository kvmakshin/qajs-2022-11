import supertest from "supertest";
import user from "../framework/services";
import vikunjaConfig from "../framework/config";

describe("user", () => {
  describe("POST /api/v1/login", () => {
    test("Метод должен существовать", async () => {
      const res = await supertest("https://try.vikunja.io")
        .post("/api/v1/login")
        .send({});

      expect(res.status).not.toEqual(404);
    });

    test("Авторизация должна проходить успешно с правильным логином и паролем", async () => {
      const res = await user.login(vikunjaConfig.credentials);
      expect(res.status).toEqual(200);
      expect(typeof res.body.token).toEqual("string");
    });

    test("Авторизация должна возвращать статус с кодом ошибки если логин неверный", async () => {
      const res = await user.login({ username: "demo4", password: "demo" });
      expect(res.status).toEqual(412);
      expect(res.body.code).toEqual(1011);
    });

    test("Авторизация должна возвращать статус с кодом ошибки если пароль неверный", async () => {
      const res = await user.login({ username: "demo", password: "demo3" });
      expect(res.status).toEqual(412);
      expect(res.body.code).toEqual(1011);
    });
  });

  describe("GET /api/v1/user", () => {
    let token;

    beforeAll(async () => {
      token = await user.getAuthTokenInCache();
    });

    test("Получение информации о пользователе должно проходить успешно с действительным токеном", async () => {
      const res = await user.user(token);
      expect(res.status).toEqual(200);
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty(
        "username",
        vikunjaConfig.credentials.username,
      );
    });

    test("Попытка доступа к информации о пользователе без токена должна возвращать статус с кодом ошибки", async () => {
      const res = await supertest(vikunjaConfig.url)
        .get("/api/v1/user")
        .set("Accept", "application/json");

      expect(res.status).toEqual(401);
    });
  });
});
