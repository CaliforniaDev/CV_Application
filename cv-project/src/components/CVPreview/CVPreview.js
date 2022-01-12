import React from "react";
import CVHeader from "./CVHeader";
import Sidebar from "./Sidebar";
import CVBody from "./CVBody";
import styled from "styled-components";


class CVPreview extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { state } = this.props;
    return (
      <CVPreviewContainer>
        <CVHeader personalInfo={state.personalInfo} />
        <Sidebar 
          personalInfo={state.personalInfo}
          education={state.education} 
          skills={state.skills}
        />
        <CVBody
          personalInfo={state.personalInfo}
          experience={state.experience}
          education={state.education}
          skills={state.skills}
        />
      </CVPreviewContainer>
    )
  }
}

const CVPreviewContainer = styled.div`
    display: grid;
    grid-template-columns: 70mm 140mm;
    grid-template-rows: 50mm 247mm;
    width: 210mm;
    height: 297mm;
    background: ${({ theme }) => theme.colors.light};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export default CVPreview;