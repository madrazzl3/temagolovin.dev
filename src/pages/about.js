import React from 'react';
import Layout from '../components/layout';
import { List, ListLink } from '../components/List';

export default function AboutPage() {
  return (
    <Layout>
      <h1>About</h1>

      <List>
        <ListLink to="https://github.com/awave1">/github</ListLink>
        <ListLink to="https://www.linkedin.com/in/artem-golovin-749793a5/">
          /linkedin
        </ListLink>
        <ListLink to="https://twitter.com/awaveawave">/twitter</ListLink>
        <ListLink to="https://soundcloud.com/awave1/tracks">
          /soundclound
        </ListLink>
      </List>
    </Layout>
  );
}
