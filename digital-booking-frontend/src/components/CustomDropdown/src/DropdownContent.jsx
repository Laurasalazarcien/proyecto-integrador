import DropdownSearchBox from "./DropdownSearchBox";
import DropdownItem from "./DropdownItem";
import { useDropdown } from "./context/DropdownContext";

const namespace = "dropdown";

const DropdownContent = () => {
  const { dropdownOptions, dropdownValue } = useDropdown();

  return (
    <div className={`${namespace}__content`}>
      {dropdownOptions.lenght >= 10 && <DropdownSearchBox />}
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
  );
};

export default DropdownContent;
