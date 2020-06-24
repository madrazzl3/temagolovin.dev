import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  color: black;
  text-decoration: none;
  padding: 5px;
  transition: 200ms all cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    border-radius: 5px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

function Link({ to, children, className }) {
  return (
    <A className={className} href={to}>
      {children}
    </A>
  );
}

function ListLink({ to, children }) {
  return (
    <li style={{ margin: '5px 0', padding: '5px 0' }}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export { List, ListLink, Link };
