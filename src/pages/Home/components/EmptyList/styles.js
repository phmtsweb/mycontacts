import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  gap: 1rem;

  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray['200']};
    line-height: 1.25rem;

    strong {
      color: ${({ theme }) => theme.colors.primary.main}
    }
  }
`;
