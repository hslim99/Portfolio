import { Box, Typography } from "@mui/material";
import React from "react";
import { Section } from "react-fullpage";
import Carousel from "react-material-ui-carousel";

const settings = {
  autoPlay: false,
  navButtonsAlwaysVisible: true,
  animation: "slide",
  duration: 500,
};

const ProjectSelection = () => {
  const items = [
    {
      name: "KU-BUS",
      description: "상세 설명",
    },
    {
      name: "MedicalAI",
      description: "상세 설명",
    },
  ];

  return (
    <Section>
      <Typography variant="h3" sx={{ margin: "2rem" }}>
        Projects
      </Typography>
      <Carousel {...settings}>
        {items.map((item, i) => (
          <Box key={i} sx={{ padding: "0px 80px" }}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </Box>
        ))}
      </Carousel>
    </Section>
  );
};

export default ProjectSelection;
