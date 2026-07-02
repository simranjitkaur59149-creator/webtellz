import React, { useContext, useState } from "react";
import "./rating.css";
import {
  Star,
  User,
  MessageSquare,
  Send,
  BadgeHelp,
  CircleStar,
  UserRound,
} from "lucide-react";
import { RatingContext } from "../RatingContext";
import { toast, ToastContainer } from "react-toastify";

export default function Rating() {
  const { addReview } = useContext(RatingContext);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || user === "" || comment === "") {
      toast.error("Please complete all fields.");
      return;
    }

    addReview({
      rating,
      user,
      comment,
    });

    toast.success("Thank you for your review!");

    setRating(0);
    setUser("");
    setComment("");
  };

  return (
    <>
      <section className="rating-sec">
        {/* <div className="dots-left"></div>
        <div className="dots-right"></div> */}

        <form onSubmit={handleSubmit}>
          {/* Header */}

          <div className="form-header">
  <div className="rating-icon-box">
    <CircleStar size={32} strokeWidth={2.2} />
  </div>

  <div className="header-content">
    <span className="header-tag">★★★★★ Client Feedback</span>

    <h1>
      Share Your <span>Experience</span>
    </h1>

  

    <p>
      Your feedback helps us improve and inspires future clients to trust our
      work.
    </p>
  </div>
</div>
          {/* Stars */}

          <div className="rating-box">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="star"
                onClick={() => setRating(star)}
                fill={star <= rating ? "#EFFF3C" : "transparent"}
                color={star <= rating ? "#EFFF3C" : "#F8FAFC"}
              />
            ))}
          </div>

          <small className="rate-text">↳ Tap a star to rate</small>
          {/* Name */}

          <div className="input-box">
            <UserRound className="rating-input-icon" />

            <input
              type="text"
              placeholder="Your Name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          {/* Review */}

          <div className="input-box textarea-box">
            <MessageSquare className="rating-input-icon" />

            <textarea
              placeholder="Add your Review"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button type="submit">
            <Send size={18} />
            Submit
          </button>
        </form>
      </section>

      <ToastContainer position="bottom-right" />
    </>
  );
}
