/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import Image from "../../../components/Image";
import Button from "../../../components/Button";
import Message from "../../../components/Message";
import Dropdown from "../../../components/Dropdown";
import Container from "../../../components/Container";
import Card, { CardHeader, CardBody } from "../../../components/Card";
import { Text as TextInput } from "../../../components/TextField";
import { Title, Text } from "../../../components/Typography";
import { useMobile } from "../../../hooks/useMobile";
import useProducts from "../../../hooks/useProducts";
import { useApp } from "../../../context/AppContext";

import { DayPicker } from "react-day-picker";
import List, { ListItem } from "../../../components/List";
import { getMonthNumber } from "../../../helpers/parseDates";

import "react-day-picker/dist/style.css";
import { convertFirstLetterToUpperCase } from "../../../helpers/parseStrings";

const namespace = "booking-page";

const Booking = ({ className }) => {
  const isMobile = useMobile();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useApp();
  const { token, isAuthenticated, ...newUser } = user;
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
  });
  const [booking, setBooking] = useState({
    user: newUser,
    instrument: null,
    startDate: "",
    endDate: "",
    status: null,
  });
  console.log("user --> ", user);

  const {
    products: product,
    loading: loadingProduct,
    error: errorProduct,
  } = useProducts({ id });

  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = useProducts();

  const handleBackButton = () => {
    navigate(-1);
  };

  const onChangeStartDate = (date) => {
    setDates({
      ...dates,
      startDate: date,
    });
    setBooking({
      ...booking,
      startDate: `${date.getFullYear()}-${getMonthNumber(
        date.getMonth()
      )}-${date.getDate()}`,
    });
  };

  const onChangeEndDate = (date) => {
    setDates({
      ...dates,
      endDate: date,
    });
    setBooking({
      ...booking,
      endDate: `${date.getFullYear()}-${getMonthNumber(
        date.getMonth()
      )}-${date.getDate()}`,
    });
  };

  // useEffect(() => {
  //   if (user) {
  //     setBooking({
  //       ...booking,
  //       user: user,
  //     });
  //   }
  // }, [user]);

  useEffect(() => {
    if (product) {
      setBooking({
        ...booking,
        instrument: product,
      });
    }
  }, [product]);

  useEffect(() => {
    setBooking({
      ...booking,
      startDate: `${new Date().getFullYear()}-${getMonthNumber(
        new Date().getMonth()
      )}-${new Date().getDate()}`,
    });
  }, []);

  useEffect(() => {
    console.log("booking ---> ", booking);
  }, [booking]);

  const componentClassnames = classNames(namespace, className);

  return (
    <Container className={componentClassnames}>
      <Container className={`${namespace}__container`}>
        <Title
          element="h1"
          weight="light"
          marginTop="12"
          marginBottom="24"
          size={isMobile ? "l" : "xxl"}
        >
          Realizar reserva
        </Title>
        <Container
          className="booking"
          display="grid"
          columns="2-1"
          spaceBetweenItems="20"
        >
          <Container>
            <Card shadow="elevated" marginBottom="20">
              <CardHeader paddingSize="20">
                <Title weight="light">Información de usuario</Title>
              </CardHeader>
              <CardBody paddingSize="20">
                <Container display="grid" columns="2" spaceBetweenItems="12">
                  <TextInput
                    id="name"
                    name="name"
                    label="Nombre"
                    value={user.name}
                    disabled
                  />
                  <TextInput
                    id="lastName"
                    name="lastName"
                    label="Apellido"
                    value={user.lastName}
                    disabled
                  />
                  <TextInput
                    id="email"
                    name="email"
                    label="Correo electrónico"
                    value={user.email}
                    disabled
                  />
                </Container>
              </CardBody>
            </Card>
            <Card shadow="elevated" marginBottom="20">
              <CardHeader paddingSize="20">
                <Title weight="light">Cambiar producto</Title>
              </CardHeader>
              <CardBody paddingSize="20">
                {!loadingProducts && products.length > 0 && (
                  <Dropdown
                    id="product"
                    name="product"
                    searchPlaceholder="Buscar producto"
                    options={products
                      .filter((product) => product.id !== id)
                      .map((product) => ({
                        label: convertFirstLetterToUpperCase(product.name),
                        value: product.id,
                        image: product.images[0].url,
                      }))}
                    modifier=""
                    helperMessage=""
                    selectedOption={1}
                    onSelectOption={(option) => {
                      setBooking({
                        ...booking,
                        instrument: products.find(
                          (product) => product.id === option
                        ),
                      });
                    }}
                    fullWidth
                  />
                )}
              </CardBody>
            </Card>
            <Card shadow="elevated" marginBottom="20">
              <CardHeader paddingSize="20">
                <Title weight="light">Selecciona la fecha de reserva</Title>
              </CardHeader>
              <CardBody paddingSize="20">
                <Container display="grid" columns="2" spaceBetweenItems="12">
                  <Container>
                    <Text weight="light" paddingLeft="16" color="secondary">
                      Fecha inicial
                    </Text>
                    <Container
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <DayPicker
                        mode="single"
                        selected={dates.startDate}
                        onSelect={onChangeStartDate}
                      />
                    </Container>
                  </Container>
                  <Container>
                    <Text weight="light" paddingLeft="16" color="secondary">
                      Fecha final
                    </Text>
                    <Container
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <DayPicker
                        mode="single"
                        selected={dates.endDate}
                        onSelect={onChangeEndDate}
                      />
                    </Container>
                  </Container>
                </Container>
              </CardBody>
            </Card>
          </Container>
          <Container>
            <Card shadow="elevated">
              <CardHeader paddingSize="20">
                <Title weight="light">Detalle de la reserva</Title>
              </CardHeader>
              <CardBody paddingSize="20">
                {booking.instrument && booking.instrument.images && (
                  <Image
                    source={booking.instrument.images[0].url}
                    alternativeText={booking.instrument.name}
                    containerWidth="100%"
                    maxWidth="100%"
                    showBorder
                  />
                )}
                {booking.instrumentt && booking.instrument.brand && (
                  <Image
                    maxHeight="50px"
                    paddingSize="8"
                    source={booking.brand.image}
                  />
                )}
                {booking.instrument && booking.instrument.name && (
                  <Title
                    size={isMobile ? "m" : "l"}
                    color="secondary"
                    transform="capitalize"
                    alignment={isMobile ? "center" : "left"}
                    marginTop="8"
                    marginBottom="4"
                  >
                    {booking.instrument.name}
                  </Title>
                )}
                {booking.instrument && booking.instrument.price && (
                  <Text
                    size="m"
                    color="positive"
                    letterSpacing="1"
                    alignment={isMobile ? "center" : "left"}
                    marginBottom="12"
                  >
                    {`$ ${booking.instrument.price}`}
                  </Text>
                )}
                <Container marginTop="24" marginBottom="12">
                  <List>
                    <ListItem>
                      <Container display="flex" justifyContent="space-between">
                        <Text element="span" weight="semibold">
                          Fecha inicio
                        </Text>
                        <Text element="span" color="secondary">
                          {booking.startDate}
                        </Text>
                      </Container>
                    </ListItem>
                    <ListItem>
                      <Container display="flex" justifyContent="space-between">
                        <Text element="span" weight="semibold">
                          Fecha final
                        </Text>
                        <Text element="span" color="secondary">
                          {booking.endDate}
                        </Text>
                      </Container>
                    </ListItem>
                  </List>
                </Container>
                <Button
                  fullWidth
                  size="large"
                  disabled={!booking.startDate || !booking.endDate}
                >
                  Confirmar reserva
                </Button>
              </CardBody>
            </Card>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

Booking.propTypes = {
  className: PropTypes.string,
};

Booking.defaultProps = {
  className: "",
};

export default Booking;
