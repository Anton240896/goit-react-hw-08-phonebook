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
`;

export const Button = styled.button`
  background-color: yellowgreen;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  width: 138px;

  &:hover {
    transform: scale(0.8);
    transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: white;
    cursor: pointer;

    @media (max-width: 796px) {
      margin-left: 100px;
    }
  }
`;

export const InputRegister = styled.input`
  height: 30px;
  margin-left: 10px;
  text-align: center;
  width: 187px;

  @media (max-width: 796px) {
    margin-left: 40px;
  }
`;

export const InputEmail = styled.input`
  margin-left: 42px;
  height: 30px;
  text-align: center;
`;
