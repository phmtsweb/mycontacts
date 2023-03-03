import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.025);
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    strong {
      color: ${({ theme }) => theme.colors.gray['900']};
    }
  }
`;

export const CategoryTag = styled.span`
  display: inline-block;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  color: ${({ theme }) => theme.colors.primary.main};
  padding: 0.125rem;
  font-size: 0.675rem;
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const ContactInfo = styled.span`
  color: ${({ theme }) => theme.colors.gray['200']};
  font-size: 0.75rem;
`;

export const ActionContainer = styled.div`
  margin-left: 6rem;


`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  padding: 0.25rem;
  border-radius: ${({ theme }) => theme.radii.sm};

  & + button {
    margin-left: 0.5rem;
  }

  &:hover {
    opacity: 0.75;
    background-color: ${({ theme, isTrashIcon }) => (isTrashIcon ? theme.colors.danger.lighter : theme.colors.primary.lighter)};
  }

  svg {
    color: ${({ theme, isTrashIcon }) => (isTrashIcon ? theme.colors.danger.main : theme.colors.primary.main)};
    font-size: 1.25rem;
  }
`;
