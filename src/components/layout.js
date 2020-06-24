import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { Toolbar } from './Toolbar';
import { Waves } from './Waves';

import './layout.css';
import './waves.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    rgba(33, 33, 33, 1) 67%,
    rgba(33, 33, 33, 0.91) 100%
  );
  min-height: 100vh;

  * {
    color: #ffffff;
  }

  h1,
  h3,
  a {
    font-family: Hack, monospace;
    margin: 0;
  }
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Layout = ({ children, renderAfter }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <Wrapper>
        <Helmet>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css"
          />
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <div style={{ maxWidth: '760px', width: '100%', margin: '0 auto' }}>
          <Toolbar />
          <Content>{children}</Content>
        </div>
        <Waves />
      </Wrapper>
    )}
  />
);

export default Layout;
