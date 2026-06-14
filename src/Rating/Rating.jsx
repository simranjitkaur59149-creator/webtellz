import React, { useContext, useState } from "react";
import "./rating.css";
import { Star } from "lucide-react";
import { RatingContext } from "../RatingContext.jsx";
export default function Rating() {
  const {addReview}=useContext(RatingContext)
  const [rating, setRating] = useState(0);
  const [comment,setComment]=useState("")
  // const [reviews,setReviews]=useState([])

  const handleRating = (value) => {
    setRating(value);
  };
  // const addReview = (e) => {
    // setComment(e.target.value)
  //   console.log(e.target.value)
  // };
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newReview={
      rating,comment
    }
    addReview(newReview)
    // setReviews([...reviews,newReview])
    setRating(0)
setComment("")


  }
  return (
    <>
      <section className="rating-sec">
        <form onSubmit={handleSubmit}>
          <h1>Rate Us</h1>
          <span className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => handleRating(star)}
                fill={star <= rating ? "gold" : "none"}
                required
              />
            ))}
          </span>
          <textarea
            name="comment"
            id="comment"
            value={comment}
            placeholder="Add your Review"
          
            onChange={(e)=>    setComment(e.target.value)
}
            required
          />
          <div>
            {/* <button>Add Comment</button>  */}
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
{/* <Rating reviews={reviews}/> */}
    </>
  );
}
