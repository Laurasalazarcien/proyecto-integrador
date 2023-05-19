/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames";
import Swal from 'sweetalert2';
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
import Modal from "../../../components/Modal";
import icons from "../../../components/icons";

import {
  productsListMock,
  categoriesMock,
  categoriesDropdownMock,
  brandsDropdownMock,
} from "../../../mocks/mocks";
import { useMobile } from "../../../hooks/useMobile";

const namespace = "admin-page";

const AddProduct = ({ title, className }) => {
  const isMobile = useMobile();
  const { Trash, TrashPill, PencilPill, PencilSquare } = icons;
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
    }).then(resp => {
      if (resp.isConfirmed) {
        console.log('Delete product ...');
      }
    });
  }

  return (
    <div className={componentClassnames}>
      <Title size={isMobile ? "xl" : "xxl"} weight="light" marginBottom="8">
        Panel de administración
      </Title>
      <Text weight="light" marginBottom="16">
        Desde aqui vas a poder gestionar tus productos.
      </Text>
      <Button modifier="success" onClick={handleOpenModal}>
        Agregar producto
      </Button>
      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeading>#</TableHeading>
              <TableHeading>Image</TableHeading>
              <TableHeading>Name</TableHeading>
              <TableHeading>Description</TableHeading>
              <TableHeading>Stock</TableHeading>
              <TableHeading>Actions</TableHeading>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsListMock.map((product) => (
              <TableRow key={product.id}>
                <TableData>{product.id}</TableData>
                <TableData>
                  <Image
                    source={product.image}
                    maxHeight="50px"
                    paddingSize="0"
                  />
                </TableData>
                <TableData>{product.title}</TableData>
                <TableData>{product.description}</TableData>
                <TableData className="table__data--stock">
                  {product.stock}
                </TableData>
                <TableData className="table__data--actions">
                  <Button
                    paddingSize="0"
                    hierarchy="transparent"
                    onClick={handleOpenModal}
                  >
                    <PencilSquare />
                  </Button>
                  <Button
                    paddingSize="0"
                    hierarchy="transparent"
                    onClick={handleDeleteProduct}
                  >
                    <TrashPill />
                  </Button>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
      <Modal
        title="Agregar producto"
        isOpen={openModal}
        onCancel={handleCloseModal}
      >
        <Card shadow="none" paddingSize="0">
          <CardBody paddingSize="0">
            <Form shadow="none" paddingSize="0" onSubmit={() => {}}>
              <TextInput
                id="title"
                name="title"
                label="Title"
                value="Hola"
                placeholder="Enter the product title"
                onChange={() => {}}
                onBlur={() => {}}
                helperMessage=""
                modifier=""
              />
              <NumericInput
                id="stock"
                name="stock"
                label="Stock"
                value="Hola"
                placeholder="Enter the product stock"
                onChange={() => {}}
                onBlur={() => {}}
                helperMessage=""
                modifier=""
              />
              <TextArea
                id="descriptiom"
                name="description"
                label="Description"
                value=""
                placeholder="Enter the product description"
                onChange={() => {}}
                onBlur={() => {}}
                helperMessage=""
                modifier=""
              />
              <Dropdown
                id="category"
                name="category"
                label="Category"
                searchPlaceholder="Search a category"
                options={categoriesDropdownMock}
                modifier=""
                helperMessage=""
                selectedOption="3"
                onSelectOption={(option) => {
                  console.log("Option ---> ", option);
                }}
                fullWidth
              />
              <Dropdown
                id="brand"
                name="brand"
                label="Brand"
                searchPlaceholder="Search a brand"
                options={brandsDropdownMock}
                modifier=""
                helperMessage=""
                selectedOption="3"
                onSelectOption={(option) => {
                  console.log("Option ---> ", option);
                }}
                fullWidth
              />
              <ImageLoader
                id="image"
                name="image"
                label="Image"
                value=""
                placeholder="Enter the product image"
                onChange={() => {}}
                onBlur={() => {}}
                helperMessage=""
                modifier=""
              />
            </Form>
          </CardBody>
        </Card>
      </Modal>
    </div>
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
