/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import { Title, Text } from "../../../components/Typography";
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
      {title && <Title>{title}</Title>}
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
                helperMessage="Message"
                modifier="error"
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
