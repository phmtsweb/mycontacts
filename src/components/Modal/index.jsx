import { X } from 'phosphor-react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  Container, Overlay, ActionContainer, Title, Description, CloseButton,
} from './styles';

export function Modal({
  title, description, children, isOpen, closeModal, modalColor,
}) {
  const ModalComponent = isOpen && (
    <Overlay>
      <Container>
        <CloseButton onClick={closeModal}>
          <X size={18} />
        </CloseButton>
        <Title modalColor={modalColor}>{title}</Title>
        <Description>{description}</Description>
        <ActionContainer>{children}</ActionContainer>
      </Container>
    </Overlay>
  );

  return ReactDOM.createPortal(
    ModalComponent,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalColor: PropTypes.string.isRequired,
};
