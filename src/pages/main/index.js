import React from "react";
import { SectionsContainer, Section } from "react-fullpage";

const options = {
  anchors: ["sectionOne", "sectionTwo"],
};

const Main = () => {
  return (
    <>
      <SectionsContainer {...options}>
        <Section>1</Section>
        <Section>2</Section>
      </SectionsContainer>
    </>
  );
};

export default Main;
