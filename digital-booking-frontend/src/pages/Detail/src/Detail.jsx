/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
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
import useProducts from "../../../hooks/useProducts";

const namespace = "detail-page";

const Detail = ({ title, className }) => {
  const isMobile = useMobile();
  const navigate = useNavigate();
  const { id } = useParams();
  const { ArrowLeftShort } = icons;

  const {
    products: product,
    loading: loadingProduct,
    error: errorProducts,
  } = useProducts({ id });
  console.log(product);

  const handleBackButton = () => {
    navigate(-1);
  };

  const componentClassnames = classNames(namespace, className);

  return (
    <div className={componentClassnames}>
      <Container className={`${namespace}__container`}>
        {title && <Title>{title}</Title>}
        <Container element="section" marginTop="16" marginBottom="20">
          <BreadCrumb>
            <BreadCrumbLevel text="Home" redirectTo="/home" />
            <BreadCrumbLevel
              text="Instrumentos de viento"
              redirectTo="/categories/instrumentos-de-viento"
            />
            <BreadCrumbLevel text={product.name} />
          </BreadCrumb>
        </Container>
        <Container element="section" className="product-detail">
          <Button
            hierarchy="transparent"
            paddingSize="0"
            className="product-detail__back-button"
            onClick={handleBackButton}
          >
            <ArrowLeftShort />
          </Button>
          {product && product.images && !loadingProduct && (
            <ImageViewer
              images={JSON.parse(product.images).map((img, index) => ({
                id: index,
                url: img,
              }))}
            />
          )}
          {product && !loadingProduct && (
            <Card shadow="none" marginSize={isMobile ? "0" : "20"}>
              <CardHeader>
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
                  {product.name}
                </Title>
                <Text
                  size="m"
                  color="positive"
                  weight="light"
                  letterSpacing="1"
                  className="product-detail__price"
                  alignment={isMobile ? "center" : "left"}
                >
                  {`$ ${product.price}`}
                </Text>
              </CardHeader>
              <CardBody>
                <Title
                  size="m"
                  element="h2"
                  transform="uppercase"
                  marginBottom="4"
                >
                  Descripción
                </Title>
                <Text
                  size={isMobile ? "s" : "m"}
                  weight="light"
                  color="seconday"
                  marginBottom="16"
                >
                  {product.description}
                </Text>
                <Text size="s" weight="light" color="seconday" marginBottom="8">
                  Disponibilidad:{" "}
                  {product.stock > 0 ? "En stock" : "No disponible"}
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
          )}
        </Container>
        <Container element="section" marginTop="20">
          <Title
            element="h2"
            weight="light"
            marginTop="24"
            marginBottom="8"
            size={isMobile ? "l" : "l"}
          >
            Características
          </Title>
          <Container
            className="product-characteristics"
            display="grid"
            columns="4"
            spaceBetweenItems="8"
          >
            {product && product.characteristics && !loadingProduct && (
              <>
                {JSON.parse(product.characteristics).map((characteristic) => (
                  <Card key={characteristic.name} className="product-characteristics__card">
                    <CardBody paddingSize="24">
                      <Text weight="regular">
                        {characteristic.name}:
                        <Text element="span" color="secondary" marginLeft="8">
                          { characteristic.value }
                        </Text>
                      </Text>
                    </CardBody>
                  </Card>
                ))}
              </>
            )}
          </Container>
        </Container>
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
