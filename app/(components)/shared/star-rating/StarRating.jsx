import { Star } from "lucide-react";

function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < rating;
        return (
          <Star
            key={index}
            size={size}
            className={
              filled
                ? "fill-yellow-400 text-yellow-400"
                : "fill-none text-gray-300"
            }
          />
        );
      })}
    </div>
  );
}

export default StarRating;
