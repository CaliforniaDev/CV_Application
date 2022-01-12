import styled, { css } from "styled-components";

const Button = ({
  text,
  onClick,
  addButton,
  deleteButton,
  pdfButton,
  loadButton,
  resetButton
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      addButton={addButton}
      deleteButton={deleteButton}
      pdfButton={pdfButton}
      loadButton={loadButton}
      resetButton={resetButton}
    >
      {text}
    </ButtonWrapper>
  )
}
const ButtonWrapper = styled.button`
    padding: 1.2rem 2.4rem;
    font-size: 2rem;
    border: none;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    cursor: pointer;

    ${props => props.addButton && css`
      background: ${({ theme }) => theme.colors.addButton};

      &:hover {
          background: ${({ theme }) => theme.colors.addHover};
      }

      &:active {
          background: ${({ theme }) => theme.colors.addButton};
      }
    `}

    ${props => props.deleteButton && css`
      background: ${({ theme }) => theme.colors.deleteButton};

      &:hover {
          background: ${({ theme }) => theme.colors.deleteHover};
      }

      &:active {
          background: ${({ theme }) => theme.colors.deleteButton};
      }
    `}

    ${props => props.pdfButton && css`
      background: ${({ theme }) => theme.colors.pdfButton};

      &:hover {
        background: ${({ theme }) => theme.colors.pdfHover};
      }

      &:active {
        background: ${({ theme }) => theme.colors.pdfButton};
      }
    `}

    ${props => props.loadButton && css`
      background: ${({ theme }) => theme.colors.loadButton};

      &:hover {
          background: ${({ theme }) => theme.colors.loadHover};
      }

      &:active {
          background: ${({ theme }) => theme.colors.loadButton};
      }

    `}

    ${props => props.resetButton && css`
      background: ${({ theme }) => theme.colors.resetButton};

      &:hover {
          background: ${({ theme }) => theme.colors.resetHover};
      }

      &:active {
          background: ${({ theme }) => theme.colors.resetButton};
      }
    `}
`;
export default Button;