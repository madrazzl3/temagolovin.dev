import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-self: center;
  margin: 35px;
  width: 100%;

  @media screen and (max-width: 360px) {
    margin: 15px;
  }
`;

const A = styled.a`
  color: black;
  text-decoration: none;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListLink = props => (
  <li style={{ margin: '5px 0' }}>
    <A href={props.to}>{props.children}</A>
  </li>
);

const Bio = () => (
  <Wrapper>
    <h1>
      Artem Golovin{' '}
      <span role="img" aria-label="wave">
        🌊
      </span>
    </h1>
    <h3>Software Developer</h3>

    <List>
      <ListLink to="https://github.com/awave1">/github</ListLink>
      <ListLink to="https://twitter.com/awaveawave">/twitter</ListLink>
      <ListLink to="https://soundcloud.com/awave1/tracks">
        /soundclound
      </ListLink>
    </List>
  </Wrapper>
);

export default Bio;
