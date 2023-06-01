/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import Swal from "sweetalert2";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import Container from "../../../components/Container";
import Form, { HelperMessage, Label } from "../../../components/Form";
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
import Message from "../../../components/Message";
import { Title } from "../../../components/Typography";
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
    errors.stock = "Ingresa un valor mayor a cero.";
  }

  console.log("Price ", form.price);
  if (parseFloat(form.price) === 0) {
    errors.price = "Ingresa un valor mayor a cero.";
  }

  if (form.description.trim().length <= 15) {
    errors.description = "Ingresa almenos 15 caracteres.";
  }

  // if (form.image.trim().length <= 15) {
  //   errors.image = "Ingresa almenos 15 caracteres.";
  // }

  if (form.characteristics.length === 0) {
    errors.characteristics = "Agrega al menos una característica.";
  }

  if (form.images.length === 0) {
    errors.images = "Agrega al menos una imagen.";
  }

  return errors;
};

const AdminProducts = ({ className }) => {
  const isMobile = useMobile();
  const { TrashFill, PencilSquare } = icons;

  const [action, setAction] = useState("");
  const [openModal, setModalVisibility] = useState(false);
  const [characteristicsFields, setCharacteristicsFields] = useState([]);
  const [imagesFields, setImagesFields] = useState([]);

  const componentClassnames = classNames(namespace, className);

  const {
    products,
    setProducts,
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
    category,
    brand,
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
      category: 1,
      brand: 1,
      images: [],
      characteristics: [],
    },
    valideteForm
  );

  // Modal Inputs handlers
  const handlConfirm = () => {
    const errors = valideteForm(form);
    console.log({ form, errors });
    if (Object.entries(errors).length > 0) {
      setErrors(errors);
      return;
    }
    if (action === "edit") {
      // ProductsService.editProduct({
      //   id: 3,
      //   name: "Saxofón Alto Yamaha Yas-480",
      //   price: 750000,
      //   description: "Instrumento de viento Yamaha",
      //   characteristics: "",
      //   images:
      //     "['https://d3ugyf2ht6aenh.cloudfront.net/stores/216/260/products/diseno-sin-titulo-381-53541b3ea19ddfbaff16148453475630-640-0.png', 'https://d3ugyf2ht6aenh.cloudfront.net/stores/216/260/products/1sxaym0480l_5_10241-314398e0944a83b0a016011040464796-640-0.jpg', 'https://d3ugyf2ht6aenh.cloudfront.net/stores/216/260/products/1sxaym0480l_2_10241-002470f2076c6542e916011040463259-640-0.jpg', 'https://d3ugyf2ht6aenh.cloudfront.net/stores/216/260/products/480thumb__21340-1467728555-1280-12801-729e075ac27432abed16011040466247-640-0.jpg']",
      //   stock: 10,
      //   category: {
      //     id: 2,
      //     name: "viento",
      //     description:
      //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum at repudiandae recusandae quos ipsa cupiditate eaque perferendis modi veniam aliquid culpa dolorum doloribus, cum voluptas, harum, esse porro officia.",
      //     image:
      //       "https://img.freepik.com/foto-gratis/detalle-instrumento-trompeta-metal_150588-88.jpg?w=740&t=st=1685485276~exp=1685485876~hmac=6eba76446f2a2aa6201a7a70d1cbd32129ad37358169993fff6f51e8a1b02659",
      //   },
      //   brand: {
      //     id: 3,
      //     name: "pearl",
      //   },
      //   instrumentDetail: {
      //     id: 1,
      //     description: "En cromo",
      //   },
      //   status: {
      //     id: 2,
      //     name: "comprado",
      //   },
      //   bookings: null,
      //   image: null,
      // })
      //   .then((resp) => {
      //     console.log("Resp --> ", resp);
      //   })
      //   .catch((error) => {
      //     console.log("Error ---> ", error);
      //   });
    } else {
      ProductsService.createProduct({
        name: form.name,
        stock: parseFloat(form.stock),
        price: parseFloat(form.price),
        images: form.images,
        description: form.description,
        category: categories.find((category) => category.id === form.category),
        brand: brands.find((brand) => brand.id === form.brand),
        instrumentDetail: {
          id: 1,
          description: null,
        },
        status: {
          id: 4,
          name: "disponible",
        },
        characteristics: form.characteristics,
      })
        .then((resp) => {
          setModalVisibility(false);
          Swal.fire({
            text: "Producto creado con éxito.",
            icon: "success",
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "Ocurrió un error al crear el producto.",
            icon: "error",
          });
        });
    }
  };

  const handleOpenModal = (action) => {
    setAction(action);
    setModalVisibility(true);
  };

  const handleCloseModal = () => {
    handleReset();
    setModalVisibility(false);
  };

  const handleEditProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    console.log("product ---> ", product);
    setForm({
      ...form,
      ...product,
      brand: product.brand.id,
      category: 3,
    });
    setTimeout(() => {
      handleOpenModal("edit");
      console.log("Product ---> ", product);
    }, 900);
  };

  const handleDeleteProduct = (productId) => {
    Swal.fire({
      title: "Eliminar producto",
      text: "¿Estás seguro de eliminar este producto?",
      icon: "info",
      showCancelButton: true,
    }).then((resp) => {
      if (resp.isConfirmed) {
        ProductsService.deleteProduct(productId)
          .then((resp) => {
            setModalVisibility(false);
            setProducts(products.filter((product) => product.id !== productId));
            Swal.fire({
              text: "Producto eliminado con éxito.",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Ocurrió un error al eliminar el producto.",
              icon: "error",
            });
          });
      }
    });
  };

  // Characterustics Inputs handlers
  const handleAddCharacteristicInput = () => {
    const fieldId = uuidv4();
    setCharacteristicsFields([
      ...characteristicsFields,
      {
        id: fieldId,
        inputs: [
          {
            label: "Característica",
            property: "name",
            value: "",
          },
          {
            label: "Valor de la característica",
            property: "value",
            value: "",
          },
        ],
      },
    ]);
  };

  const handleDeleteCharacteristicInput = (inputId) => {
    setCharacteristicsFields(
      characteristicsFields.filter(
        (characteristicInput) => characteristicInput.id !== inputId
      )
    );
  };

  const handleChangeCharacteristicField = (
    fieldId,
    propertyName,
    propertyValue
  ) => {
    setCharacteristicsFields(
      characteristicsFields.map((field) =>
        field.id === fieldId
          ? {
              ...field,
              inputs: field.inputs.map((input) =>
                input.property === propertyName
                  ? {
                      ...input,
                      value: propertyValue,
                    }
                  : {
                      ...input,
                    }
              ),
            }
          : { ...field }
      )
    );
  };

  // Characterustics Inputs handlers
  const handleAddImageInput = () => {
    const fieldId = uuidv4();
    setImagesFields([
      ...imagesFields,
      {
        id: fieldId,
        label: "Ingresa la URL de la imagen",
        url: "",
      },
    ]);
  };

  const handleDeleteImageInput = (inputId) => {
    setImagesFields(
      imagesFields.filter((imageInput) => imageInput.id !== inputId)
    );
  };

  const handleChangeImageField = (fieldId, propertyValue) => {
    setImagesFields(
      imagesFields.map((field) =>
        field.id === fieldId
          ? {
              ...field,
              url: propertyValue,
            }
          : { ...field }
      )
    );
  };

  useEffect(() => {
    const characterusticsData = characteristicsFields.map((field) => ({
      name: field.inputs.find((input) => input.property === "name").value,
      value: field.inputs.find((input) => input.property === "value").value,
    }));
    if (characterusticsData.length > 0) {
      setErrors(valideteForm(form));
      setForm({
        ...form,
        characteristics: JSON.stringify(characterusticsData),
      });
    }
  }, [characteristicsFields]);

  useEffect(() => {
    const imagesData = imagesFields.map((image) => image.url);
    if (imagesData.length > 0) {
      setErrors(valideteForm(form));
      setForm({
        ...form,
        images: JSON.stringify(imagesData),
      });
    }
  }, [imagesFields]);

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
                <TableHeading alignment="center">Imagen</TableHeading>
                <TableHeading>Nombre</TableHeading>
                <TableHeading>Descripción</TableHeading>
                <TableHeading alignment="center">Existencias</TableHeading>
                <TableHeading alignment="center">Marca</TableHeading>
                <TableHeading>Categoría</TableHeading>
                <TableHeading alignment="center">Acciones</TableHeading>
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .sort((a, b) => a.id - b.id)
                .map((product) => {
                  // const productImages = product.images
                  //   .slice(1)
                  //   .slice(0, product.images.length - 2)
                  //   .split(", ")
                  //   .map((img) => img.slice(1).slice(0, img.length - 2));
                  return (
                    <TableRow key={product.id}>
                      <TableData alignment="center">{product.id}</TableData>
                      <TableData>
                        {/* <Image
                          source={productImages[0]}
                          maxHeight="50px"
                          paddingSize="0"
                        /> */}
                      </TableData>
                      <TableData>
                        {convertFirstLetterToUpperCase(product.name)}
                      </TableData>
                      <TableData>
                        {convertFirstLetterToUpperCase(product.description)}
                      </TableData>
                      <TableData alignment="center">{product.stock}</TableData>
                      <TableData alignment="center">
                        {convertFirstLetterToUpperCase(product.brand.name)}
                      </TableData>
                      <TableData>
                        {convertFirstLetterToUpperCase(product.category.name)}
                      </TableData>
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
                          onClick={() => handleDeleteProduct(product.id)}
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
        {!loadingProducts && products.length > 0 && (
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
        )}
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
              {errorCategories && (
                <Message hierarchy="quiet" type="error" marginBottom="8">
                  Ocurrió un error al cargar las categorías.
                </Message>
              )}
              {errorBrands && (
                <Message hierarchy="quiet" type="error" marginBottom="8">
                  Ocurrió un error al cargar las marcas.
                </Message>
              )}
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
                  selectedOption={category}
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
                  selectedOption={brand}
                  onSelectOption={(option) => {
                    setForm({
                      ...form,
                      brand: option,
                    });
                  }}
                  fullWidth
                />
              )}
              <Container className="characteristics-inputs" marginBottom="12">
                <Label label="Caracerísticas" />
                <Container
                  display="flex"
                  flexDirection="column"
                  spaceBetweenItems="8"
                  marginBottom={characteristicsFields.length > 0 ? "8" : "0"}
                >
                  {characteristicsFields.map((field, fieldIndex) => (
                    <Container
                      key={field.id}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      spaceBetweenItems="12"
                      className="characteristics__field"
                    >
                      <Container className="characteristics__field-inputs">
                        {field.inputs.map((input) => {
                          return (
                            <TextInput
                              key={input.property}
                              placeholder={input.label}
                              value={input.value}
                              helperMessage=""
                              modifier=""
                              onChange={(e) =>
                                handleChangeCharacteristicField(
                                  field.id,
                                  input.property,
                                  e.target.value
                                )
                              }
                            />
                          );
                        })}
                      </Container>
                      {characteristicsFields.length > 1 && fieldIndex !== 0 && (
                        <Button
                          modifier="error"
                          onClick={() =>
                            handleDeleteCharacteristicInput(field.id)
                          }
                        >
                          <TrashFill />
                        </Button>
                      )}
                    </Container>
                  ))}
                </Container>
                <Container display="flex">
                  <Button
                    onClick={handleAddCharacteristicInput}
                    marginRight="8"
                  >
                    Agregar
                  </Button>
                  {errors.characteristics && (
                    <HelperMessage
                      message={errors.characteristics}
                      modifier={errors.characteristics && "error"}
                    />
                  )}
                </Container>
              </Container>
              <Container className="images-inputs">
                <Label label="Imágenes" />
                <Container
                  display="flex"
                  flexDirection="column"
                  spaceBetweenItems="8"
                  marginBottom={imagesFields.length > 0 ? "8" : "0"}
                >
                  {imagesFields.map((field, fieldIndex) => (
                    <Container key={field.id} className="image__field">
                      <TextInput
                        key={field.id}
                        placeholder={field.label}
                        value={field.value}
                        helperMessage=""
                        modifier=""
                        fullWidth
                        onChange={(e) =>
                          handleChangeImageField(field.id, e.target.value)
                        }
                      />
                      {imagesFields.length > 1 && fieldIndex !== 0 && (
                        <Button
                          modifier="error"
                          onClick={() => handleDeleteImageInput(field.id)}
                        >
                          <TrashFill />
                        </Button>
                      )}
                    </Container>
                  ))}
                </Container>
                <Container display="flex">
                  <Button onClick={handleAddImageInput} marginRight="8">
                    Agregar
                  </Button>
                  {errors.images && (
                    <HelperMessage
                      message={errors.images}
                      modifier={errors.images && "error"}
                    />
                  )}
                </Container>
              </Container>
              {/* <FileLoader
                id="imagea"
                name="images"
                label="Imáganes"
                helperMessage=""
                modifier=""
              /> */}
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
