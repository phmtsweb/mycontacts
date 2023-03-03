import styled from 'styled-components';

export const Container = styled.select`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
  border-radius: ${({ theme }) => theme.radii.sm};
  height: 3.25rem;
  border: none;

  outline: solid 2px transparent;
  padding: 0 1.5rem;
  outline-offset: 10px;
  transition: all 0.2s ease-in-out;
  appearance: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray['200']};
  }

  &:focus {
    outline: solid 2px ${({ theme }) => theme.colors.primary.main};
    outline-offset: 0;
  }

  option:first-child {
    color: ${({ theme }) => theme.colors.gray['200']};
  }
`;
