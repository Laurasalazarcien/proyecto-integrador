import PropTypes from "prop-types";
import classNames from "classnames";
import Container from "../../../components/Container";
import Image from "../../../components/Image";
import { Title, Text } from "../../../components/Typography";
import Card, { CardHeader, CardBody } from "../../../components/Card";

import { productsListMock } from "../../../mocks/mocks";

const namespace = "home-page";

const Home = ({ title, className }) => {
  const componentClassnames = classNames(namespace, className);

  return (
    <div className={componentClassnames}>
      {title && <Title>{title}</Title>}
      <Container className="instruments-list">
        {productsListMock.map((product) => (
          <Card className="instrument-card" shadow="elevated" key={product.id}>
            <CardHeader>
              <Image
                source={product.image}
                alternativeText={product.name}
                maxHeight="220px"
              />
            </CardHeader>
            <CardBody>
              <Title
                size="m"
                element="h2"
                weight="semibold"
                alignment="center"
                transform="uppercase"
                className="instrument-card__title"
              >
                {product.title}
              </Title>
              <Text size="s" weight="light" alignment="center">
                {product.description}
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
