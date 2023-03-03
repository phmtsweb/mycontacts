import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
  padding: 1rem 3rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    color: ${({ theme }) => theme.colors.danger.main}
  }

  button {
    max-width: 14rem;
  }
`;
