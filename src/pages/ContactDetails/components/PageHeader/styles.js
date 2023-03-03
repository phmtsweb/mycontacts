import styled from 'styled-components';

export const Container = styled.div`

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    line-height: 1.25rem;
    gap: 0.5rem;
    font-weight: 700;
    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }

    svg {
      font-size: 1.25rem;
    }
  }
`;

export const Title = styled.h2`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.875rem;
`;
