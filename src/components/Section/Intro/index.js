import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { Header, Section } from "react-fullpage";

const IntroSection = () => {
  return (
    <Section>
      <Header>
        <Typography variant="h2" sx={{ margin: "2rem" }}>
          Introduction
        </Typography>
      </Header>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <Grid container sx={{ margin: "auto", fontSize: "2.5rem" }}>
          <Grid
            item
            xs={6}
            align="right"
            sx={{
              padding: "1rem",
              margin: "auto",
            }}
          >
            안녕하세요!
            <br />
            슬로우 스타터
            <br />
            프론트엔드 개발자
            <br />
            임현수입니다.
          </Grid>
          <Grid item xs={6} sx={{ padding: "1rem", margin: "auto" }}>
            <List sx={{ marginRight: "100px" }}>
              <ListItemButton href="mailto:hslim9909@gmail.com">
                <ListItemIcon>
                  <EmailIcon htmlColor="black" fontSize="2rem" />
                </ListItemIcon>
                <ListItemText disableTypography sx={{ fontSize: "1.5rem" }}>
                  hslim9909@gmail.com
                </ListItemText>
              </ListItemButton>
              <ListItemButton
                href="https://jigeumbaro.tistory.com"
                target="_blank"
              >
                <ListItemIcon>
                  <BookIcon htmlColor="black" fontSize="2rem" />
                </ListItemIcon>
                <ListItemText disableTypography sx={{ fontSize: "1.5rem" }}>
                  https://jigeumbaro.tistory.com
                </ListItemText>
              </ListItemButton>
              <ListItemButton href="https://github.com/hslim99" target="_blank">
                <ListItemIcon>
                  <GitHubIcon htmlColor="black" fontSize="2rem" />
                </ListItemIcon>
                <ListItemText disableTypography sx={{ fontSize: "1.5rem" }}>
                  https://github.com/hslim99
                </ListItemText>
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default IntroSection;
