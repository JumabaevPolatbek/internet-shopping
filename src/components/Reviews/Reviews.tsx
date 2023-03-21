import { Button, Rating, TextField } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RequestReview } from "../../store/models/reviews";
import { useSetReviewMutation } from "../../store/api/review";
import { Product } from "../../store/models/products";

export default function Reviews({ id }: Product) {
  const [setReview, result] = useSetReviewMutation();
  const [rating, setRating] = React.useState<number | null>(0);
  const getDay = new Date();
  const { handleSubmit, register, setValue } = useForm<RequestReview>({
    defaultValues: {
      comment: {
        comment: "",
        created_date: getDay.toLocaleString().replace(/,/g, ""),
      },
    },
  });

  const btnSubmit: SubmitHandler<RequestReview> = async (data) =>
    await setReview({
      review: {
        review: data.review,
        comment: data.comment,
      },
      id,
    });

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(btnSubmit)}>
      <div className="py-2">
        <TextField
          {...register("comment.comment")}
          label="Коментария"
          maxRows={5}
          multiline={true}
        />
      </div>
      <div className="py-2">
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
            setValue("review.stars", newValue || 0);
          }}
          precision={0.5}
        />
      </div>
      <div className="py-2">
        <Button type="submit" variant="contained" color="error">
          Оценить
        </Button>
      </div>
    </form>
  );
}
