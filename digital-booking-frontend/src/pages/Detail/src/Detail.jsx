/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import Image from "../../../components/Image";
import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Card, {
  CardHeader,
  CardBody,
  CardFooter,
} from "../../../components/Card";
import { Title, Text } from "../../../components/Typography";
import { Layput, LayputColumns, LayputRows } from "../../../components/Layout";
import { productDetailMock, productsListMock } from "../../../mocks/mocks";

const namespace = "detail-page";

const Detail = ({ title, className }) => {
  const componentClassnames = classNames(namespace, className);

  return (
    <div className={componentClassnames}>
      {title && <Title>{title}</Title>}
      <Container className="product-detail">
        <Image maxHeight="450px" source={productDetailMock.image} />
        <Card shadow="none">
          <CardHeader>
            {/* <Badge>{productDetailMock.category}</Badge> */}
            <Title
              size="xl"
              color="secondary"
              weight="regular"
              transform="capitalize"
              letterSpacing="3"
              marginBottom="4"
              className="product-detail__title"
            >
              {productDetailMock.title}
            </Title>
            <Text
              size="m"
              color="positive"
              weight="light"
              alignment="left"
              letterSpacing="1"
              className="product-detail__price"
            >
              {productDetailMock.price}
            </Text>
          </CardHeader>
          <CardBody>
            <Title size="m" element="h2" transform="uppercase" marginBottom="4">
              Descripción
            </Title>
            <Text size="s" weight="light" color="seconday" marginBottom="16">
              {productDetailMock.description}
            </Text>
            <Text size="s" weight="light" color="seconday" marginBottom="8">
              Disponibilidad:{" "}
              {productDetailMock.stock > 0 ? "En stock" : "Agotado"}
            </Text>
          </CardBody>
          <CardFooter>
            <Layput columns="2">
              <LayputColumns start="1" end="2">
                {/* <input type="number" /> */}
              </LayputColumns>
              <LayputColumns start="3" end="4">
                <Button fullWidth>AGREGAR AL CARRITO</Button>
              </LayputColumns>
            </Layput>
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
};

Detail.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Detail.defaultProps = {
  title: "",
  className: "",
};

export default Detail;
