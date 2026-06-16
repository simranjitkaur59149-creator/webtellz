import React, { useContext, useState } from "react";
import "./rating.css";
import { Star } from "lucide-react";
import { RatingContext } from "../RatingContext.jsx";
import { toast, ToastContainer } from "react-toastify";
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
    if(rating===0 || comment===""){
      toast.error("Please rate us ")
      return;

    }

    const newReview={
      rating,comment
    }
    addReview(newReview)
     toast.success("Thank you for your review!");
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
     
            <button style={{background:"linear-gradient(135deg, #60a5fa, #818cf8, #22d3ee)",color:"white"}} type="submit">Submit</button>
          </div>
        </form>
      </section>
      <ToastContainer/>

    </>
  );
}
