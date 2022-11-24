import { Grid, Typography } from "@mui/material";
import React from "react";
import { Section } from "react-fullpage";
import styled from "styled-components";
import TimelineCard from "./Card";

const SkyBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ddffff;
`;

const timelineItem = [
  { content: "고려대학교 컴퓨터학과 입학", date: "2018년 3월" },
  { content: "KU-BUS 개발 참여", date: "2022년 2월" },
  { content: "(주)메디컬에이아이 인턴 입사", date: "2022년 3월" },
  { content: "(주)메디컬에이아이 정규직 전환", date: "2022년 7월" },
  { content: "(주)메디컬에이아이 퇴사", date: "2022년 8월 19일" },
  { content: "고려대학교 컴퓨터학과 졸업(예정)", date: "2023년 2월" },
];

const TimelineSection = () => {
  return (
    <Section>
      <SkyBg>
        <Typography
          variant="h3"
          sx={{ padding: "4rem", fontFamily: "NEXON Lv2 Gothic Bold" }}
        >
          Timeline
        </Typography>
        <Grid
          container
          style={{
            backgroundColor: "#cceeee",
            borderRadius: "5rem",
            padding: "2rem",
            width: "max-content",
            margin: "auto",
          }}
        >
          <Grid item xs={6} align="right" sx={{ margin: "auto" }}>
            {timelineItem.map((item, i) => (
              <TimelineCard
                key={i}
                content={item.content}
                date={item.date}
                visibility={i % 2}
              />
            ))}
          </Grid>
          <Grid item xs={6} sx={{ margin: "auto" }}>
            {timelineItem.map((item, i) => (
              <TimelineCard
                key={i}
                content={item.content}
                date={item.date}
                visibility={!(i % 2)}
              />
            ))}
          </Grid>
        </Grid>
      </SkyBg>
    </Section>
  );
};

export default TimelineSection;
