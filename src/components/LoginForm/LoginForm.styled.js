import styled from 'styled-components';

export const FormRegister = styled.form`
  display: flex;
  justify-content: center;
  gap: 26px;
  flex-direction: column;
  margin-left: 546px;
  margin-top: -117px;
`;

export const LabelName = styled.label`
  color: white;
  font-size: 20px;
`;

export const Button = styled.button`
  background-color: yellowgreen;
  color: black;
  border: none;
  border-radius: 43px;
  padding: 15px;
  min-height: 30px;
  width: 80px;
  height: 73px;
  margin-left: 101px;
  margin-top: 177px;

  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;

export const InputRegister = styled.input`
  height: 30px;
  margin-left: 10px;
  text-align: center;
  width: 187px;
`;

export const InputEmail = styled.input`
  margin-left: 50px;
  height: 30px;
  text-align: center;
  width: 187px;
`;