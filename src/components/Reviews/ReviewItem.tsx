import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import React from "react";

export function ReviewItem() {
  const [more, setMore] = React.useState(false);

  return (
    <CardContent>
      <Typography>Reviews</Typography>
    </CardContent>
  );
}
