import styled from "styled-components";
import Section from "../Utils/Section";
import SubSection from "../Utils/SubSection";

const Skills = ({ skills }) => {

	const skillItems = skills.map(skillItem => {
		return (
			<li key={skillItem.id}>{skillItem.skill}</li>
		)
	});
	return (
		<Section>
			<SubSection title="Skills">
			<ListWrapper>
				{skillItems}
			</ListWrapper>
		</SubSection>
		</Section>
		

	);
}
const ListWrapper = styled.ul`
	list-style: none outside;
`

export default Skills;