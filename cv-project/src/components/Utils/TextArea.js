import styled from "styled-components";

const TextArea = ({onChange, name, placeholder, value}) => {
  return (
    <TextAreaWrapper
      onChange={onChange}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
}

const TextAreaWrapper = styled.textarea`
  height: 16rem;
  padding: 0.8rem 0.8rem;
`;

export default TextArea;