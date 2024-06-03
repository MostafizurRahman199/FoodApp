import React from 'react'
import FoodItem from './FoodItem'

export default function FoodList({foodData}) {
  return (
    <div>
        {
            foodData.map((food, index)=>(
                <FoodItem food={food} key={food.id}></FoodItem>
            ))
        }
    </div>
  )
}
