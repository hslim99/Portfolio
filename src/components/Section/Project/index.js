import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Section } from "react-fullpage";
import Carousel from "react-material-ui-carousel";
import styled from "styled-components";

const settings = {
  autoPlay: false,
  navButtonsAlwaysVisible: true,
  animation: "slide",
  duration: 500,
  sx: {
    backgroundColor: "d4eecc",
    borderRadius: "5rem",
    margin: "0 80px",
  },
  swipe: false,
};

const GrassBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e5ffdd;
`;

const stackBadge = {
  HTML: {
    name: "HTML5",
    color: "E34F26",
    logoColor: "white",
  },
  CSS: {
    name: "CSS3",
    color: "1572B6",
    logoColor: "white",
  },
  JavaScript: {
    name: "JavaScript",
    color: "F7DF1E",
    logoColor: "black",
  },
  React: {
    name: "React",
    color: "61DAFB",
    logoColor: "white",
  },
  TypeScript: {
    name: "TypeScript",
    color: "3178C6",
    logoColor: "white",
  },
  jQuery: {
    name: "jQuery",
    color: "0769AD",
    logoColor: "white",
  },
  Nodejs: {
    name: "Node.js",
    color: "339933",
    logoColor: "white",
  },
  Express: {
    name: "Express",
    color: "000000",
    logoColor: "white",
  },
  Django: {
    name: "Django",
    color: "092E20",
    logoColor: "white",
  },
  SocketIO: {
    name: "Socket.IO",
    color: "010101",
    logoColor: "white",
  },
};

const ProjectSection = () => {
  const items = [
    {
      name: "KU-BUS",
      description: `고려대학교 장애학생지원센터 산하 장애학생이동지원 셔틀 예약 웹 어플리케이션입니다.\n
Google Docs로 일일이 기입란을 채워넣어서 예약했어야 하는 데에서 오는 불편함을 방지하기 위해 제작이 추진되었습니다.`,
      stack: ["HTML", "CSS", "JavaScript", "jQuery", "Nodejs", "Express"],
      contribution: [
        "주로 모바일 기기에서 사용되는 특성을 고려하여 모바일에 맞는 UI 작성",
        "콜 탑승/하차 위치를 지정하기 위한 카카오 맵과 연동한 지도 뷰 작성",
        "카카오 로그인 API를 이용한 소셜 로그인 연동",
      ],
      externalLinks: [
        { name: "GitHub", url: "https://github.com/hslim99/KU-BUS" },
      ],
    },
    {
      name: "(주)메디컬에이아이/사내 프로젝트 전용 회고 툴 개발",
      description: `애자일 소프트웨어 개발을 통한 스프린트 회고를 위해 사내 프로젝트 전용 회고 툴을 개발하였습니다.\n
카테고리 추가, 코멘트 기능 등 기존에 사용했던 외부 툴과의 차별을 중심으로 진행했습니다.\n
실제 사용을 염두에 두었기 때문에 꾸준한 피드백이 진행되었습니다.`,
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Nodejs",
        "Express",
        "SocketIO",
      ],
      contribution: [
        "디자인 팀의 명세를 통한 프론트엔드 컴포넌트 디자인 구현 담당",
        "프론트엔드를 통한 CRUD API 연동 담당",
        "실시간 코멘트 상호작용을 위하여 Socket.IO를 통한 소켓 통신 연동",
      ],
    },
    {
      name: "(주)메디컬에이아이/사내 시스템 관리 페이지 개발",
      description: `사내에 인가된 사용자만이 접근할 수 있는 시스템 관리 페이지를 개발하였습니다.\n
해당 페이지에서 유저를 관리하거나 일반 사용자에게 보이는 공지 사항 등을 관리할 수 있습니다.`,
      stack: ["HTML", "CSS", "TypeScript", "React"],
      contribution: [
        "시스템 내부 게시판 CRUD API 연동",
        "게시글 리스트 API를 불러와 Pagination 기능 구현",
        "WYSIWYG 에디터를 도입하기 위한 프로토타입 작성",
      ],
    },
    {
      name: "(주)메디컬에이아이/UI 공통화 라이브러리 개발",
      description: `사내에서 제작한 웹 페이지의 UI의 일관성을 유지하기 위한 UI 공통화 라이브러리를 개발하였습니다.\n
기존 UI 라이브러리인 MaterialUI를 레퍼런스로 하였습니다.`,
      stack: ["HTML", "CSS", "TypeScript", "React"],
      contribution: [
        "디자인 팀의 명세를 통한 컴포넌트 공통화 작업 진행",
        "회사 사업 모델을 고려하여 다양한 해상도의 기기에 대응하기 위한 반응형 디자인 채용",
        "배포된 라이브러리를 통하여 기존 프론트엔드 페이지의 컴포넌트 교체",
      ],
    },
    {
      name: "(주)메디컬에이아이/고객용 의료 정보 페이지 개발",
      description: `고객에게 표시할 환자 별 의료 정보 페이지를 개발하였습니다.\n
메인 페이지에서는 선택한 환자마다 의료 정보를 한눈에 볼 수 있도록 하고,\n
상세 페이지에서는 선택한 환자의 특정 진료 정보를 개별로 자세히 표시할 수 있어야 했습니다.`,
      stack: ["HTML", "CSS", "TypeScript", "React"],
      contribution: [
        "진단 결과 표시에 적합한 그래프 라이브러리 리서치 진행",
        "진단 결과를 취합하여 그래프로 표시하는 작업 진행",
        "상세 정보를 표시할 때 사용되는 사내 심전도 그래프 라이브러리의 TypeScript 마이그레이션 진행",
      ],
    },
  ];

  return (
    <Section>
      <GrassBg>
        <Typography
          variant="h3"
          sx={{ padding: "4rem", fontFamily: "NEXON Lv2 Gothic Bold" }}
        >
          Projects
        </Typography>
        <div style={{ backgroundColor: "#d4eecc", borderRadius: "5rem" }}>
          <Carousel {...settings}>
            {items.map((item, i) => (
              <Box
                key={i}
                sx={{
                  padding: "40px 80px",
                  height: "60vh",
                  fontSize: "1.5rem",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
                >
                  {item.name}
                </Typography>
                <div style={{ padding: "1rem" }}>
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {item.description}
                  </div>
                  <Divider sx={{ margin: "1rem 0" }} />
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
                  >
                    Contributions
                  </Typography>
                  <ul>
                    {item?.contribution.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Divider sx={{ margin: "1rem 0" }} />
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
                  >
                    Stacks
                  </Typography>
                  {item?.stack.map((item, i) => {
                    if (stackBadge[item] == undefined) {
                      return;
                    }
                    return (
                      <img
                        key={i}
                        src={`https://img.shields.io/badge/${stackBadge[item].name}-${stackBadge[item].color}?style=for-the-badge&logo=${stackBadge[item].name}&logoColor=${stackBadge[item].logoColor}`}
                      ></img>
                    );
                  })}
                  {item?.externalLinks && (
                    <>
                      <Divider sx={{ margin: "1rem 0" }} />
                      <Typography
                        variant="h5"
                        sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
                      >
                        External Links
                      </Typography>
                      {item.externalLinks.map((item, i) => (
                        <Typography
                          key={i}
                          variant="body1"
                          sx={{ fontFamily: "NEXON Lv2 Gothic" }}
                        >
                          <span>{item.name}</span>{" "}
                          <a href={item.url}>{item.url}</a>
                        </Typography>
                      ))}
                    </>
                  )}
                </div>
              </Box>
            ))}
          </Carousel>
        </div>
      </GrassBg>
    </Section>
  );
};

export default ProjectSection;
