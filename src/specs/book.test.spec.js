import bookController from "../framework/services";
import bookstoreConfig from "../framework/config";

describe("Book API Tests", () => {
  let createdBookIsbn;

  test("Creating a book", async () => {
    const bookPayload = {
      userId: bookstoreConfig.userId,
      collectionOfIsbns: [
        {
          isbn: bookstoreConfig.isbn,
        },
      ],
    };
    const response = await bookController.createBook(bookPayload);
    expect(response.status).toBe(201);
    createdBookIsbn = response.body.books[0].isbn;
  });

  test("Updating a book", async () => {
    const updatePayload = {
      userId: bookstoreConfig.userId,
      isbn: createdBookIsbn,
      collectionOfIsbns: [
        {
          isbn: bookstoreConfig.isbn,
        },
      ],
    };
    const response = await bookController.updateBook(
      createdBookIsbn,
      updatePayload,
    );
    expect(response.status).toBe(200);
  });

  test("Getting book information", async () => {
    const response = await bookController.getBookInfo(createdBookIsbn);
    expect(response.status).toBe(200);
    expect(response.body.books[0].isbn).toBe(createdBookIsbn);
  }, 10000);

  test.each([{ isbn: "9781449325862" }, { isbn: "9781449331818" }])(
    "Deleting a book",
    async ({ isbn }) => {
      const response = await bookController.deleteBook(isbn);
      expect(response.status).toBe(204);
    },
  );
});
