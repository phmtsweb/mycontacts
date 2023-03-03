import { SmileySad } from 'phosphor-react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { Button } from '../Button';
import { Container, InfoContainer } from './styles';

export function Fail({ title, buttonLabel, buttonAction }) {
  const theme = useTheme();
  return (
    <Container>
      <SmileySad size={120} color={theme.colors.danger.main} />
      <InfoContainer>
        <h3>{title}</h3>
        <Button
          type="button"
          onClick={buttonAction}
          bgColor={theme.colors.primary.main}
          textColor={theme.colors.white}
        >
          {buttonLabel}
        </Button>
      </InfoContainer>
    </Container>
  );
}

Fail.propTypes = {
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
};
