/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { useState } from "react";
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
  Password as PasswordInput
} from "../../../components/TextField";
import Card, { CardHeader, CardBody } from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import ImageLoader from "../../../components/ImageLoader";
import Modal from "../../../components/Modal";
import icons from "../../../components/icons";
import { useMobile } from "../../../hooks/useMobile";
import logo from "../../../assets/icons/logo-no-background.svg";

const namespace = "register-page";

const Register = ({ title, className }) => {
  const isMobile = useMobile();
  const componentClassnames = classNames(namespace, className);

  return (
    <Container className={componentClassnames}>
      {/* <Title size={isMobile ? "xl" : "xxl"} weight="light" marginBottom="8">
        Panel de administración
      </Title>
      <Text weight="light" marginBottom="16">
        Desde aqui vas a poder gestionar tus productos.
      </Text> */}
      <Container>
        <Card shadow="none" paddingSize="0" className={`${namespace}__card`}>
          <CardHeader>
            <Title element="h2" size="l" weight="light">
              Crea tu cuenta
            </Title>
            {/* <Image
              source={logo}
              maxHeight={isMobile ? "45px" : "50px"}
              containerHeight={isMobile ? "45px" : "50px"}
            /> */}
          </CardHeader>
          <CardBody>
            <Form
              shadow="none"
              paddingSize="0"
              onSubmit={() => {}}
              className={`${namespace}__form`}
            >
              <TextInput
                id="name"
                name="name"
                label="Nombre"
                placeholder=""
                onChange={() => {}}
                onBlur={() => {}}
                helperMessage=""
                modifier=""
              />
              <TextInput
                id="lastname"
                name="lastname"
                label="Apellido"
                placeholder=""
                onChange={() => {}}
                onBlur={() => {}}
                helperMessage=""
                modifier=""
              />
              <TextInput
                id="email"
                name="email"
                label="Correo electónico"
                placeholder=""
                onChange={() => {}}
                onBlur={() => {}}
                helperMessage=""
                modifier=""
              />
              <TextInput
                id="address"
                name="address"
                label="Dirección"
                placeholder=""
                onChange={() => {}}
                onBlur={() => {}}
                helperMessage=""
                modifier=""
              />
              <PasswordInput
                id="password"
                name="password"
                label="Contraseña"
                placeholder=""
                onChange={() => {}}
                onBlur={() => {}}
                helperMessage=""
                modifier=""
              />
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Container>
  );
};

Register.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Register.defaultProps = {
  title: "Register page",
  className: "",
};

export default Register;
