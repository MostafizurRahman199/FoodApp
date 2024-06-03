import React from 'react'
import FoodItem from './FoodItem'

export default function FoodList({foodData}) {
  return (
  <div className='flex justify-around p-56'>
      <div className='grid grid-cols-3 gap-4 '>
       
       {
            foodData?.map((food, index)=>(
                <FoodItem food={food} key={food.id}></FoodItem>
            ))
        }
       
    </div>
  </div>
  )
}
