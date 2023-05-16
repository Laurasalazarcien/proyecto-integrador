/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";
import Image from "../../Image";
import { Text } from "../../Typography";
import List, { ListItem } from "../../List";
import icons from "../../icons";
import logo from "../../../assets/icons/logo-no-background.svg";
import { useMobile } from "../../../hooks/useMobile";

const namespace = "navbar";

const NavBar = ({
  height,
  imageLogo,
  menuOptions,
  onClickLogo,
  fixed,
  className,
}) => {
  const { BurguerMenu, Close } = icons;
  const isMobile = useMobile();

  const [openMenu, setOpenMenu] = useState(false);
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--${height}`]: height,
    [`${namespace}--fixed`]: fixed,
    [`${namespace}--open-menu`]: openMenu,
  });
  const navigate = useNavigate();

  const handleClickOption = (target) => {
    navigate(target);
  };

  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickLogo = () => {
    navigate("/");
    setOpenMenu(false);
  };

  return (
    <nav className={componentClassNames}>
      <Image
        source={logo}
        maxHeight={isMobile ? "40px" : "55px"}
        containerHeight={isMobile ? "40px" : "55px"}
        onClick={handleClickLogo}
        clickeable
      />
      <Button
        hierarchy="transparent"
        className={`${namespace}__toggle`}
        onClick={handleClickMenu}
      >
        {openMenu ? <Close /> : <BurguerMenu />}
      </Button>
      <List
        paddingSize="8"
        rounded={false}
        showBorder={false}
        itemsalignment="row"
        className={`${namespace}__menu`}
      >
        {/* {menuOptions &&
          menuOptions.map(({ name, target }) => (
            <ListItem 
              key={name} 
              onClick={() => handleClickOption(target)}
            >
              <Text size="s" element="span" transform="uppercase">
                {name}
              </Text>
            </ListItem>
          ))} */}
        {/* <ListItem>Products</ListItem> */}
        <ListItem>
          <Button
            onClick={() => {
              navigate("/register");
              setOpenMenu(false);
            }}
          >
            Crear cuenta
          </Button>
        </ListItem>
        <ListItem>
          <Button
            hierarchy="quiet"
            onClick={() => {
              navigate("/login");
              setOpenMenu(false);
            }}
          >
            Iniciar sesión
          </Button>
        </ListItem>
      </List>
    </nav>
  );
};

NavBar.propTypes = {
  height: PropTypes.string,
  imageLogo: PropTypes.string,
  menuOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      target: PropTypes.string,
    })
  ).isRequired,
  fixed: PropTypes.bool,
  onClickLogo: PropTypes.func,
  className: PropTypes.string,
};

NavBar.defaultProps = {
  className: "",
  fixed: false,
};

export default NavBar;
