import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "detail-page";

const Detail = ({ 
  title, 
  className 
}) => {
  const componentClassnames = classNames(namespace, className);

  return (
    <div className={componentClassnames}>
      <p>{title}</p>
    </div>
  );
};

Detail.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Detail.defaultProps = {
  title: "Detail page",
  className: "",
};

export default Detail;
