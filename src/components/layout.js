import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import './layout.css';

const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  padding-top: 0;
  height: 100vh;

  h1,
  h3,
  a {
    font-family: Hack, monospace;
    margin: 0;
  }
`;

const Layout = ({ children }) => (
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
    render={data => (
      <Content>
        <Helmet>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css"
          />
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        {children}
      </Content>
    )}
  />
);

export default Layout;
