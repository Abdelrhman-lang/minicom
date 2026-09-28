import Image from "next/image";
import React from "react";
import { FaComment } from "react-icons/fa";
import StarRating from "../../shared/star-rating/StarRating";
function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-[20px] px-5 pt-5 pb-14">
      <div className="flex items-center justify-between pb-8 border-b">
        <div className="flex items-center gap-5">
          <div>
            <Image
              src={review.image}
              alt="review-img"
              width={42}
              height={42}
              className=" rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-sm">{review.name} -</span>
              <span className="text-muted-foreground uppercase text-[10px] font-bold">
                from {review.countery}
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <FaComment className="w-16 h-16 text-muted-foreground" />
        </div>
      </div>
      <div className="pt-8 space-y-5">
        <StarRating rating={review.stars} />
        <p className="font-bold text-sm text-primary">{review.text}</p>
        <p className="text-sm text-muted leading-relaxed">{review.comment}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
