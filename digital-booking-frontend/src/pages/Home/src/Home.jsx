/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "../../../components/Container";
import Image from "../../../components/Image";
import Button from "../../../components/Button";
import Skeleton from "../../../components/Skeleton";
import { Title, Text } from "../../../components/Typography";
import { Text as TextInput } from "../../../components/TextField";
import Card, { CardHeader, CardBody } from "../../../components/Card";

import { useMobile } from "../../../hooks/useMobile";
import { generateArray } from "../../../helpers";
import useProducts from "../../../hooks/useProducts";
import useCategories from "../../../hooks/useCategories";

import { productsListMock, categoriesMock } from "../../../mocks/mocks";

const namespace = "home-page";

const Home = ({ title, className }) => {
  const navigate = useNavigate();
  const isMobile = useMobile();
  const componentClassnames = classNames(namespace, className);
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = useProducts();
  const {
    categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useCategories();

  const handleClick = (id) => {
    console.log("id: ", id);
    navigate(`/detail/${id}`);
  };

  return (
    <div className={componentClassnames}>
      <Container
        element="section"
        display="flex"
        alignItems="center"
        className="search"
      >
        <TextInput
          id="title"
          name="title"
          value="Hola"
          placeholder=" ¿Qué estás buscando?"
          onChange={() => {}}
          onBlur={() => {}}
          helperMessage=""
          modifier=""
        />
        <Button>Buscar</Button>
      </Container>
      <Container element="section" className="categories">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          className="categories-carousel"
          modules={[Navigation]}
          breakpoints={{
            380: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            920: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation
        >
          {categoriesMock.map((category) => (
            <SwiperSlide key={category.id}>
              <Card paddingSize="0" borderRadius="8" clickeable>
                <CardHeader paddingSize="0">
                  <Image
                    width="100%"
                    height="180px"
                    containerWidth="100%"
                    containerHeight="180px"
                    borderTopRadius="8"
                    paddingSize="0"
                    source={category.image}
                    alternativeText={category.name}
                    onClick={() => console.log("img click")}
                  />
                </CardHeader>
                <CardBody>
                  <Title
                    element="h2"
                    size="m"
                    weight="regular"
                    marginBottom="4"
                  >
                    {category.name}
                  </Title>
                  <Text size="s" weight="light">
                    {category.stock} productos
                  </Text>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Container element="section" className="products">
        <Title
          element="h2"
          weight="light"
          marginTop="24"
          marginBottom="8"
          size={isMobile ? "l" : "l"}
        >
          Nuestros productos
        </Title>
        <Text
          weight="light"
          color="secondary"
          marginBottom="16"
          size={isMobile ? "s" : "m"}
        >
          Te listamos algunos productos que te pueden interesar
        </Text>
        <Container className="instruments-list">
          {loadingProducts &&
            generateArray(10).map((index, item) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton height="200px" />
                </CardHeader>
                <CardBody>
                  <Skeleton />
                  <Skeleton width="50%" />
                </CardBody>
              </Card>
            ))}
          {products &&
            products.map((product) => (
              <Card
                key={product.id}
                shadow="elevated"
                className="instrument-card"
                onClick={() => handleClick(product.id)}
                clickeable
                animated
              >
                <CardHeader>
                  <Image
                    source={product.images[0]}
                    alternativeText={product.title}
                    containerHeight={isMobile ? "150px" : "200px"}
                    maxHeight={isMobile ? "150px" : "200px"}
                    maxWidth={isMobile ? "150px" : "200px"}
                    onClick={() => console.log("img click")}
                  />
                </CardHeader>
                <CardBody>
                  <Title
                    size="s"
                    element="h2"
                    weight="semibold"
                    alignment="left"
                    transform="uppercase"
                    marginBottom="4"
                  >
                    {product.title}
                  </Title>
                  <Text size="s" weight="light" alignment="left">
                    $ {product.price}
                  </Text>
                </CardBody>
              </Card>
            ))}
        </Container>
      </Container>
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Home.defaultProps = {
  title: "",
  className: "",
};

export default Home;
