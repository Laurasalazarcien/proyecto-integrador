import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";
import Image from "../../Image";
import { Text } from "../../Typography";
import List, { ListItem } from "../../List";
import icons from "../../icons";
import logo from "../../../assets/icons/LogoHeader.svg";

const namespace = "navbar";

const NavBar = ({ height, fixed, className }) => {
  const { BurguerMenu, Close } = icons;
  const [openMenu, setOpenMenu] = useState(false);
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--${height}`]: height,
    [`${namespace}--fixed`]: fixed,
    [`${namespace}--open-menu`]: openMenu,
  });
  const navigate = useNavigate();

  const handleClickImage = () => {
    navigate("/");
  };

  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className={componentClassNames}>
      <Image 
        source={logo} 
        onClick={handleClickImage} 
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
        paddingSize="12"
        rounded={false}
        showBorder={false}
        itemsalignment="row"
        className={`${namespace}__menu`}
      >
        <ListItem>
          <Text size="s" element="span" transform="uppercase">
            HOME
          </Text>
        </ListItem>
        <ListItem>
          <Text size="s" element="span" transform="uppercase">
            ABOUT
          </Text>
        </ListItem>
        <ListItem>
          <Text size="s" element="span" transform="uppercase">
            CONTACT
          </Text>
        </ListItem>
      </List>
    </nav>
  );
};

NavBar.propTypes = {
  height: PropTypes.string,
  fixed: PropTypes.bool,
  className: PropTypes.string,
};

NavBar.defaultProps = {
  className: "",
  fixed: false,
};

export default NavBar;
