import React from "react";
import styled from "styled-components";
import Page from "../components/Page";
import { Link } from "react-router-dom";

const GHCard = styled.div`
  background-color: #171717;
  height: auto;
  width: 100%;
  box-shadow: 1px 1px 25px #00000063;
  padding: 16px;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

function Card({ title, children, to }) {
  return (
    <GHCard>
      <h3>
        <a href={to}>{title}</a>
      </h3>
      <p>{children}</p>
    </GHCard>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px auto;
`;

const gh = (name) => `http://github.com/awave1/${name}`;

export default function WorkPage() {
  return (
    <Page>
      <h1>Work</h1>
      <Container>
        <Card title="jay - compiler project" to={gh("jay")}>
          CPSC 411, University of Calgary Compiler Design term project. Designed
          and developed a compiler for for J-- (subset of Java). Compiler
          produces WebAssembly code, that can be potentially run in the browser.
          Initially was written using Bison, Flex &amp; C++, currently working
          on rewriting the compiler entirely in Rust.
        </Card>
        <Card title="Apptitude - Fitness tracker" to={gh("fitness-tracker")}>
          A group project for CPSC 471, Databases class at University of
          Calgary. This project helped to explore possibilities of SQLite on
          Android and strengthened my SQL knowledge. The app allows you to track
          your fitness needs - from workouts to nutrition.
        </Card>
        <Card
          title="Carbon Footprint Tracker"
          to={gh("carbonfootprint-frontend")}
        >
          A project developed during{" "}
          <a href="https://code-the-change-yyc-19.devpost.com/">
            CodeTheChange YYC
          </a>{" "}
          Hackathon. It's a footprint tracker that lets you calculate potential
          amount of carbon that you would emit when planning a trip. The project
          was written using React Native &amp; Node.js.
        </Card>
      </Container>
    </Page>
  );
}
