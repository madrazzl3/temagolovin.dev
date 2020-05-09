import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

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
  padding: 5px;
  transition: 200ms all cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: black;
    color: white;
    border-radius: 5px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListLink = props => (
  <li style={{ margin: '5px 0', padding: '5px 0' }}>
    <A href={props.to}>{props.children}</A>
  </li>
);

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <h1>
        Artem Golovin{' '}
        <span role="img" aria-label="wave">
          🌊
        </span>
      </h1>
      <h3>Software Developer</h3>
      <p>
        I enjoy building things, taking pictures, and making music
      </p>

      <List>
        <ListLink to="https://github.com/awave1">/github</ListLink>
        <ListLink to="https://www.linkedin.com/in/artem-golovin-749793a5/">/linkedin</ListLink>
        <ListLink to="https://twitter.com/awaveawave">/twitter</ListLink>
        <ListLink to="https://soundcloud.com/awave1/tracks">
          /soundclound
        </ListLink>
      </List>
    </Wrapper>
  </Layout>
);

export default IndexPage;
