
import React from 'react'
import AboutWebtellz from '../About/About.jsx'
import Rating from './Rating.jsx'

export default function RatingList() {
      const [reviews,setReviews]=useState([])
  return (
<>
<AboutWebtellz reviews={reviews}/>
<Rating reviews={reviews} setReviews={setReviews}/>
</>
  )
}
