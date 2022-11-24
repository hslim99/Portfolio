import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Section } from "react-fullpage";
import ImgFE3 from "../../../assets/fe-lv3.png";
import ImgFE2 from "../../../assets/fe-lv2.png";
import ImgFE1 from "../../../assets/fe-lv1.png";
import ImgBE2 from "../../../assets/be-lv2.png";
import ImgBE1 from "../../../assets/be-lv1.png";
import ImgMisc from "../../../assets/misc.png";
import styled from "styled-components";

const SkillImg = styled.img`
  margin: 8px;
  max-width: 256px;
  display: block;
`;

const YellowBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffdd;
`;

const TooltipBox = styled.div`
  position: absolute;
  top: calc(200vh);
  right: 0;
  transform: translateY(-100%);
  opacity: 90%;
  transition: ease-out 0.2s;

  &:hover {
    opacity: 30%;
  }
`;

const SkillSection = () => {
  return (
    <Section>
      <YellowBg>
        <Typography
          variant="h3"
          sx={{ padding: "4rem", fontFamily: "NEXON Lv2 Gothic Bold" }}
        >
          Skills
        </Typography>
        <Box
          sx={{
            backgroundColor: "#eec",
            borderRadius: "5rem",
            paddingTop: "32px",
          }}
        >
          <Grid
            container
            sx={{
              width: "max-content",
              margin: "auto",
            }}
            columnSpacing={12}
          >
            <Grid item xs={4} align="left">
              <Typography
                variant="h3"
                sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
              >
                프론트엔드
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
              >
                Level 3
              </Typography>
              <SkillImg src={ImgFE3} />
              <Typography
                variant="h4"
                sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
              >
                Level 2
              </Typography>
              <SkillImg src={ImgFE2} />
              <Typography
                variant="h4"
                sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
              >
                Level 1
              </Typography>
              <SkillImg src={ImgFE1} />
            </Grid>
            <Grid item xs={4} align="left">
              <Typography
                variant="h3"
                sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
              >
                백엔드
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
              >
                Level 2
              </Typography>
              <SkillImg src={ImgBE2} />
              <Typography
                variant="h4"
                sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
              >
                Level 1
              </Typography>
              <SkillImg src={ImgBE1} />
            </Grid>
            <Grid item xs={4} align="left">
              <Typography
                variant="h3"
                sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
              >
                기타
              </Typography>
              <SkillImg src={ImgMisc} />
            </Grid>
          </Grid>
        </Box>
        <TooltipBox>
          <div
            style={{
              padding: "1rem",
              fontSize: "1.5rem",
              backgroundColor: "#ddb",
              borderRadius: "2rem 0 0 0",
              whiteSpace: "pre-wrap",
            }}
          >
            {`Level 1: 해당 기술을 사용해 본 경험이 있음.\n
Level 2: 해당 기술에서 자주 사용되는 기본적인 테크닉을 이해하고, 검색을 통해 응용할 수 있음.\n
Level 3: 해당 기술을 통해 중간 이상 규모의 프로젝트를 제작할 수 있음.`}
          </div>
        </TooltipBox>
      </YellowBg>
    </Section>
  );
};

export default SkillSection;
