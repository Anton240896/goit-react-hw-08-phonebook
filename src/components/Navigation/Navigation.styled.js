import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: white;
  font-size: 20px;

  &:hover {
    transform: scale(1.2);
  }
`;
