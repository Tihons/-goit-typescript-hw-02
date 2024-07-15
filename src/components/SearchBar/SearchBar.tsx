import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";

interface SearchBarProps {
  onSubmit: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(searchQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <header className={css.searchHeader}>
        <>
          <form className={css.searchForm} onSubmit={handleSubmit}>
            <div className={css.searchContainer}>
              <button type="submit" className={css.btnForm}>
                <IoIosSearch className={css.searchIcon} />
              </button>

              <input
                className={css.searchInput}
                type="text"
                name="searchQuery"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={searchQuery}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </>
      </header>
    </>
  );
};

export default SearchBar;