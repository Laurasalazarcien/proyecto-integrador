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

const Login = ({ title, className }) => {
  const componentClassnames = classNames(namespace, className);

  const [data, setData] = useState({ email: "", password: "" });

  const handlePasswordValidate = (e) => {
    setData({ ...data, password: e.target.value });
    console.log(e.target.value);
  };
  const {
    handleSubmit,
  } = (e) => {
    console.log(e);
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
          <Form onSubmit={handleSubmit}>
            <TextInput
              id="email"
              name="email"
              label="Email"
              value={data.email}
              placeholder="Ingresa el correo electronico"
              onChange={() => {}}
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
