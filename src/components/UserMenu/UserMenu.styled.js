import styled from 'styled-components';

export const NameUser = styled.p`
  color: white;
  font-size: 30px;
`;

export const ContUser = styled.div`
  font-weight: 800;
  color: white;
  font-size: 15px;
  margin-left: 45px;
`;

export const ButtonLogout = styled.button`
  background-color: yellowgreen;
  color: black;
  border: none;
  border-radius: 43px;
  padding: 15px;
  min-height: 30px;
  width: 80px;
  height: 73px;
  margin-left: 100px;
  margin-top: 122px;

  &:hover {
    background-color: white;
    cursor: pointer;
  }

  @media (max-width: 839px) {
    margin-top: 8px;
  }
`;
