import styled from 'styled-components';

export const ButtonAddContact = styled.button`
  background-color: yellowgreen;
  color: black;
  border: none;
  border-radius: 43px;
  min-height: 30px;
  width: 80px;
  height: 73px;
  margin-left: 645px;
  margin-top: 151px;
  margin-bottom: -18px;
  &:hover {
    transform: scale(0.8);
    transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: white;
    cursor: pointer;
  }

  input {
    width: 162px;
  }
`;

export const LabelStyled = styled.label`
  padding-left: 14px;
  padding-right: 10px;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const ContContacts = styled.div`
  margin-top: -184px;
  margin-left: 483px;
`;
