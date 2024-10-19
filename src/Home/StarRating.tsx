
import { FaRegStar, FaStar } from 'react-icons/fa';

interface StarRatingProps {
    rating: number;
  }
const StarRating = ({rating}: StarRatingProps) => {
    const totalStars = 5

  return (
   <div>
    <div className='flex space-x-1 text-yellow-500'>
    {Array.from({ length: totalStars }, (_, index) => {
        // Display filled star if index is less than rating, else empty star
        return index + 1 <= rating ? (
          <FaStar key={index} />
        ) : (
          <FaRegStar key={index} />
        );
      })}
    </div>
   </div>
  )
}

export default StarRating