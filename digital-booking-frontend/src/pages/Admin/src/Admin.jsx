/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
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

import {
  productsListMock,
  categoriesMock,
  categoriesDropdownMock,
  brandsDropdownMock,
} from "../../../mocks/mocks";

const namespace = "add-product-page";

const AddProduct = ({ title, className }) => {
  const componentClassnames = classNames(namespace, className);
  const navigate = useNavigate();

  return (
    <div className={componentClassnames}>
      <Title weight="light" marginBottom="8">
        Panel de administración
      </Title>
      <Text weight="light" marginBottom="16">
        Desde aqui vas a poder gestionar tus productos.
      </Text>
      <Container margin="auto" className="add-product-form">
        <Card shadow="elevated">
          <CardHeader>
            <Title weight="light">Agregar producto</Title>
          </CardHeader>
          <CardBody>
            <Form shadow="none" onSubmit={() => {}}>
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
            </Form>
          </CardBody>
          <CardBody>
            <Button fullWidth>CREATE</Button>
          </CardBody>
        </Card>
      </Container>
      <Container display="flex" justifyContent="center">
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
                <TableData>{product.stock}</TableData>
                <TableData>
                  <Button>Edit</Button>
                  <Button modifier="error">Delete</Button>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
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
