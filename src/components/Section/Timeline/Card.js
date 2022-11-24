import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";

// eslint-disable-next-line react/prop-types
const TimelineCard = ({ content, date, visibility }) => {
  return (
    <Card
      sx={{
        margin: "1rem",
        width: "max-content",
        visibility: visibility && "hidden",
      }}
    >
      <CardContent sx={{ padding: "0.5rem 1rem !important" }}>
        <Typography variant="h6" sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}>
          {content}
        </Typography>
        <Divider />
        <Typography
          variant="subtitle1"
          sx={{ fontFamily: "NEXON Lv2 Gothic Bold" }}
          align="right"
        >
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TimelineCard;
