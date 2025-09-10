import Image from "next/image";

interface RatingProps {
  rating: number; // e.g. 3.5
  max?: number; // default 5
}

export default function Rating({ rating, max = 5 }: RatingProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1;

        // full star if rating >= current index
        const isFull = rating >= starValue;

        // half star if rating in between (optional)
        const isHalf = !isFull && rating >= starValue - 0.5;

        return (
          <div key={i}>
            {isFull ? (
              <Image
                src="/properties/rating-star.svg"
                alt="Star"
                width={15}
                height={15}
              />
            ) : isHalf ? (
              <Image
                src="/properties/rating-half-star.svg"
                alt="Half Star"
                width={15}
                height={15}
              />
            ) : (
              <Image
                src="/properties/rating-half-star.svg"
                alt="Empty Star"
                width={15}
                height={15}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
