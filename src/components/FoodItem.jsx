import React from 'react'

export default function FoodItem({key, food}) {
  return (
    <div>
        <img src={food.image}></img>
        <h3>{food.title}</h3>
    </div>
  )
}
