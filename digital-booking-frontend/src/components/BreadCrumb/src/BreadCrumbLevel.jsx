import PropTypes from "prop-types";
import classNames from "classnames";
import icons from "../../icons";

const namespace = "breadcrumb";

const BreadCrumbLevel = ({ 
  text, 
  title, 
  href, 
  className, 
  onClick 
}) => {
  const { ChevronRight } = icons;
  const componentClassnames = classNames(`${namespace}__level`, className);

  if (href) {
    return (
      <ol title={title} className={componentClassnames}>
        <a href={href} className={`${namespace}__link`}>
          {text}
        </a>
        <div className={`${namespace}__chevron`}>
          <ChevronRight />
        </div>
      </ol>
    );
  }

  return (
    <ol title={title} className={componentClassnames} onClick={onClick}>
      <span className={`${namespace}__label`}>{text}</span>
    </ol>
  );
};

BreadCrumbLevel.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

BreadCrumbLevel.defaultProps = {
  className: "",
};

export default BreadCrumbLevel;
