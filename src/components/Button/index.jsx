import PropTypes from 'prop-types';
import { Container } from './styles';

export function Button({
  children, bgColor, textColor, ...props
}) {
  return <Container bgColor={bgColor} textColor={textColor} {...props}>{children}</Container>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
