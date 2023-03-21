import * as React from "react";
import Stack from '@mui/material/Stack';
import Rating from "@mui/material/Rating";
import { useGetReviewsQuery } from "../../../store/api/review";
import { Product } from "../../../store/models/products";

export function RatingProduct({ id }: Product) {
  const { data: ratings } = useGetReviewsQuery(id);
  const avgRating = ratings?.reduce(
    (prevRating, curRating) => (prevRating + curRating.stars) / ratings?.length,
    0
  );
  console.log(avgRating);
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={avgRating}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
