export interface RequestReview {
  review: Review;
  comment: Comment;
}

export interface Review {
  stars: number;
}

export interface Comment {
  comment: string;
  created_date: string;
}

export interface ResponseReview {
  comments: Comments;
  stars: number;
}

export interface Comments {
  id: number;
}
