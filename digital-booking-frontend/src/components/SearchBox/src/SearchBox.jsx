/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Container from "../../Container";
import Button from "../../Button";
import { Text as TextInput } from "../../TextField";

const namespace = "search-box";

const SearchBox = ({
  modifier,
  helperMessage,
  searchPlaceholder,
  defaultValue,
  onChange,
  onClick,
  className,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const componentClassnames = classNames(namespace, className);

  const handleChangeInput = ({ target }) => {
    const { value } = target;
    setInputValue(value);
    onChange(value);
  };

  const handleClickButton = () => {
    onClick(inputValue);
  };

  return (
    <Container className={componentClassnames}>
      <TextInput
        value={inputValue}
        placeholder={searchPlaceholder}
        onChange={handleChangeInput}
        helperMessage={helperMessage}
        modifier={modifier}
      />
      <Button onClick={handleClickButton}>Buscar</Button>
    </Container>
  );
};

SearchBox.propTypes = {
  modifier: PropTypes.string,
  helperMessage: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

SearchBox.defaultProps = {
  modifier: "",
  helperMessage: "",
  searchPlaceholder: "",
  defaultValue: "",
  className: "",
  onChange: () => {},
  onClick: () => {},
};

export default SearchBox;
