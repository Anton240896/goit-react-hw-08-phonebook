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
  min-height: 30px;
  width: 80px;
  height: 73px;
  margin-left: 101px;
  margin-top: 177px;
  font-size: 18px;

  &:hover {
    background-color: white;
    transition: background-color 700ms;
    cursor: pointer;
  }

  @media (min-width: 100px) and (max-width: 388px) {
    margin-top: 85px;
  }

  @media (min-width: 880px) {
    margin-top: 177px;
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

export const Message = styled.p`
  margin-top: -487px;
  margin-left: 373px;
  font-size: 30px;
  border-style: double;
  border-color: #000000;
  padding-left: 70px;
  margin-right: 160px;
  border-radius: 30px;

  @media (max-width: 995px) {
    border: none;
  }
`;
