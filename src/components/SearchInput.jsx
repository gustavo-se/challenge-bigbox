import { api_key } from "./App";
import { useState } from "react";
const SearchInput = ({ category, setBookDetails }) => {
  const [book, setBook] = useState("");

  const handleChange = e => {
    setBook(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.code === "Enter") {
      let url = `https://api.nytimes.com/svc/books/v3/lists.json?list=${category}&${api_key}`;
      fetch(url)
        .then(res => res.json())
        .then(res => {
          const bookDetails = res.results.find(b => {
            return b.book_details[0].title === book.toUpperCase();
          });

          setBookDetails(bookDetails);
        });
    }
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-12 mt-3">
        <label htmlFor="inputText" className="form-label">
          Search by title
        </label>
        <input
          type="text"
          id="inputText"
          className="form-control"
          aria-describedby="searchHelpBlock"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={book}
          disabled={!category || category === "Select a category of books"}
        />
        {!category || category === "Select a category of books" ? (
          <div id="searchHelpBlock" className="form-text">
            First choose a category
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SearchInput;
