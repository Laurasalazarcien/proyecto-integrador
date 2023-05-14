import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Check, Close, Warning } from "../../icons";

const namespace = "message";

const Message = ({ type, hierarchy, className, closable, children }) => {
  const [isClose, setIsClose] = useState(false);
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--${type}`]: type,
    [`${namespace}--${hierarchy}`]: hierarchy,
  });

  return (
    <>
      {closable && !isClose && (
        <div className={componentClassNames}>
          <div className={`${namespace}__notification`}>
            <span className={`${namespace}__icon`}>
              {type === "success" ? <Check /> : <Warning />}
            </span>
          </div>
          <div className={`${namespace}__content`}>
            <p className={`${namespace}__text`}>{children}</p>
            {closable && <Close />}
          </div>
        </div>
      )}
    </>
  );
};

Message.propTypes = {
  type: PropTypes.oneOf(["neutral", "success", "warning", "error"]),
  hierarchy: PropTypes.oneOf(["loud", "quiet"]),
  closable: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

Message.defaultProps = {
  type: "neutral",
  hierarchy: "loud",
  closable: false,
  className: "",
};

export default Message;
