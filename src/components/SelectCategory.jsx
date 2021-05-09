const SelectCategory = ({ categoryList, setCategory }) => {
  const handleSelect = e => {
    setCategory(e.target.value);
  };
  return (
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-4 ">
        <select
          className="form-select"
          aria-label="Books Categories"
          onChange={handleSelect}
        >
          <option>Select a category of books</option>
          {categoryList.map((c, index) => (
            <option key={index} value={c.list_name_encoded}>
              {c.list_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectCategory;
