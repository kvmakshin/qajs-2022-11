// async function createUser(userName, password) {
//   const response = await fetch("https://bookstore.demoqa.com/Account/v1/User", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       Username: userName,
//       Password: password,
//     }),
//   });
//   return response;
// }

// async function generateToken(userName, password) {
//   const response = await fetch(
//     "https://bookstore.demoqa.com/Account/v1/GenerateToken",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         Username: userName,
//         Password: password,
//       }),
//     },
//   );
//   return response;
// }

// describe("5 API tests on bookstore service", () => {
//   test("Creating a user with error, login is already used", async () => {
//     const response = await createUser("first_user", "Paassword123!");
//     const data = await response.json();
//     expect(response.status).toBe(406);
//     expect(data.code).toBe("1204");
//     expect(data.message).toBe("User exists!");
//   });

//   test("Creating a user with error, password is not suitable", async () => {
//     const response = await createUser("second_user", "password");
//     const data = await response.json();
//     expect(response.status).toBe(400);
//     expect(data.code).toBe("1300");
//     expect(data.message).toBe(
//       "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.",
//     );
//   });

//   test("Successfully creating a user", async () => {
//     const response = await createUser("third_user", "Password123!");
//     const data = await response.json();
//     expect(response.status).toBe(201);
//     expect(data.username).toBe("third_user");
//   });

//   test("Generating token with error", async () => {
//     const response = await generateToken("first_user", "123456");
//     const data = await response.json();
//     expect(response.status).toBe(200);
//     expect(data.status).toBe("Failed");
//     expect(data.result).toBe("User authorization failed.");
//   });

//   test("Successfully generating token", async () => {
//     const response = await generateToken("third_user", "Password123!");
//     const data = await response.json();
//     expect(response.status).toBe(200);
//     expect(data.status).toBe("Success");
//     expect(data.result).toBe("User authorized successfully.");
//   });
// });
