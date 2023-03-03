import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export function FormGroup({ children, errorMessage }) {
  const childrenElement = errorMessage ? React.cloneElement(children, { error: true }) : children;

  return (
    <Container>
      {childrenElement}
      {errorMessage && <small>{errorMessage}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
};

FormGroup.defaultProps = {
  errorMessage: null,
};
