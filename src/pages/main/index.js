import React from "react";
import { SectionsContainer } from "react-fullpage";
import IntroSection from "../../components/Section/Intro";
import ProjectSection from "../../components/Section/Project";
import SkillSection from "../../components/Section/Skill";
import TimelineSection from "../../components/Section/Timeline";

const options = {
  anchors: ["intro", "skill", "project", "timeline"],
  delay: 800,
};

const Main = () => {
  return (
    <>
      <SectionsContainer {...options}>
        <IntroSection />
        <SkillSection />
        <ProjectSection />
        <TimelineSection />
      </SectionsContainer>
    </>
  );
};

export default Main;
