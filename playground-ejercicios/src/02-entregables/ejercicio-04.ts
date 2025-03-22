console.log("************** DELIVERABLE 04 *********************");

type Books = {
  title: string;
  isRead: boolean;
};

function isBookRead(books: Books[], titleToSearch: string) {
  const book = books.find((libro) => libro.title === titleToSearch);
  return book ? book.isRead : false;
}

var books: Books[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
