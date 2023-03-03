import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 0.75rem;
  }
`;
