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

const namespace = "category-page";

const Category = ({ title, className }) => {
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
      Category Page
    </div>
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
