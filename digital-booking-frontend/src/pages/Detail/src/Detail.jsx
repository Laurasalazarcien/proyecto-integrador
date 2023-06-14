/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import Image from "../../../components/Image";
import ImageViewer from "../../../components/ImageViewer";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Card, {
  CardHeader,
  CardBody,
  CardFooter,
} from "../../../components/Card";
import { Title, Text } from "../../../components/Typography";
import { Layput, LayputColumns, LayputRows } from "../../../components/Layout";
import BreadCrumb, { BreadCrumbLevel } from "../../../components/BreadCrumb";
import { useMobile } from "../../../hooks/useMobile";
import icons from "../../../components/icons";
import useProducts from "../../../hooks/useProducts";

const namespace = "detail-page";

const Detail = ({ className }) => {
  const isMobile = useMobile();
  const navigate = useNavigate();
  const { id } = useParams();
  const { ArrowLeftShort } = icons;

  const {
    products: product,
    loading: loadingProduct,
    error: errorProducts,
  } = useProducts({ id });

  const handleBackButton = () => {
    navigate(-1);
  };

  const componentClassnames = classNames(namespace, className);

  return (
    <Container className={componentClassnames}>
      <Container className={`${namespace}__container`}>
        <Container element="section" marginTop="16" marginBottom="20">
          <BreadCrumb>
            <BreadCrumbLevel text="Home" redirectTo="/home" />
            <BreadCrumbLevel
              text="Instrumentos de viento"
              redirectTo={`/categories/${product?.category?.id}`}
            />
            <BreadCrumbLevel text={product.name} />
          </BreadCrumb>
        </Container>
        <Container element="section" className="product-detail">
          <Button
            paddingSize="0"
            hierarchy="transparent"
            className="product-detail__back-button"
            onClick={handleBackButton}
          >
            <ArrowLeftShort />
          </Button>
          {product && product.images && !loadingProduct && (
            <ImageViewer
              images={product.images.map((img, index) => ({
                id: index,
                url: img.url,
              }))}
            />
          )}
          {product && !loadingProduct && (
            <Card shadow="elevated" marginTop={isMobile ? "16" : "0"}>
              <CardHeader>
                {product.brand && (
                  <Image
                    maxHeight="80px"
                    paddingSize="8"
                    source={product.brand.image}
                  />
                )}
                <Title
                  size={isMobile ? "l" : "xl"}
                  color="secondary"
                  weight="regular"
                  transform="capitalize"
                  letterSpacing="3"
                  marginBottom="4"
                  alignment={isMobile ? "center" : "left"}
                >
                  {product.name}
                </Title>
                <Text
                  size="m"
                  color="positive"
                  weight="light"
                  letterSpacing="1"
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
            weight="regular"
            marginTop="24"
            marginBottom="12"
            size="l"
          >
            Características
          </Title>
          <Container
            display="grid"
            columnsInSmallDevices="1"
            columnsInMediumDevices="2"
            columnsInLargeDevices="3"
            columnsInExtraLargeDevices="4"
            spaceBetweenItems="8"
            className="product-characteristics"
          >
            {product && product.characteristics && !loadingProduct && (
              <>
                {JSON.parse(product.characteristics).map((characteristic) => (
                  <Card
                    key={characteristic.name}
                    className="product-characteristics__card"
                  >
                    <CardBody paddingSize="24">
                      <Text weight="regular">
                        {characteristic.name}:
                        <Text element="span" color="secondary" marginLeft="8">
                          {characteristic.value}
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
    </Container>
  );
};

Detail.propTypes = {
  className: PropTypes.string,
};

Detail.defaultProps = {
  className: "",
};

export default Detail;
