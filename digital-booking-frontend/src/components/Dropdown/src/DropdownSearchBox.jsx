import PropTypes from "prop-types";
import { useState } from "react";
import Spinner from "../../Spinner";
import { useDropdown } from "./context/DropdownContext";
import icons from "../../icons";

const namespace = "dropdown-search-box";

const DropdownSearchBox = ({ searchValue, searchPlaceholder }) => {
  const { Close, Search } = icons;
  const { setDropdownSearch, isLoading } = useDropdown();
  const [searchTerm, setSearchTerm] = useState(searchValue || "");

  const moveUpScroll = () => {
    const divScroll = document.querySelector(
      ".metrics-variant-dropdown-groups"
    );
    divScroll.scrollTop = 0;
  };

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
    setDropdownSearch(target.value !== "");
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    setDropdownSearch(false);
    moveUpScroll();
  };

  return (
    <div className={namespace}>
      <div className={`${namespace}__container`}>
        <span className={`${namespace}__search-icon`}>
          <Search />
        </span>
        <input
          type="text"
          value={searchTerm}
          className={`${namespace}__input`}
          placeholder={searchPlaceholder}
          onChange={handleSearch}
        />
        {searchTerm && (
          <button
            tabIndex="0"
            aria-hidden="true"
            className={`${namespace}__close-button`}
            onClick={handleResetSearch}
          >
            <Close />
          </button>
        )}
        {isLoading && <Spinner size="xsmall" />}
      </div>
    </div>
  );
};

DropdownSearchBox.propTypes = {
  searchValue: PropTypes.string,
  searchPlaceholder: PropTypes.string,
};

DropdownSearchBox.defaultProps = {
  searchValue: "",
};

export default DropdownSearchBox;
