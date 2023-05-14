import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "card";

const CardBody = ({ 
  className, 
  children 
}) => {
  const componentClassnames = classNames(`${namespace}__body`, className);
  return <div className={componentClassnames}>{children}</div>;
};

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardBody.defaultProps = {
  className: "",
};

export default CardBody;
