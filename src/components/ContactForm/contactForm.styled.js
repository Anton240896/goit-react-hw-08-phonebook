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
  margin-top: 92px;
  font-size: 18px;

  &:hover {
    background-color: white;
    cursor: pointer;
  }

  @media (min-width: 150px) and (max-width: 420px) {
    margin-top: 153px;
  }

  @media (min-width: 421px) and (max-width: 838px) {
    margin-top: 206px;
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
