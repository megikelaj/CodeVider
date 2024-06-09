import React from 'react';

const AnimalCard = ({ animal, onClick }) => {
  return (
    <div className="border p-4" onClick={() => onClick(animal)}>
      <img src={animal.image} alt={animal.name} className="h-32 w-full object-cover" />
      <h2 className="text-lg font-bold">{animal.name}</h2>
      <p>{animal.origin}</p>
    </div>
  );
};

export default AnimalCard;
