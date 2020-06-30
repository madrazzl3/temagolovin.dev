import React from "react";
import styled from "styled-components";
import Page from "../components/Page";
import { Link } from "../components/List";

const GHCard = styled.div`
  background-color: #171717;
  height: auto;
  box-shadow: 1px 1px 25px #00000063;
  padding: 16px;
  border-radius: 4px;

  a {
    text-decoration: underline;
    padding: 0;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

function Card({ title, children, to }) {
  return (
    <GHCard>
      <h3>
        <Link to={to}>{title}</Link>
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

const gh = (name = "") => `http://github.com/awave1/${name}`;

export default function WorkPage() {
  return (
    <Page>
      <h1>Work</h1>
      <p>
        You can find all of my work on my <Link to={gh()}>GitHub</Link>, but
        here are some of my favorite projects that I've worked on
      </p>

      <Container>
        <Card title="jay - compiler project" to={gh("jay")}>
          CPSC 411, University of Calgary Compiler Design term project. Designed
          and developed a compiler for J-- (subset of Java). Compiler
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
          <Link to="https://code-the-change-yyc-19.devpost.com/">
            CodeTheChange YYC
          </Link>{" "}
          Hackathon. It's a footprint tracker that lets you calculate potential
          amount of carbon that you would emit when planning a trip. The project
          was written using React Native &amp; Node.js.
        </Card>
        <Card title="Droider" to={gh("Droider")}>
          One of my first Android projects. It's a mobile client for a Russian
          tech blog <Link href="http://droider.ru/">Droider.ru</Link>. This
          project made me more interested in Android and Frontend development.
        </Card>
      </Container>
    </Page>
  );
}
