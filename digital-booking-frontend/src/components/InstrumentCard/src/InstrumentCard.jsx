/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "instrument-card";

const InstrumentCard = ({
  id,
  title,
  description,
  category,
  brand,
  price,
  image,
  showDetails,
  className,
}) => {
  const componentClassnames = classNames(namespace, className, {
    [`${namespace}--detail`]: showDetails
  });

  return (
    <article className={componentClassnames}>
      <div className={`${namespace}__header`}>
        <img 
          src={image} 
          alt={title} 
          className={`${namespace}__image`} 
        />
      </div>
      <div className={`${namespace}__body`}>
        <h2 className={`${namespace}__title`}>{ title }</h2>
        <p className={`${namespace}__price`}>{ price }</p>
        <p className={`${namespace}__description`}>{ description }</p>
      </div>
      <div className={`${namespace}__footer`}>
        <button className={`${namespace}__button`}>Agregar al arrito</button>
      </div>
    </article>
  );
};

InstrumentCard.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  showDetails: PropTypes.bool,
  className: PropTypes.string,
};

InstrumentCard.defaultProps = {
  className: "",
  showDetails: false
};

export default InstrumentCard;
