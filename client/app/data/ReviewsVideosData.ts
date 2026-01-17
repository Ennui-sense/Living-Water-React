import firstVideoPreview from "~/assets/images/reviews/1.jpg"
import secondVideoPreview from "~/assets/images/reviews/2.jpg"
import thirdVideoPreview from "~/assets/images/reviews/3.jpg"

export interface IReviewsVideo {
  srcVideo: string;
  srcPreview: string;
  maxWidthVideo: number;
}

export const ReviewsVideosData: IReviewsVideo[] = [
  {
    srcVideo: "/video/reviews/1.mp4",
    srcPreview: firstVideoPreview,
    maxWidthVideo: 1100,
  },
  {
    srcVideo: "/video/reviews/2.mp4",
    srcPreview: secondVideoPreview,
    maxWidthVideo: 450,
  },
  {
    srcVideo: "/video/reviews/3.mp4",
    srcPreview: thirdVideoPreview,
    maxWidthVideo: 1100,
  },
];
