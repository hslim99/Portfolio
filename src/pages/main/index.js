import React from "react";
import { SectionsContainer } from "react-fullpage";
import IntroSection from "../../components/Section/Intro";
import ProjectSelection from "../../components/Section/Project";
import SkillSection from "../../components/Section/Skill";

const options = {
  anchors: ["intro", "skill", "project"],
  delay: 800,
};

const Main = () => {
  return (
    <>
      <SectionsContainer {...options}>
        <IntroSection />
        <SkillSection />
        <ProjectSelection />
      </SectionsContainer>
    </>
  );
};

export default Main;
