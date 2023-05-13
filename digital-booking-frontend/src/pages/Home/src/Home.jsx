import PropTypes from "prop-types";
import classNames from "classnames";
import InstrumentContainer from "../../../components/InstrumentContainer";
import InstrumentCard from "../../../components/InstrumentCard";
import { productsListMock } from "../../../mocks/mocks";

const namespace = "home-page";

const Home = ({ title, className }) => {
  const componentClassnames = classNames(namespace, className);

  return (
    <div className={componentClassnames}>
      <h1 className={`${namespace}__title`}>{ title }</h1>
      <InstrumentContainer 
        className="instruments-list"
      >
        {productsListMock.map((product) => (
          <InstrumentCard key={product.id} {...product} />
        ))}
      </InstrumentContainer>
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Home.defaultProps = {
  title: "Home page",
  className: "",
};

export default Home;
