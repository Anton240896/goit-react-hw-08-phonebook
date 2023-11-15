import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  font-weight: 600;
  color: white;
  font-size: 40px;

  &:hover {
    color: yellowgreen;
  }
`;
