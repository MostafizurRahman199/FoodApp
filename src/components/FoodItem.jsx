import React, { useState } from 'react'
import ModalDetails from './ModalDetails';

export default function FoodItem({key, food}) {

// const [foodId, setFoodId] = useState("");
// const [modalOpen, setModalOpen] = useState(false); 

const [foodId, setFoodId] = useState("");
const [modalOpen, setModalOpen] = useState(false);

const handleModalOne = ()=>{
    setModalOpen(true);
    setFoodId(food.id);
}

const handleModal = (btn)=>{
    setModalOpen(btn)
}

// const handleModalOne = ()=>{
//     setModalOpen(true);
//     setFoodId(food.id);
// }

// const handleModal = (btn)=>{
//     setModalOpen(btn);

//   }

console.log(foodId);
  return (
    <div className='rounded-lg shadow-lg w-auto h-auto bg-gray-50 p-4 hover:shadow-2xl'>
        <img src={food.image} className='w-full overflow-hidden rounded-lg'></img>
        <div className='p-2'>
            <p className='font-semibold text-2xl text-center'>{food.name}</p>
        </div>
        <div className='flex justify-center'>
            <button className='bg-violet-600 text-white p-2 rounded-lg font-semibold flex justify-center mb-4' onClick={()=>{handleModalOne()}}>View Recipe</button>
        </div>
        {/* { modalOpen && <ModalDetails handleModal={handleModal} food={food} id={foodId}/>} */}

     {
        modalOpen && <ModalDetails handleModal={handleModal} food={food} id={foodId}/>
     }
    </div>
  )
}
