import PropTypes from 'prop-types';
import { Container } from './styles';

export function Select({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
};
