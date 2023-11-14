import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled(NavLink)`
  text-decoration: none;
  padding: 141px;
  font-weight: 700;
  color: white;
  font-size: 20px;

  &:hover {
    transform: scale(0.8);
  }
`;
