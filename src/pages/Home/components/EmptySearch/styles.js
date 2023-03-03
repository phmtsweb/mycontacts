import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  align-items: center;

  p {
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray['200']};
  }
`;
