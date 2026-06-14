
import React, { createContext, useState } from 'react'

export const RatingContext=createContext()
export  function RatingProvider({children}) {
      const [reviews,setReviews]=useState([])
      const addReview=(review)=>{
            setReviews((prev)=>[...prev,review])

      }
  return (
<RatingContext.Provider value={{reviews,addReview}}>
    {children}
</RatingContext.Provider>
  )
}
