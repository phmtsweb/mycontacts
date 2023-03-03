import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 1rem 2rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(0.8);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray['200']};
    cursor: not-allowed;
  }
`;
