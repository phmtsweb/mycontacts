import styled from 'styled-components';

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
  max-width: 28.125rem;
  width: 100%;
  position: relative;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ modalColor }) => modalColor};
`;
export const Description = styled.p`
  margin-top: 0.5rem;
`;
export const ActionContainer = styled.footer`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  button {
    max-width: 6.25rem;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
