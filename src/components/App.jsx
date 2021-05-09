import { useEffect, useState } from "react";
import CardBook from "./CardBook";
import SearchInput from "./SearchInput";
import SelectCategory from "./SelectCategory";
const api_key = "api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j";

const App = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState();
  const [book, setBook] = useState("");

  useEffect(() => {
    const url = `https://api.nytimes.com/svc/books/v3/lists/names.json?${api_key}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        let data = res.results.slice(0, 10);
        setCategoryList(data);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleKeyDown = e => {
    if (e.code === "Enter") {
      let url = `https://api.nytimes.com/svc/books/v3/lists.json?list=${category}&${api_key}`;
      fetch(url)
        .then(res => res.json())
        .then(res => {
          res.results.forEach(b => {
            if (b.book_details[0].title === book.toUpperCase()) {
              return console.log(b.book_details[0]);
            }
          });
        });
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <SelectCategory categoryList={categoryList} setCategory={setCategory} />
        <SearchInput book={book} setBook={setBook} category={category} />
      </form>
      <div className="row justify-content-md-center">
        <CardBook />
      </div>
    </div>
  );
};

export default App;
