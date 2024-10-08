const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input type="text" value={value} onChange={(event) => onFilter(event.target.value)} />
    </div>
  );
};

export default SearchBox;
