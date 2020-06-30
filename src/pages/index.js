import React from "react";
import Page from "../components/Page";

export default function IndexPage() {
  return (
    <Page>
      <h1>
        Hey{" "}
        <span role="img" alt="Waving hand">
          👋
        </span>
        <br />
        I'm Artem
      </h1>
      <br />
      <p style={{ fontSize: 22 }}>
        Software Developer by day, Beatmaker by night
      </p>
      <p style={{ fontSize: 20 }}>
        I'm passionate about Software Development, Hip-Hop/R&B, and Photography.
        I enjoy building many different things, from beautiful user interfaces
        to backend APIs and compilers 👾
      </p>
    </Page>
  );
}
