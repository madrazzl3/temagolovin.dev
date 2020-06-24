import React from "react";
import styled from "styled-components";
import { Toolbar } from "./Toolbar";
import { Waves } from "./Waves";

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

const Page = ({ children }) => (
  <Wrapper>
    <div style={{ maxWidth: "760px", width: "100%", margin: "0 auto" }}>
      <Toolbar />
      <Content>{children}</Content>
    </div>
    <Waves />
  </Wrapper>
);

export default Page;
