import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "table";

const TableData = ({ 
  className,
  children 
}) => {
  const componentClassnames = classNames(`${namespace}__data`, className);
  return <td className={componentClassnames}>{children}</td>;
};

TableData.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableData.defaultProps = {
  className: "",
};

export default TableData;