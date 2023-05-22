/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "container";

const Container = ({
  width,
  height,
  display,
  alignItems,
  justifyContent,
  spaceBetweenItems,
  element,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  padding,
  columns,
  columnsInExtraSmallDevices,
  columnsInSmallDevices,
  columnsInMediumDevices,
  columnsInLargeDevices,
  columnsInExtraLargeDevices,
  children,
  className,
}) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--margin-${margin}`]: margin,
    [`${namespace}--margin-top-${marginTop}`]: marginTop,
    [`${namespace}--margin-left-${marginLeft}`]: marginLeft,
    [`${namespace}--margin-right-${marginRight}`]: marginRight,
    [`${namespace}--margin-bottom-${marginBottom}`]: marginBottom,
    [`${namespace}--padding-${padding}`]: padding,
    [`${namespace}--columns-${columns}`]: columns,
    [`${namespace}--display-${display}`]: display,
    [`${namespace}--columns-xs-${columnsInExtraSmallDevices}`]: columnsInExtraSmallDevices,
    [`${namespace}--columns-sm-${columnsInSmallDevices}`]: columnsInSmallDevices,
    [`${namespace}--columns-md-${columnsInMediumDevices}`]: columnsInMediumDevices,
    [`${namespace}--columns-lg-${columnsInLargeDevices}`]: columnsInLargeDevices,
    [`${namespace}--columns-xl-${columnsInExtraLargeDevices}`]: columnsInExtraLargeDevices,
    [`${namespace}--gap-${spaceBetweenItems}`]: spaceBetweenItems,
    [`${namespace}--align-items-${alignItems}`]: alignItems,
    [`${namespace}--justify-content-${justifyContent}`]: justifyContent,
  });

  const getContainerElement = (element) => {
    switch (element) {
      case "section":
        return <section className={componentClassNames}>{children}</section>;
      case "div":
        return <div className={componentClassNames}>{children}</div>;
      default:
        return <div className={componentClassNames}>{children}</div>;
    }
  };

  return getContainerElement(element);
};

Container.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  display: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  margin: PropTypes.string,
  marginTop: PropTypes.oneOf(["2", "4", "8", "12", "16", "20", "24", "32"]),
  marginLeft: PropTypes.oneOf(["2", "4", "8", "12", "16", "20", "24", "32"]),
  marginRight: PropTypes.oneOf(["2", "4", "8", "12", "16", "20", "24", "32"]),
  marginBottom: PropTypes.oneOf(["2", "4", "8", "12", "16", "20", "24", "32"]),
  columns: PropTypes.oneOf(["2","3","4","5","6","7","8","9","10","11","12"]),
  columnsInExtraSmallDevices: PropTypes.oneOf(["2","3","4","5","6","7","8","9","10","11","12"]),
  columnsInSmallDevices: PropTypes.oneOf(["2","3","4","5","6","7","8","9","10","11","12"]),
  columnsInMediumDevices: PropTypes.oneOf(["2","3","4","5","6","7","8","9","10","11","12"]),
  columnsInLargeDevices: PropTypes.oneOf(["2","3","4","5","6","7","8","9","10","11","12"]),
  columnsInExtraLargeDevices: PropTypes.oneOf(["2","3","4","5","6","7","8","9","10","11","12"]),
  spaceBetweenItems: PropTypes.oneOf(["4","8","12","16","20","24","32"]),
  element: PropTypes.string,
  padding: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: "",
};

export default Container;
