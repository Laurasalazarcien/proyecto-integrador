/* eslint-disable react/prop-types */
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
import SearchBox from "../../../components/SearchBox";
import Pagination from "../../../components/Pagination";
import { Title, Text } from "../../../components/Typography";
import Card, { CardHeader, CardBody } from "../../../components/Card";

import { useMobile } from "../../../hooks/useMobile";
import { generateArray } from "../../../helpers";
import useProducts from "../../../hooks/useProducts";
import useCategories from "../../../hooks/useCategories";

import { productsListMock, categoriesMock } from "../../../mocks/mocks";
import { convertFirstLetterToUpperCase } from "../../../helpers/parseStrings";

const namespace = "home-page";

const Home = ({ className }) => {
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
    navigate(`/detail/${id}`);
  };

  const handleClickCategory = (categoryName) => {
    navigate(`/categories/${categoryName}`);
  };

  const handleSearch = (searchTerm) => {
    console.log("Search ---> ", searchTerm);
  };

  const handleClickSearch = (searchTerm) => {
    console.log("Search ---> ", searchTerm);
  };

  return (
    <Container className={componentClassnames}>
      <Container className={`${namespace}__container`}>
        <Container element="section" className="finder" marginBottom="20">
          <SearchBox
            searchPlaceholder="¿Qué estás buscando?"
            onChange={handleSearch}
            onClick={handleClickSearch}
          />
        </Container>
        <Container element="section" className="categories">
          {loadingCategories && (
            <Container
              display="grid"
              columns="4"
              spaceBetweenItems="20"
              className="categories-list-skeleton"
            >
              {generateArray(4).map((index, item) => (
                <Card key={`category-${index}`}>
                  <CardHeader paddingSize="0">
                    <Skeleton height="186px" />
                  </CardHeader>
                  <CardBody>
                    <Skeleton />
                    <Skeleton width="50%" />
                  </CardBody>
                </Card>
              ))}
            </Container>
          )}
          {categories && !loadingCategories && (
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
              {categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <Card
                    borderRadius="8"
                    onClick={() => handleClickCategory(category.id)}
                    clickeable
                  >
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
                        {convertFirstLetterToUpperCase(category.name)}
                      </Title>
                      {/* <Text size="s" weight="light">
                        {category.stock} productos
                      </Text> */}
                    </CardBody>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Container>
        <Container element="section" className="products" marginBottom="32">
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
          <Container
            display="grid"
            spaceBetweenItems="20"
            columnsInSmallDevices="1"
            columnsInMediumDevices="2"
            columnsInLargeDevices="3"
            columnsInExtraLargeDevices="4"
          >
            {loadingProducts &&
              generateArray(10).map((index, item) => (
                <Card key={`product-${index}`}>
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
              products.map((product) => {
                return (
                  <Card
                    key={product.id}
                    shadow="elevated"
                    className="instrument-card"
                    orientation={isMobile ? "vertical" : "horizontal"}
                    onClick={() => handleClick(product.id)}
                    clickeable
                    animated
                  >
                    <Container
                      display="flex"
                      flexDirection={isMobile ? "column" : "row"}
                    >
                      <CardHeader paddingSize="4">
                        <Image
                          paddingSize="0"
                          source={product.images[0].url}
                          alternativeText={product.name}
                          containerHeight={isMobile ? "150px" : "200px"}
                          // containerWidth={isMobile ? "150px" : "50%"}
                          maxHeight={isMobile ? "150px" : "200px"}
                          maxWidth={isMobile ? "150px" : "100%"}
                          onClick={() => console.log("img click")}
                        />
                      </CardHeader>
                      <CardBody>
                        <Container height="100%" display="flex" alignItems="center">
                          <Container>
                            <Title
                              size="xs"
                              element="h2"
                              weight="semibold"
                              alignment="left"
                              transform="uppercase"
                              marginBottom="4"
                            >
                              {product.name}
                            </Title>
                            <Text size="s" weight="light" alignment="left">
                              $ {product.price}
                            </Text>
                          </Container>
                        </Container>
                      </CardBody>
                    </Container>
                  </Card>
                );
              })}
          </Container>
        </Container>
        {!loadingProducts && !loadingCategories && products.length > 10 && (
          <Container
            display="flex"
            alignItems="center"
            justifyContent="center"
            element="section"
            className="pagination"
          >
            <Pagination
              prevButtonLabel="Anterior"
              nextButtonLabel="Siguiente"
              nummerOfPages={5}
            />
          </Container>
        )}
      </Container>
    </Container>
  );
};

Home.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Home.defaultProps = {
  className: "",
};

export default Home;
