import PropTypes from 'prop-types';
import { Container } from './styles';

export function Input({ error, ...props }) {
  return <Container error={error} {...props} />;
}

Input.propTypes = {
  error: PropTypes.bool,
};

Input.defaultProps = {
  error: false,
};
