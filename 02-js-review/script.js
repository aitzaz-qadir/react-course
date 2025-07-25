const data = [
	{
		id: 1,
		title: "The Lord of the Rings",
		publicationDate: "1954-07-29",
		author: "J. R. R. Tolkien",
		genres: [
			"fantasy",
			"high-fantasy",
			"adventure",
			"fiction",
			"novels",
			"literature",
		],
		hasMovieAdaptation: true,
		pages: 1216,
		translations: {
			spanish: "El señor de los anillos",
			chinese: "魔戒",
			french: "Le Seigneur des anneaux",
		},
		reviews: {
			goodreads: {
				rating: 4.52,
				ratingsCount: 630994,
				reviewsCount: 13417,
			},
			librarything: {
				rating: 4.53,
				ratingsCount: 47166,
				reviewsCount: 452,
			},
		},
	},
	{
		id: 2,
		title: "The Cyberiad",
		publicationDate: "1965-01-01",
		author: "Stanislaw Lem",
		genres: [
			"science fiction",
			"humor",
			"speculative fiction",
			"short stories",
			"fantasy",
		],
		hasMovieAdaptation: false,
		pages: 295,
		translations: {},
		reviews: {
			goodreads: {
				rating: 4.16,
				ratingsCount: 11663,
				reviewsCount: 812,
			},
			librarything: {
				rating: 4.13,
				ratingsCount: 2434,
				reviewsCount: 0,
			},
		},
	},
	{
		id: 3,
		title: "Dune",
		publicationDate: "1965-01-01",
		author: "Frank Herbert",
		genres: ["science fiction", "novel", "adventure"],
		hasMovieAdaptation: true,
		pages: 658,
		translations: {
			spanish: "",
		},
		reviews: {
			goodreads: {
				rating: 4.25,
				ratingsCount: 1142893,
				reviewsCount: 49701,
			},
		},
	},
	{
		id: 4,
		title: "Harry Potter and the Philosopher's Stone",
		publicationDate: "1997-06-26",
		author: "J. K. Rowling",
		genres: ["fantasy", "adventure"],
		hasMovieAdaptation: true,
		pages: 223,
		translations: {
			spanish: "Harry Potter y la piedra filosofal",
			korean: "해리 포터와 마법사의 돌",
			bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
			portuguese: "Harry Potter e a Pedra Filosofal",
		},
		reviews: {
			goodreads: {
				rating: 4.47,
				ratingsCount: 8910059,
				reviewsCount: 140625,
			},
			librarything: {
				rating: 4.29,
				ratingsCount: 120941,
				reviewsCount: 1960,
			},
		},
	},
	{
		id: 5,
		title: "A Game of Thrones",
		publicationDate: "1996-08-01",
		author: "George R. R. Martin",
		genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
		hasMovieAdaptation: true,
		pages: 835,
		translations: {
			korean: "왕좌의 게임",
			polish: "Gra o tron",
			portuguese: "A Guerra dos Tronos",
			spanish: "Juego de tronos",
		},
		reviews: {
			goodreads: {
				rating: 4.44,
				ratingsCount: 2295233,
				reviewsCount: 59058,
			},
			librarything: {
				rating: 4.36,
				ratingsCount: 38358,
				reviewsCount: 1095,
			},
		},
	},
];

function getBooks() {
	return data;
}

function getBook(id) {
	return data.find((d) => d.id === id);
}

// Destructuring
const book = getBook(2);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
	book;

// Rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// Spread operator
const newGenres = [...genres, "epic fantasy"];
newGenres;

// Adding and Overriding properties
// Note: The order matters, overriding first and then spreading will reset the properties
const updatedBook = {
	...book,
	// Adding a new property
	moviePublicationDate: "2001-12-19",
	// Overriding an existing property
	pages: 1210,
};
updatedBook;

// Function declaration
function getYear1(str) {
	return str.split("-")[0];
}

// Arrow function
const getYear2 = (str) => str.split("-")[0];

// Full arrow function
const getYear3 = (str) => {
	return str.split("-")[0];
};

// Template literals
const summary = `${title}, a ${pages}-page long book, written by ${author} and published in ${getYear2(
	publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted into a movie.`;
summary;

// Ternary operator
const pageRange = pages > 1000 ? "over a thousand" : "less then thousand";
pageRange;
console.log(`The book has ${pageRange} pages.`);

// Short circuiting
console.log(true && "Some string");
console.log(false && "Some string");

// Replace boolean with condition
// Can be used as print if the condition is truthy
console.log(hasMovieAdaptation && "This book has a movie adaptation.");

// falsy = 0, "", null, undefined
// truthy = "string", 1, [], {}, true

// Logical OR operator opposite of AND operator
console.log(true || "Some string");
console.log(false || "Some string");

// Replace boolean with condition
// Can be used as print if the condition is falsy
console.log(book.translations.spanish || "No translation available.");
console.log(book.reviews.librarything.reviewsCount || "No data available.");
// Nullish coalescing operator only replaces null or undefined
console.log(book.reviews.librarything.reviewsCount ?? "No data available.");
