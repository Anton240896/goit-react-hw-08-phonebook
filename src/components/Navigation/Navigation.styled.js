import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled(NavLink)`
  text-decoration: none;
  padding: 53px;
  font-weight: 700;
  color: white;
  font-size: 20px;

  &:hover {
    color: yellowgreen;
  }
`;

export const Contacts = styled.p`
  font-weight: 700;
  color: white;
  font-size: 20px;
  margin-left: 54px;
`;
