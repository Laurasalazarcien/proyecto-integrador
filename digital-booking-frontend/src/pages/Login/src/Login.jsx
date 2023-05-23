import PropTypes from "prop-types";
import classNames from "classnames";
import Container from "../../../components/Container";
import Card, { CardBody } from "../../../components/Card";
import Form from "../../../components/Form";
import { Title } from "../../../components/Typography";
import {
  Text as TextInput,
  Password as PasswordInput,
} from "../../../components/TextField";
import Button from "../../../components/Button";
import { useState } from "react";

const namespace = "login-page";

const validateEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  return password.length > 5;
};

const Login = ({ title, className }) => {
  const componentClassnames = classNames(namespace, className);

  const [data, setData] = useState({ email: "", password: "" });

  const handlePasswordValidate = (e) => {
    setData({ ...data, password: e.target.value });
    // TODO: No continue porque el hangleSubmit no me agarra el evento
    console.log(validatePassword(data.password));
  };

  const handleEmailValidate = (e) => {
    setData({ ...data, email: e.target.value });
    // TODO: No continue porque el hangleSubmit no me agarra el evento
    console.log(validateEmail(data.email));
  };

  const handleSubmitLogin = (e) => {
    console.log(data);
    console.log(!validateEmail(data.email));
    if (!validateEmail(data.email)) {
      console.log("No valido");
      console.log(e);
    }
  };

  return (
    <Container element="div" className={componentClassnames} height={"82.3vh"}>
      <Title
        element="h2"
        weight="semibold"
        marginTop="16"
        alignment="center"
        letterSpacing="default"
        size="xl"
        paddingBottom="20"
      >
        Iniciar sesión
      </Title>
      <Card shadow="none" paddingSize="0">
        <CardBody paddingSize="0">
          <Form onSubmit={handleSubmitLogin}>
            <TextInput
              id="email"
              name="email"
              label="Email"
              value={data.email}
              placeholder="Ingresa el correo electronico"
              onChange={handleEmailValidate}
              onBlur={() => {}}
              helperMessage=""
              modifier=""
            ></TextInput>
            <PasswordInput
              id="password"
              type="password"
              name="password"
              label="Password"
              value={data.password}
              placeholder="Ingresa contraseña"
              onChange={handlePasswordValidate}
              onBlur={() => {}}
              helperMessage=""
              modifier=""
            ></PasswordInput>
            <Button>Ingresar</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

Login.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Login.defaultProps = {
  title: "Login page",
  className: "",
};

export default Login;
