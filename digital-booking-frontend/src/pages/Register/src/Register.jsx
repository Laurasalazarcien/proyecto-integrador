/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import Container from "../../../components/Container";
import Form from "../../../components/Form";
import {
  Text as TextInput,
  Password as PasswordInput,
} from "../../../components/TextField";
import Card, { CardHeader, CardBody } from "../../../components/Card";
import { Title, Text } from "../../../components/Typography";
import { useMobile } from "../../../hooks/useMobile";
import useForm from "../../../hooks/useForm";
import logo from "../../../assets/icons/logo-no-background-inverted.svg";

const namespace = "register-page";

const valideteForm = (form) => {
  let errors = {};
  const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (form.name.trim().length === 0) {
    errors.name = "Este campo no puede quedar vacio.";
  }

  if (form.lastname.trim().length === 0) {
    errors.lastname = "Este campo no puede quedar vacio.";
  }

  if (!emailRegex.test(form.email)) {
    errors.email = "El correo electrónico no tiene un formato válido.";
  }

  if (form.address.trim().length === 0) {
    errors.address = "Este campo no puede quedar vacio.";
  }

  if (form.password.trim().length < 8) {
    errors.password = "La contraseña debe tener almenos 8 caracteres.";
  }

  return errors;
};

const Register = ({ title, className }) => {
  const isMobile = useMobile();
  const navigate = useNavigate();
  const componentClassnames = classNames(namespace, className);
  const {
    form,
    name,
    lastname,
    email,
    address,
    password,
    errors,
    submited,
    handleChange,
    handleBlur,
    setErrors,
  } = useForm(
    {
      name: "",
      lastname: "",
      email: "",
      address: "",
      password: "",
    },
    valideteForm
  );

  const handleSubmit = () => {
    const errors = valideteForm(form);
    if (Object.entries(errors).length > 0) {
      setErrors(errors);
      return;
    }
    console.log("submit", {
      name,
      lastname,
      email,
      address,
      password,
    });
  };

  const handleClickLink = () => {
    navigate("/login");
  };

  return (
    <Container className={componentClassnames}>
      <Container>
        <Card shadow="elevated" className={`${namespace}__card`}>
          <CardHeader>
            <Image
              source={logo}
              maxHeight={isMobile ? "45px" : "50px"}
              containerHeight={isMobile ? "45px" : "50px"}
              paddingSize="0"
            />
            <Title
              size="l"
              element="h2"
              weight="light"
              alignment="center"
              marginTop="20"
            >
              Crear cuenta
            </Title>
          </CardHeader>
          <CardBody paddingSize="20">
            <Form
              shadow="none"
              paddingSize="0"
              onSubmit={handleSubmit}
              className={`${namespace}__form`}
            >
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
                id="lastname"
                name="lastname"
                label="Apellido"
                value={lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                helperMessage={errors.lastname}
                modifier={errors.lastname && "error"}
              />
              <TextInput
                id="email"
                name="email"
                label="Correo electónico"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperMessage={errors.email}
                modifier={errors.email && "error"}
              />
              <TextInput
                id="address"
                name="address"
                label="Dirección"
                value={address}
                onChange={handleChange}
                onBlur={handleBlur}
                helperMessage={errors.address}
                modifier={errors.address && "error"}
              />
              <PasswordInput
                id="password"
                name="password"
                label="Contraseña"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperMessage={errors.password}
                modifier={errors.password && "error"}
              />
              <Container marginTop="20">
                <Button
                  type="submit"
                  disabled={Object.entries(errors).length > 0}
                  fullWidth
                >
                  Registrarme
                </Button>
              </Container>
              <Container
                marginTop="20"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text size="xs" weight="light">
                  ¿Ya tienes cuenta?
                  <Button
                    paddingSize="0"
                    hierarchy="transparent"
                    onClick={handleClickLink}
                    className={`${namespace}__button-link`}
                  >
                    <Text
                      size="xs"
                      element="span"
                      weight="light"
                      color="link"
                      marginLeft="4"
                    >
                      Iniciar sesión
                    </Text>
                  </Button>
                </Text>
              </Container>
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
