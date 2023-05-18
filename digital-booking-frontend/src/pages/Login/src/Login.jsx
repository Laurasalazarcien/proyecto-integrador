import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "login-page";

const Login = ({ 
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

Login.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Login.defaultProps = {
  title: "Login page",
  className: "",
};

export default Login;
