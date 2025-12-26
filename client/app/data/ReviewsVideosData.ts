export interface IReviewsVideo {
  srcVideo: string;
  srcPreview: string;
  maxWidthVideo: number;
}

export const ReviewsVideosData: IReviewsVideo[] = [
  {
    srcVideo: "/video/reviews/1.mp4",
    srcPreview: "app/assets/images/reviews/1.jpg",
    maxWidthVideo: 1100,
  },
  {
    srcVideo: "/video/reviews/2.mp4",
    srcPreview: "app/assets/images/reviews/2.jpg",
    maxWidthVideo: 450,
  },
  {
    srcVideo: "/video/reviews/3.mp4",
    srcPreview: "app/assets/images/reviews/3.jpg",
    maxWidthVideo: 1100,
  },
];
