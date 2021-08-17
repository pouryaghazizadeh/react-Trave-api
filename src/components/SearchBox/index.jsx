import { Search } from "./view";
function SearchBox() {
  return (
    <div>
      <Search
        type="input"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBox;
