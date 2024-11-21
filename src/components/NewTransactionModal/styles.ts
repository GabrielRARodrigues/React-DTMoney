import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);

  position: fixed;
  inset: 0;
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  background: ${props => props.theme['gray-800']};

  border-radius: 6px;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 1rem;
      background: ${props => props.theme['gray-900']};

      color: ${props => props.theme['gray-300']};

      border: 0;
      border-radius: 6px;

      &::placeholder {
        color: ${props => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      margin-top: 1.5rem;
      padding: 0 1.25rem;
      background: ${props => props.theme['green-500']};

      font-weight: bold;
      color: ${props => props.theme.white};

      border: 0;
      border-radius: 6px;

      cursor: pointer;

      &:hover {
        background: ${props => props.theme['green-700']};

        transition: background-color 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  background: transparent;

  color: ${props => props.theme['gray-500']};
  line-height: 0;

  border: 0;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  cursor: pointer;
`

export const TransactionType = styled(RadioGroup.Root)`
  margin-top: 0.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  padding: 1rem;
  background: ${props => props.theme['gray-700']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${props => props.theme['gray-300']};

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  svg {
    color: ${props =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${props => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${props => props.theme.white};
    background: ${props =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};
    svg {
      color: ${props => props.theme.white};
    }
  }
`
