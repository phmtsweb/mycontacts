import { ArrowLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Title } from './styles';

export function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <ArrowLeft />
        Voltar
      </Link>
      <Title>{title}</Title>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
