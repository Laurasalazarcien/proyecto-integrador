import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "card";

const CardHeader = ({ 
  title,
  borderHeader, 
  className, 
  children 
}) => {
  const componentClassnames = classNames(`${namespace}__header`, className, {
    [`${namespace}__header--border`]: borderHeader,
  });

  return (
    <div className={componentClassnames}>
      { title && <h1 className={`${namespace}__title`}>{title}</h1> }
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  borderHeader: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

CardHeader.defaultProps = {
  title: "",
  className: "",
  borderHeader: true,
};

export default CardHeader;
