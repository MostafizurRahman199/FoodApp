import React, { useEffect, useState } from "react";

export default function Search({foodData, setFoodData}) {

  const url = "https://api.spoonacular.com/recipes/complexSearch";
  const apiKey = "e3991f8448fc47c3a68cbc5af9e729bd";

  const [query, setQuery] = useState("pizza");
  

  useEffect(() => {

    async function  fetchFood() {
      const response = await fetch(`${url}?query=${query}&apiKey=${apiKey}`);
     const data = await response.json();
     setFoodData(data.results);
     console.log(foodData);

    }

   fetchFood();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="border rounded-lg focus:ring-2 outline-none text-2xl"
        placeholder="Enter Food Name"
      />
    </div>
  );
}
