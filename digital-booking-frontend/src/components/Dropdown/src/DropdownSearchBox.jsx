import PropTypes from "prop-types";
import { useState } from "react";
import Spinner from "../../Spinner";
import { useDropdown } from "./context/DropdownContext";
import icons from "../../icons";

const namespace = "dropdown-search-box";

const DropdownSearchBox = ({ valueSearch }) => {
  const { Close, Search } = icons;
  const { setDropdownSearch, isLoading } = useDropdown();
  const [searchTerm, setSearchTerm] = useState(valueSearch || "");

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
          placeholder="Buscar ..."
          onChange={handleSearch}
        />
        {!isLoading && searchTerm && (
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
  valueSearch: PropTypes.string,
};

DropdownSearchBox.defaultProps = {
  valueSearch: "",
};

export default DropdownSearchBox;
