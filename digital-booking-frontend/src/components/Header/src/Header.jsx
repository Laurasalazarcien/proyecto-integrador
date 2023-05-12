import React from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';
import logo from '/assets/LogoHeader.svg'
import { useNavigate } from 'react-router-dom';

const namespace = 'header';

export const Header = ({
	slogan,
	className
}) => {
	const componentClassnames = classNames(namespace, className);
	const navigate = useNavigate();

	const handleLogoClick = () => {
		navigate('/');
	}

	return (
		<header className={componentClassnames}>
			<div className={`${namespace}__logo`}>
				<img src={logo} alt="logo" onClick={() => handleLogoClick()} />
				<span className='__slogan'>{slogan}</span>
			</div>
			<div className={`${namespace}__user-actions`}>
				<button className={`${namespace}__button create-account`}>Crear cuenta</button>
				<button className={`${namespace}__button login`}>Iniciar sesión</button>
			</div>
		</header>
	)
}

Header.propTypes = {
	slogan: PropTypes.string,
	className: PropTypes.string,
};

Header.defaultProps = {
	slogan: "Example component",
	className: "",
};
