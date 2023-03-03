import PropTypes from 'prop-types';
import magnifyingGlass from '../../../../assets/images/magnifier-question.svg';
import { Container } from './styles';

export function EmptySearch({ searchTerm }) {
  return (
    <Container>
      <img src={magnifyingGlass} alt="Magnifying glass" />
      <p>
        Nenhum resultado foi entrado para
        {' '}
        <strong>{searchTerm}</strong>
      </p>
    </Container>
  );
}

EmptySearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
