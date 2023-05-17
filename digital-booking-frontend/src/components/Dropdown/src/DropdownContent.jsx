import PropTypes from "prop-types";
import DropdownSearchBox from "./DropdownSearchBox";
import DropdownItem from "./DropdownItem";
import { useDropdown } from "./context/DropdownContext";

const namespace = "dropdown";

const DropdownContent = ({ searchPlaceholder }) => {
  const { dropdownOptions, dropdownValue } = useDropdown();

  return (
    <div className={`${namespace}__content`}>
      {/* {dropdownOptions.lenght >= 10 && <DropdownSearchBox />} */}
      <DropdownSearchBox searchPlaceholder={searchPlaceholder} />
      <div className={`${namespace}__list-container`}>
        <ul className={`${namespace}__list`}>
          {dropdownOptions.map((option) => (
            <DropdownItem
              key={option.id}
              selected={option.value === dropdownValue.actual}
              {...option}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

DropdownContent.propTypes = {
  searchPlaceholder: PropTypes.string,
};

export default DropdownContent;
