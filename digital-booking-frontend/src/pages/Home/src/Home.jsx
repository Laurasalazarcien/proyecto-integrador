/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import Container from "../../../components/Container";
import Image from "../../../components/Image";
import { Title, Text } from "../../../components/Typography";
import Card, { CardHeader, CardBody } from "../../../components/Card";

import { productsListMock } from "../../../mocks/mocks";

const namespace = "home-page";

const Home = ({ title, className }) => {
  const componentClassnames = classNames(namespace, className);
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log('id: ', id);
    navigate(`/detail/${id}`);
  };

  return (
    <div className={componentClassnames}>
      {title && <Title>{title}</Title>}
      <Container className="instruments-list">
        {productsListMock.map((product) => (
          <Card
            key={product.id}
            shadow="elevated"
            className="instrument-card"
            onClick={() => handleClick(product.id)}
            clickeable
          >
            <CardHeader>
              <Image
                source={product.image}
                alternativeText={product.name}
                maxHeight="200px"
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
