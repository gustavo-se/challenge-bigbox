const CardBook = ({ bookDetails }) => {
  console.log(bookDetails);
  return (
    <>
      {bookDetails ? (
        <div className="card col-md-4 mt-5">
          <a
            className="anchor"
            href={`https://www.google.com/search?q=${bookDetails.book_details[0].title.toLowerCase()}+${
              bookDetails.book_details[0].author
            }`}
            target="_blanck"
          >
            <div className="card-body">
              <h5 className="card-title">
                {bookDetails.book_details[0].title}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {bookDetails.book_details[0].author}
              </h6>
              <p className="card-text">
                {bookDetails.book_details[0].description}
              </p>
            </div>
          </a>
        </div>
      ) : (
        <p className="fst-italic mt-3">
          We are sorry, we couldn't find that book
        </p>
      )}
    </>
  );
};

export default CardBook;
