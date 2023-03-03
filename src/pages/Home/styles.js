import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: ${({ hasError, isCentered }) => {
    if (hasError) return 'flex-end';
    if (isCentered) return 'center';
    return 'space-between';
  }};
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray['200']};

  strong {
    color: ${({ theme }) => theme.colors.gray['900']};
    font-size: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    border: solid 2px ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: ${({ theme }) => theme.radii.sm};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
      border-color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;

export const ListContainer = styled.div`

  margin-top: 1.5rem;

  > header {
    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: none;
      gap: 0.25rem;
      color: ${({ theme }) => theme.colors.primary.main};
      font-size: 1rem;
      background-color: transparent;
      font-weight: 700;

      svg {
        font-size: 1.25rem;
      }
    }
  }

  > div {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  /* margin-top: 4rem; */

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: ${({ theme }) => theme.radii.lg};
    height: 3.125rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    outline: solid 2px transparent;
    padding: 0 1.5rem;
    outline-offset: 10px;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray['200']};
    }

    &:focus {
      outline: solid 2px ${({ theme }) => theme.colors.primary.main};
      outline-offset: 0;
    }
  }
`;
