import React from "react";
import styled from "styled-components";
import { Link as RouteLink } from "react-router-dom";

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

const ARouter = styled(RouteLink)`
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

function Link({ to, children, useRouter, className }) {
  if (useRouter) {
    return (
      <ARouter to={to} className={className}>
        {children}
      </ARouter>
    );
  }

  return (
    <A href={to} className={className}>
      {children}
    </A>
  );
}

function ListLink({ to, children, useRouter }) {
  return (
    <li style={{ margin: "5px 0", padding: "5px 0" }}>
      <Link to={to} useRouter>
        {children}
      </Link>
    </li>
  );
}

export { List, ListLink, Link };
