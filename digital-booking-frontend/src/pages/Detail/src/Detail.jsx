/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import Image from "../../../components/Image";
import ImageViewer from "../../../components/ImageViewer";
import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Card, {
  CardHeader,
  CardBody,
  CardFooter,
} from "../../../components/Card";
import { Title, Text } from "../../../components/Typography";
import List, { ListItem } from "../../../components/List";
import { Layput, LayputColumns, LayputRows } from "../../../components/Layout";
import BreadCrumb, { BreadCrumbLevel } from "../../../components/BreadCrumb";
import {
  productDetailMock,
  productsListMock,
  breadCrumbMock,
} from "../../../mocks/mocks";
import { useMobile } from "../../../hooks/useMobile";
import icons from "../../../components/icons";

const namespace = "detail-page";

const Detail = ({ title, className }) => {
  const isMobile = useMobile();
  const navigate = useNavigate();
  const { ArrowLeftShort } = icons;
  const componentClassnames = classNames(namespace, className);

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className={componentClassnames}>
      {title && <Title>{title}</Title>}
      {/* <BreadCrumb ariaLabel="Product detail">
        {breadCrumbMock.map((level) => (
          <BreadCrumbLevel key={level.id} {...level} />
        ))}
      </BreadCrumb> */}
      <Container element="section" className="product-detail">
        {/* <Image maxHeight="450px" source={productDetailMock.image} /> */}
        <Button
          hierarchy="transparent"
          paddingSize="0"
          className="product-detail__back-button"
          onClick={handleBackButton}
        >
          <ArrowLeftShort />
        </Button>
        <ImageViewer images={productDetailMock.images} />
        <Card shadow="none" marginSize={isMobile ? "0" : "20"}>
          <CardHeader>
            {/* <Badge>{productDetailMock.category}</Badge> */}
            <Title
              size={isMobile ? "l" : "xl"}
              color="secondary"
              weight="regular"
              transform="capitalize"
              letterSpacing="3"
              marginBottom="4"
              className="product-detail__title"
              alignment={isMobile ? "center" : "left"}
            >
              {productDetailMock.title}
            </Title>
            <Text
              size="m"
              color="positive"
              weight="light"
              letterSpacing="1"
              className="product-detail__price"
              alignment={isMobile ? "center" : "left"}
            >
              {productDetailMock.price}
            </Text>
          </CardHeader>
          <CardBody>
            <Title size="m" element="h2" transform="uppercase" marginBottom="4">
              Descripción
            </Title>
            <Text
              size={isMobile ? "s" : "m"}
              weight="light"
              color="seconday"
              marginBottom="16"
            >
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
                <Button fullWidth>Agregar al carrito</Button>
              </LayputColumns>
            </Layput>
          </CardFooter>
        </Card>
      </Container>
      <Container element="section">
        <Title
          element="h2"
          weight="light"
          marginTop="24"
          marginBottom="8"
          size={isMobile ? "l" : "l"}
        >
          Descripción
        </Title>
        <Text
          weight="light"
          color="secondary"
          marginBottom="16"
          size={isMobile ? "s" : "m"}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          mollitia dolor sunt, quod voluptas saepe deleniti laboriosam maxime
          obcaecati neque atque ex nisi. Nobis dolore facilis, voluptates odit
          itaque soluta!.
        </Text>
        <Text
          weight="light"
          color="secondary"
          marginBottom="16"
          size={isMobile ? "s" : "m"}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          mollitia dolor sunt, quod voluptas saepe deleniti laboriosam maxime
          obcaecati neque atque ex nisi. Nobis dolore facilis, voluptates odit
          itaque soluta!.
        </Text>
        <Title
          element="h2"
          weight="light"
          marginTop="24"
          marginBottom="8"
          size={isMobile ? "l" : "l"}
        >
          Características
        </Title>
        <Text
          weight="light"
          color="secondary"
          marginBottom="16"
          size={isMobile ? "s" : "m"}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          mollitia dolor sunt, quod voluptas saepe deleniti laboriosam maxime
          obcaecati neque atque ex nisi. Nobis dolore facilis, voluptates odit
          itaque soluta!.
        </Text>
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
