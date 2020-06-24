import React from "react";
import styled from "styled-components";
import { WaveEmoji } from "./Waves";
import { List, ListLink, Link } from "./List";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 30px;
  height: 80px;

  .home {
    display: flex;
    align-self: center;

    .wave {
      align-self: center;
    }

    &:hover {
      background-color: #009abd;
    }
  }
`;

const NavLinks = styled(List)`
  display: flex;
  align-self: center;
`;

export function Toolbar() {
  return (
    <header>
      <Nav>
        <Link useRouter className="home" to="/">
          <WaveEmoji className="wave" />
        </Link>
        <NavLinks>
          <ListLink useRouter to="/about">
            About
          </ListLink>
          <ListLink useRouter to="/work">
            Work
          </ListLink>
        </NavLinks>
      </Nav>
    </header>
  );
}
