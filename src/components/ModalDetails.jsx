import React, { useState } from 'react';

export default function ModalDetails(props) {
  const [modalOpen, setModalOpen] = useState(true);
  const [image, setImage] = useState(true)
  console.log(props.food);

  const handleCancel = () => {
    props.handleModal(false);
  };

  return (
    <div
      id="price_modal"
      className={`fixed inset-0 z-50 ${modalOpen ? "" : "hidden"} flex items-center justify-center p-96`}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>

      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl mx-4 md:mx-8 lg:mx-auto z-10">
        <div className="flex items-center justify-center mb-4">
          <img
            src={props.food.image}
            className={`w-20 h-auto rounded-lg  hover:p-0`}
            alt="Food"
          />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 uppercase mb-4 text-center">
          {props.name}
        </h3>
        
        <div className="space-y-4 flex justify-between">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xl font-medium text-gray-800 mb-2">Ingredients</h4>
                <ul className="list-disc list-inside">
                  {props.food.ingredients.map((ingredient, index) => (
                    <li key={index} className="bg-pink-100 px-2 py-1 rounded mb-1 text-gray-700">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
  
              <div>
                <h4 className="text-xl font-medium text-gray-800 mb-2">Instructions</h4>
                <ol className="list-decimal list-inside">
                  {props.food.instructions.map((instruction, index) => (
                    <li key={index} className="bg-pink-100 px-2 py-1 rounded mb-1 text-gray-700">
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        
       

        <div className="mt-6 space-y-2">
       
          <button
            type="button"
            className="w-full py-2 px-4 bg-violet-600  border border-gray-300 text-gray-700 font-thin text-2xl rounded-md shadow-sm hover:bg-violet-500 transition duration-200 text-white"
            onClick={handleCancel}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
