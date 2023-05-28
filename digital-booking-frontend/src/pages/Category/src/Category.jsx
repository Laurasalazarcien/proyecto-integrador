/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "../../../components/Container";
import Image from "../../../components/Image";
import Button from "../../../components/Button";
import Skeleton from "../../../components/Skeleton";
import SearchBox from "../../../components/SearchBox";
import { Title, Text } from "../../../components/Typography";
import { Text as TextInput } from "../../../components/TextField";
import Card, { CardHeader, CardBody } from "../../../components/Card";
import BreadCrumb, { BreadCrumbLevel } from "../../../components/BreadCrumb";

import { useMobile } from "../../../hooks/useMobile";
import { generateArray } from "../../../helpers";
import useProducts from "../../../hooks/useProducts";
import useCategories from "../../../hooks/useCategories";

import { productsListMock, categoriesMock } from "../../../mocks/mocks";
import {
  removeHyphens,
  convertFirstLetterToUpperCase,
} from "../../../helpers/parseStrings";

const namespace = "category-page";

const Category = ({ title, className }) => {
  const navigate = useNavigate();
  const isMobile = useMobile();
  const { category } = useParams();
  const categoryName = convertFirstLetterToUpperCase(removeHyphens(category));

  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = useProducts("smartphones");

  console.log("products ---> ", products.length);

  const handleClick = (id) => {
    console.log("id: ", id);
    navigate(`/detail/${id}`);
  };

  const handleSearch = (searchTerm) => {
    console.log("Search ---> ", searchTerm);
  };

  const handleClickSearch = (searchTerm) => {
    console.log("Search ---> ", searchTerm);
  };

  const componentClassnames = classNames(namespace, className);

  return (
    <Container className={componentClassnames}>
      <Container className={`${namespace}__container`}>
        <Container element="section" marginTop="16" marginBottom="20">
          <BreadCrumb>
            <BreadCrumbLevel text="Home" redirectTo="/home" />
            <BreadCrumbLevel text={categoryName} />
          </BreadCrumb>
        </Container>
        <Container element="section" className="finder" marginBottom="0">
          <SearchBox
            searchPlaceholder="¿Qué estás buscando?"
            onChange={handleSearch}
            onClick={handleClickSearch}
          />
        </Container>
        <Container element="section" className="products" marginBottom="32">
          <Title
            element="h1"
            weight="light"
            marginTop="32"
            marginBottom="32"
            alignment="center"
            size="xl"
          >
            {categoryName}
          </Title>
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
      </Container>
    </Container>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Category.defaultProps = {
  title: "",
  className: "",
};

export default Category;
