/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import Container from "../../../components/Container";
import Image from "../../../components/Image";
import { Title, Text } from "../../../components/Typography";
import Card, { CardHeader, CardBody } from "../../../components/Card";
import { productsListMock, categoriesMock } from "../../../mocks/mocks";
import { useMobile } from "../../../hooks/useMobile";

const namespace = "home-page";

const Home = ({ title, className }) => {
  const componentClassnames = classNames(namespace, className);
  const navigate = useNavigate();
  const isMobile = useMobile();

  const handleClick = (id) => {
    console.log("id: ", id);
    navigate(`/detail/${id}`);
  };

  return (
    <div className={componentClassnames}>
      <Title weight="light" size={isMobile ? "xl" : "xxl"}>
        Home
      </Title>
      <Text
        weight="light"
        color="secondary"
        marginBottom="32"
        size={isMobile ? "s" : "m"}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        accusantium! Quaerat impedit veniam, odio assumenda ut nostrum dolorem
        laudantium et, itaque perferendis atque saepe sequi nulla minus
        voluptatem recusandae optio?
      </Text>
      <Container element="section" className="categories">
        <Title
          element="h2"
          weight="light"
          marginBottom="16"
          size={isMobile ? "l" : "xl"}
        >
          ¿Qué estás buscando?
        </Title>
        <Container className="categories-list">
          {categoriesMock.map((category) => (
            <Card
              key={category.id}
              shadow="elevated"
              className="category-card"
              paddingSize="0"
              borderRadius="8"
              clickeable
              animated
            >
              <CardHeader paddingSize="0">
                <Image
                  source={category.image}
                  alternativeText={category.name}
                  width="100%"
                  height="180px"
                  containerWidth="100%"
                  containerHeight="180px"
                  paddingSize="0"
                  borderTopRadius="8"
                  onClick={() => console.log("img click")}
                />
              </CardHeader>
              <CardBody paddingSize="16">
                <Title element="h2" size="m" weight="regular" marginBottom="4">
                  {category.name}
                </Title>
                <Text size="s" weight="light">
                  {category.stock} productos
                </Text>
              </CardBody>
            </Card>
          ))}
        </Container>
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
          {productsListMock.map((product) => (
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
                  source={product.image}
                  alternativeText={product.name}
                  containerHeight={isMobile ? "150px": "200px"}
                  maxHeight={isMobile ? "150px": "200px"}
                  maxWidth={isMobile ? "150px": "200px"}
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
                  {product.price}
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
