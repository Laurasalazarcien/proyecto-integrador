import PropTypes from 'prop-types';
import classNames from 'classnames';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const namespace = 'footer';

const Footer = ({ className }) => {
  const componentClassnames = classNames(namespace, className);

  return (
    <footer className={componentClassnames}>
      <div className={`${namespace}__left`}>
        <img className={`${namespace}__logo`} src="logo.png" alt="Logo de la empresa" />
        <div className={`${namespace}__info`}>
          <span className={`${namespace}__year`}>{new Date().getFullYear()}</span>
          <span className={`${namespace}__copy`}>&copy; DigitalBooking. Todos los derechos reservados.</span>
        </div>
      </div>
      <div className={`${namespace}__right`}>
        <a href="#" className={`${namespace}__icon`}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className={`${namespace}__icon`}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className={`${namespace}__icon`}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
