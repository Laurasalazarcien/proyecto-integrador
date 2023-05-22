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

  const handleSearch = (searchTerm) => {
    console.log("Search ---> ", searchTerm);
  };

  const handleClickSearch = (searchTerm) => {
    console.log("Search ---> ", searchTerm);
  };

  return (
    <Container className={componentClassnames}>
      <Container element="section" className="finder" marginBottom="20">
        <SearchBox
          searchPlaceholder="¿Qué estás buscando?"
          onChange={handleSearch}
          onClick={handleClickSearch}
        />
      </Container>
      Category Page
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
