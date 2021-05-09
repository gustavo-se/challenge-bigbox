import { useEffect, useState } from "react";
import CardBook from "./CardBook";
import SearchInput from "./SearchInput";
import SelectCategory from "./SelectCategory";
import "../styles/main.css";
export const api_key = "api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j";

const App = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState();
  const [bookDetails, setBookDetails] = useState("");

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
  return (
    <>
      <header>
        <div className="header"></div>
      </header>
      <div className="container">
        <div class="card col-12 col-md-9 mx-auto">
          <div class="heading">
            <h4 class="title">NYTimes Books</h4>
          </div>
          <div class="content">
            <form onSubmit={handleSubmit}>
              <SelectCategory
                categoryList={categoryList}
                setCategory={setCategory}
              />
              <SearchInput
                category={category}
                setBookDetails={setBookDetails}
              />
            </form>
            <div className="row justify-content-md-center">
              {bookDetails === "" ? "" : <CardBook bookDetails={bookDetails} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
