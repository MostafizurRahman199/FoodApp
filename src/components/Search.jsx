import React, { useEffect, useState } from "react";

export default function Search({foodData, setFoodData}) {

  const url = "https://dummyjson.com/recipes/search";
  const apiKey = "e3991f8448fc47c3a68cbc5af9e729bd";

  const [query, setQuery] = useState("");
  

  useEffect(() => {

    async function  fetchFood() {
      const response = await fetch(`${url}?q=${query}`);
     const data = await response.json();
    
     setFoodData(data.recipes);
     console.log(data.recipes);

    }

   fetchFood();
  }, [query]);

  return (
    <div className="flex justify-center mt-4">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="fixed top-24 font-thin text-center outline-none border-b-2 w-1/3 border-pink-600 text-3xl text-pink-600 focus:border-violet-600 border-l-none border-r-none shadow-2xl  focus:text-violet-600"
        placeholder="Enter Food Name"  
      />


    </div>
  );
}
