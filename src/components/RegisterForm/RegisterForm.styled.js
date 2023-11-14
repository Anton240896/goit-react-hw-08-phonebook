import styled from 'styled-components';

export const FormRegister = styled.form`
  display: flex;
  justify-content: center;
  gap: 26px;
  flex-direction: column;
  margin-left: 529px;
  margin-top: -117px;
`;

export const LabelName = styled.label`
  color: white;
`;

export const Button = styled.button`
  margin-right: 627px;
  background-color: yellowgreen;
  margin-left: auto;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  min-width: 120px;

  &:hover {
    transform: scale(1.2);
    transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1);

    background-color: white;
    cursor: pointer;
  }
`;

export const InputRegister = styled.input`
  height: 30px;
  margin-left: 10px;
  text-align: center;
`;

export const InputEmail = styled.input`
  margin-left: 42px;
  height: 30px;
  text-align: center;
`;
