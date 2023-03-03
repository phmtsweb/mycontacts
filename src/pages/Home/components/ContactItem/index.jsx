import { PencilLine, Trash } from 'phosphor-react';
import PropTypes from 'prop-types';
import {
  ActionContainer, Container, InfoContainer, CategoryTag, ButtonIcon, ContactInfo,
} from './styles';

export function ContactItem({
  name, category, email, phone, handleEditContact, handleDeleteContact,
}) {
  return (
    <Container>
      <InfoContainer>
        <header>
          <strong>{name}</strong>
          {category && <CategoryTag>{category}</CategoryTag>}
        </header>
        <ContactInfo>{email}</ContactInfo>
        <ContactInfo>{phone}</ContactInfo>
      </InfoContainer>
      <ActionContainer>
        <ButtonIcon type="button" onClick={handleEditContact}>
          <PencilLine />
        </ButtonIcon>
        <ButtonIcon type="button" isTrashIcon onClick={handleDeleteContact}>
          <Trash />
        </ButtonIcon>
      </ActionContainer>
    </Container>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  category: PropTypes.string.isRequired,
  handleEditContact: PropTypes.func.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

ContactItem.defaultProps = {
  email: null,
  phone: null,
};
