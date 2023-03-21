import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { pathApi } from "..";
import { RequestReview, ResponseReview } from "../../models/reviews";
import { useGetCookie } from "../../../utils/getCookie";
import { Cookies } from "react-cookie";

export const review = createApi({
  reducerPath: "api/review",
  baseQuery: fetchBaseQuery({
    baseUrl: pathApi,
    prepareHeaders: (headers, { getState }) => {
      const cookie = new Cookies();
      if (cookie.get("token")) {
        headers.set("Authorization", `Bearer ${cookie.get("token")}`);
        headers.set("Content-type", "Application/JSON");
      }
      return headers;
    },
  }),
  tagTypes: ["reviews"],
  endpoints: (build) => ({
    getReviews: build.query<ResponseReview[], number>({
      query: (id) => {
        return {
          url: `products/${id}/reviews`,
          method: "GET",
        };
      },
      providesTags: ["reviews"],
    }),
    setReview: build.mutation<
      RequestReview,
      { review: RequestReview; id: number }
    >({
      query: ({ review, id }) => {
        return {
          url: `products/${id}/reviews`,
          method: "POST",
          body: review,
        };
      },
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetReviewsQuery, useSetReviewMutation } = review;
