import { Grid, Typography } from "@mui/material";
import React from "react";
import Section from "react-fullpage/dist/Section";

const SkillSection = () => {
  return (
    <Section>
      <Typography variant="h3" sx={{ margin: "2rem" }}>
        Skills
      </Typography>
      <Grid container>
        <Grid item xs={4} align="center">
          <Typography variant="h3">프론트엔드</Typography>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Storybook</li>
            <li>jQuery</li>
          </ul>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="h3">백엔드</Typography>
          <ul>
            <li>Node.js</li>
            <li>express.js</li>
            <li>Django</li>
          </ul>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="h3">기타</Typography>
          <ul>
            <li>git</li>
            <li>Jira</li>
            <li>Confluence</li>
            <li>Zeplin</li>
            <li>Figma</li>
          </ul>
        </Grid>
      </Grid>
    </Section>
  );
};

export default SkillSection;
