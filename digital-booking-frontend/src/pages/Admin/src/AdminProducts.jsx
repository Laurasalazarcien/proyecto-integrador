/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames";
import Swal from "sweetalert2";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import Container from "../../../components/Container";
import Form from "../../../components/Form";
import Dropdown from "../../../components/Dropdown";
import FileLoader from "../../../components/FileUploader";
import Pagination from "../../../components/Pagination";
import Modal from "../../../components/Modal";
import icons from "../../../components/icons";
import Table, {
  TableHead,
  TableHeading,
  TableBody,
  TableRow,
  TableData,
  TableSkeleton,
} from "../../../components/Table";
import {
  Text as TextInput,
  Numeric as NumericInput,
  TextArea,
} from "../../../components/TextField";
import Card, { CardBody } from "../../../components/Card";
import { Title } from "../../../components/Typography";

import {
  productsListMock,
  categoriesDropdownMock,
  brandsDropdownMock,
} from "../../../mocks/mocks";
import { useMobile } from "../../../hooks/useMobile";
import useForm from "../../../hooks/useForm";
import useProducts from "../../../hooks/useProducts";
import { convertFirstLetterToUpperCase } from "../../../helpers/parseStrings";
import useCategories from "../../../hooks/useCategories";
import useBrands from "../../../hooks/useBrands";
import ProductsService from "../../../services/products";

const namespace = "admin-page-products";

const valideteForm = (form) => {
  let errors = {};
  const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (form.name.trim().length === 0) {
    errors.name = "Este campo no puede quedar vacio.";
  }

  if (parseInt(form.stock) === 0) {
    errors.stock = "Selecciona un valor mayor a cero.";
  }

  if (form.price.trim().length === 0) {
    errors.price = "Este campo no puede quedar vacio.";
  }

  if (form.description.trim().length <= 15) {
    errors.description = "Ingresa almenos 15 caracteres.";
  }

  // if (form.image.trim().length <= 15) {
  //   errors.image = "Ingresa almenos 15 caracteres.";
  // }

  return errors;
};

const AdminProducts = ({ className }) => {
  const isMobile = useMobile();
  const { TrashFill, PencilSquare } = icons;
  const [openModal, setModalVisibility] = useState(false);
  const [action, setAction] = useState("");
  const componentClassnames = classNames(namespace, className);

  const {
    products,
    createProduct,
    loading: loadingProducts,
    error: errorProducts,
  } = useProducts();
  const {
    categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useCategories();
  const { brands, loading: loadingBrands, error: errorBrands } = useBrands();

  const {
    form,
    name,
    stock,
    price,
    description,
    image,
    errors,
    handleChange,
    handleBlur,
    setErrors,
    handleReset,
    setForm,
  } = useForm(
    {
      name: "",
      stock: 0,
      price: 0,
      description: "",
      image: "",
    },
    valideteForm
  );

  const handlConfirm = () => {
    const errors = valideteForm(form);
    if (Object.entries(errors).length > 0) {
      setErrors(errors);
      return;
    }
    // createProduct({
    //   name: form.name,
    //   price: form.price,
    //   description: form.description,
    //   category: categories.find(category => category.id === form.category),
    //   brand: brands.find(brand => brand.id === form.brand)
    // })
    ProductsService.createProduct({
      name: form.name,
      stock: parseFloat(form.stock),
      price: parseFloat(form.price),
      description: form.description,
      category: categories.find((category) => category.id === form.category),
      brand: brands.find((brand) => brand.id === form.brand),
      instrumentDetail: {
        id: 1,
        description: null,
      },
      status: {
        id: 1,
        name: "Comprado",
      },
      characteristics: "",
    })
    // fetch("http://localhost:8080/instruments", {
    //   method: "POST",  
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Headers": "Content-Type",
    //     "Access-Control-Allow-Origin": "https://www.example.com",
    //     "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    //   },
    //   body: JSON.stringify({
    //     name: form.name,
    //     stock: parseFloat(form.stock),
    //     price: parseFloat(form.price),
    //     description: form.description,
    //     category: categories.find((category) => category.id === form.category),
    //     brand: brands.find((brand) => brand.id === form.brand),
    //     instrumentDetail: {
    //       id: 1,
    //       description: null,
    //     },
    //     status: {
    //       id: 1,
    //       name: "Comprado",
    //     },
    //     characteristics: "",
    //   }),
    // })
      .then((resp) => {
        console.log("Resp --> ", resp);
      })
      .catch((error) => {
        console.log("Error ---> ", error);
      });
    // console.log({
    //   name: form.name,
    //   stock: parseFloat(form.stock),
    //   price: parseFloat(form.price),
    //   description: form.description,
    //   category: categories.find((category) => category.id === form.category),
    //   brand: brands.find((brand) => brand.id === form.brand),
    // });
  };

  const handleOpenModal = (action) => {
    setModalVisibility(true);
    setAction(action);
  };

  const handleCloseModal = () => {
    handleReset();
    setModalVisibility(false);
  };

  const handleEditProduct = (productId) => {
    handleOpenModal("edit");
    const product = products.find(
      (product) => product.id === productId
    );
    setForm({
      ...form,
      ...product,
      brand: form.brand,
      category: form.category
    });
  };

  const handleDeleteProduct = () => {
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
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="20"
        element="section"
      >
        <Title size={isMobile ? "m" : "xl"} weight="light">
          Gestionar instrumentos
        </Title>
        <Button modifier="success" onClick={(e) => handleOpenModal("add")}>
          Agregar
        </Button>
      </Container>
      <Container
        marginBottom="20"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        element="section"
      >
        {loadingProducts ? (
          <div>Cargando...</div>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeading alignment="center">#</TableHeading>
                <TableHeading>Image</TableHeading>
                <TableHeading>Name</TableHeading>
                <TableHeading>Description</TableHeading>
                <TableHeading>Stock</TableHeading>
                <TableHeading>Actions</TableHeading>
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .sort((a, b) => a.id - b.id)
                .map((product) => {
                  const productImages = product.images
                    .slice(1)
                    .slice(0, product.images.length - 2)
                    .split(", ")
                    .map((img) => img.slice(1).slice(0, img.length - 2));
                  return (
                    <TableRow key={product.id}>
                      <TableData alignment="center">{product.id}</TableData>
                      <TableData>
                        <Image
                          source={productImages[0]}
                          maxHeight="50px"
                          paddingSize="0"
                        />
                      </TableData>
                      <TableData>
                        {convertFirstLetterToUpperCase(product.name)}
                      </TableData>
                      <TableData>
                        {convertFirstLetterToUpperCase(product.description)}
                      </TableData>
                      <TableData alignment="center">{product.stock}</TableData>
                      <TableData
                        alignment="center"
                        className="table__data--actions"
                      >
                        <Button
                          paddingSize="0"
                          hierarchy="transparent"
                          onClick={(e) => handleEditProduct(product.id)}
                        >
                          <PencilSquare />
                        </Button>
                        <Button
                          paddingSize="0"
                          hierarchy="transparent"
                          onClick={handleDeleteProduct}
                        >
                          <TrashFill />
                        </Button>
                      </TableData>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        )}
        {/* {!loadingProducts && (
          <Container
            display="flex"
            alignItems="center"
            justifyContent="end"
            className="pagination"
            marginTop="20"
          >
            <Pagination
              prevButtonLabel="Anterior"
              nextButtonLabel="Siguiente"
              nummerOfPages={5}
            />
          </Container>
        )} */}
      </Container>
      <Modal
        title={action === "add" ? "Agregar producto" : "Editar producto"}
        isOpen={openModal}
        onCancel={handleCloseModal}
        onConfirm={handlConfirm}
      >
        <Card shadow="none" paddingSize="0">
          <CardBody paddingSize="0">
            <Form shadow="none" paddingSize="0">
              <TextInput
                id="name"
                name="name"
                label="Nombre"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperMessage={errors.name}
                modifier={errors.name && "error"}
              />
              <TextInput
                id="price"
                name="price"
                label="Precio"
                value={price}
                onChange={handleChange}
                onBlur={handleBlur}
                helperMessage={errors.price}
                modifier={errors.price && "error"}
              />
              <NumericInput
                id="stock"
                name="stock"
                label="Existencias"
                value={stock}
                onChange={handleChange}
                onBlur={handleBlur}
                helperMessage={errors.stock}
                modifier={errors.stock && "error"}
              />
              <TextArea
                id="descriptiom"
                name="description"
                label="Descripción"
                value={description}
                onChange={handleChange}
                onBlur={handleBlur}
                helperMessage={errors.description}
                modifier={errors.description && "error"}
              />
              {!loadingCategories && categories.length > 0 && (
                <Dropdown
                  id="category"
                  name="category"
                  label="Categoría"
                  searchPlaceholder="Search a category"
                  options={categories.map((category) => ({
                    label: convertFirstLetterToUpperCase(category.name),
                    value: category.id,
                  }))}
                  modifier=""
                  helperMessage=""
                  selectedOption={1}
                  onSelectOption={(option) => {
                    setForm({
                      ...form,
                      category: option,
                    });
                  }}
                  fullWidth
                />
              )}
              {!loadingBrands && brands.length > 0 && (
                <Dropdown
                  id="brand"
                  name="brand"
                  label="Marca"
                  searchPlaceholder="Search a brand"
                  options={brands.map((brand) => ({
                    label: convertFirstLetterToUpperCase(brand.name),
                    value: brand.id,
                  }))}
                  modifier=""
                  helperMessage=""
                  selectedOption={1}
                  onSelectOption={(option) => {
                    setForm({
                      ...form,
                      brand: option,
                    });
                  }}
                  fullWidth
                />
              )}
              <FileLoader
                id="imagea"
                name="images"
                label="Imáganes"
                helperMessage=""
                modifier=""
              />
            </Form>
          </CardBody>
        </Card>
      </Modal>
    </Container>
  );
};

AdminProducts.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

AdminProducts.defaultProps = {
  className: "",
};

export default AdminProducts;
