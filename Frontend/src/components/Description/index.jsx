import React from "react";
import PropTypes from "prop-types";
import { Text } from "./style";

function Description({ children, big }) {
  return <Text big={big}>{children}</Text>;
}
Description.defaultProps = {
  big: false,
};
Description.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,

  big: PropTypes.bool,
};
export default Description;
