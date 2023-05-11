import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "home-page";

const Home = ({ 
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

Home.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Home.defaultProps = {
  title: "Home page",
  className: "",
};

export default Home;
