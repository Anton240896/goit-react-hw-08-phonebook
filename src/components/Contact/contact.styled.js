import styled from 'styled-components';

export const ContactContainer = styled.li`
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  gap: 146px;
  border-style: double;
  padding-left: 70px;
  margin-right: 320px;
  margin-top: 10px;
  border-radius: 30px;
  border-color: #000000;

  @media (max-width: 1170px) {
    border: none;
  }
`;

export const ContactName = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const ButtonDelete = styled.button`
  width: 65px;
  height: 30px;
  margin-bottom: 5px;
  border-radius: 60px;
  border: none;
  cursor: pointer;
  background-color: white;
  box-shadow: 3px 5px 20px rgba(0, 5, 0, 0.1);

  &:hover {
    background-color: yellowgreen;
    color: black;
    border: 2px solid white;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
