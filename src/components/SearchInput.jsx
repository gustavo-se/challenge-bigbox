const SearchInput = ({ book, setBook, category }) => {
  const handleChange = e => {
    setBook(e.target.value);
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-4 ">
        <label htmlFor="inputText" className="form-label">
          Search a Book
        </label>
        <input
          type="text"
          id="inputText"
          className="form-control"
          aria-describedby="searchHelpBlock"
          onChange={handleChange}
          value={book}
          disabled={!category || category === "Select a category of books"}
        />
        <div id="searchHelpBlock" className="form-text">
          First choose a category
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
