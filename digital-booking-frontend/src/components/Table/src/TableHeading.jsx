import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "table";

const TableHaading = ({ 
  className,
  children 
}) => {
  const componentClassnames = classNames(`${namespace}__heading`, className);
  return <th className={componentClassnames}>{children}</th>;
};

TableHaading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableHaading.defaultProps = {
  className: "",
};

export default TableHaading;