import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    padding: 1rem;
    background: ${props => props.theme['gray-900']};

    color: ${props => props.theme['gray-300']};

    border: 0;
    border-radius: 6px;
  }

  &::placeholder {
    color: ${props => props.theme['gray-500']};
  }

  button {
    padding: 1rem;
    background: transparent;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-weight: bold;
    color: ${props => props.theme['green-300']};

    border: 1px solid ${props => props.theme['green-300']};
    border-radius: 6px;

    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${props => props.theme['green-500']};

      color: ${props => props.theme.white};

      border: 1px solid ${props => props.theme['green-500']};

      transition: all 0.2s;
    }
  }
`
