/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import Container from "../../../components/Container";
import { Title, Text } from "../../../components/Typography";
import Table, {
  TableHead,
  TableHeading,
  TableBody,
  TableRow,
  TableData,
} from "../../../components/Table";
import Form from "../../../components/Form";
import {
  Text as TextInput,
  Numeric as NumericInput,
  TextArea,
} from "../../../components/TextField";
import Card, { CardHeader, CardBody } from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import ImageLoader from "../../../components/ImageLoader";
import Pagination from "../../../components/Pagination";
import Modal from "../../../components/Modal";
import NavMenu from "../../../components/Separator";
import icons from "../../../components/icons";

import {
  productsListMock,
  categoriesMock,
  categoriesDropdownMock,
  brandsDropdownMock,
} from "../../../mocks/mocks";
import { useMobile } from "../../../hooks/useMobile";
import List, { ListItem } from "../../../components/List";
import Separator from "../../../components/Separator";

const namespace = "admin-page";

const AddProduct = ({ title, className }) => {
  const isMobile = useMobile();
  const { MusicNote, PeopleFill, TagsFill, CalendarFill } = icons;
  const [openModal, setModalVisibility] = useState(false);
  const componentClassnames = classNames(namespace, className);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setModalVisibility(true);
  };

  const handleCloseModal = () => {
    setModalVisibility(false);
  };

  const handleDeleteProduct = () => {
    // Swal.fire("Eliminar producto", "¿Estás seguro de eliminar este producto?", "warning");
    Swal.fire({
      title: "Eliminar producto",
      text: "¿Estás seguro de eliminar este producto?",
      icon: "error",
      showCancelButton: true,
    }).then((resp) => {
      if (resp.isConfirmed) {
        console.log("Delete product ...");
      }
    });
  };

  return (
    <Container className={componentClassnames}>
      <Container className={`${namespace}__menu`}>
        <Container element="nav" className={`${namespace}__aside`}>
          <Title
            size="xl"
            element="h2"
            color="white"
            weight="bold"
            padding="20"
            alignment="center"
            className={`${namespace}__aside-text`}
          >
            DB{" "}
            <Text size="xl" element="span" marginLeft="4">
              Admin
            </Text>
          </Title>
          <Separator marginBottom="24" />
          <List rounded={false} showBorder={false}>
            <ListItem>
              <MusicNote />
              <Text>Instrumentos</Text>
            </ListItem>
            <ListItem>
              <PeopleFill />
              <Text>Usuarios</Text>
            </ListItem>
            <ListItem>
              <TagsFill />
              <Text>Categorías</Text>
            </ListItem>
            <ListItem>
              <CalendarFill/>
              <Text>Reservas</Text>
            </ListItem>
          </List>
        </Container>
      </Container>
      <Container className={`${namespace}__table`}>Table</Container>
    </Container>
  );
};

AddProduct.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

AddProduct.defaultProps = {
  title: "",
  className: "",
};

export default AddProduct;
