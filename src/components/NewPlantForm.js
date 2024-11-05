import React from "react";
import {useState} from 'react'

function NewPlantForm( {plants, setPlants} ) {
  
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  
  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeImageUrl = (event) => setImageUrl(event.target.value);
  const handleChangePrice = (event) => setPrice(event.target.value);

  function resetForm(){
    setName('')
    setImageUrl('')
    setPrice('')
  };

  async function handleSubmit(event){
    event.preventDefault()
    const newPlant= {
      name:name,
      image:imageUrl,
      price:price
    };

    try{
      const response = await fetch('http://localhost:6001/plants', {
            method:'POST',
            headers: {'Content-Type': 'application/json', 'Accept':'application/json'},
            body: JSON.stringify(newPlant)
      });

      const data = await response.json();

      const updatedPlants = [...plants, data];

      setPlants(updatedPlants);

      resetForm();
    } catch (error){
      console.warn(error)
      alert("a grievous error was made")
    }
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        name="name" 
        placeholder="Plant name" 
        value={name}
        onChange={handleChangeName}/>
        <input type="text" 
        name="image" 
        placeholder="Image URL" 
        value={imageUrl}
        onChange={handleChangeImageUrl}/>
        <input type="number" 
        name="price"
         step="0.01" 
         placeholder="Price" 
         value={price}
         onChange={handleChangePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
