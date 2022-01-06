import styled from 'styled-components';

const CVHeader = ({ personalInfo }) => {
  const { firstName, lastName, title } = personalInfo;
  return (
    <CVHeaderWrapper>
      <h1>{firstName} {lastName}</h1>
      <h3>{title}</h3>
    </CVHeaderWrapper>
  )
}

const CVHeaderWrapper = styled.header`
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    grid-column: span 2;
    padding-left: 4rem;
    margin: 0;
    justify-content: center;
    display: flex;
    flex-direction: column;

    h1 {
        font-weight: 200;
    }
    h3 {
        font-size: 2.4rem;
        font-weight: 300;
    }
`



export default CVHeader;