
import React, { createContext, useEffect, useState } from 'react'

export const RatingContext=createContext()
export  function RatingProvider({children}) {
      const [reviews,setReviews]=useState(()=>{
        const savedReviews=localStorage.getItem("reviews")
        return savedReviews?JSON.parse(savedReviews):[]
      })
      const addReview=(review)=>{
            setReviews((prev)=>[...prev,review])

      }
      useEffect(()=>{
        localStorage.setItem("reviews",JSON.stringify(reviews))
      },[reviews])
  return (
<RatingContext.Provider value={{reviews,addReview}}>
    {children}
</RatingContext.Provider>
  )
}
