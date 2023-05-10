import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "register-page";

const Register = ({ 
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

Register.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Register.defaultProps = {
  title: "Register page",
  className: "",
};

export default Register;
