import React from 'react';

const AnimalPopup = ({ animal, onClose }) => {
  if (!animal) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded shadow-lg max-w-lg w-full max-h-full overflow-y-auto popup-container">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <div>
          <img src={animal.image} alt={animal.name} className="h-64 w-full object-cover mb-4" />
          <h2 className="text-2xl font-bold mb-2">{animal.name}</h2>
          {animal.species && <p><strong>Species:</strong> {animal.species}</p>}
          {animal.family && <p><strong>Family:</strong> {animal.family}</p>}
          {animal.habitat && <p><strong>Habitat:</strong> {animal.habitat}</p>}
          {animal.place_of_found && <p><strong>Place of Found:</strong> {animal.place_of_found}</p>}
          {animal.diet && <p><strong>Diet:</strong> {animal.diet}</p>}
          {animal.description && <p><strong>Description:</strong> {animal.description}</p>}
          {animal.weight_kg !== null && animal.weight_kg !== undefined && <p><strong>Weight:</strong> {animal.weight_kg} kg</p>}
          {animal.height_cm !== null && animal.height_cm !== undefined && <p><strong>Height:</strong> {animal.height_cm} cm</p>}
          {animal.temperament && <p><strong>Temperament:</strong> {animal.temperament}</p>}
          {animal.origin && <p><strong>Origin:</strong> {animal.origin}</p>}
          {animal.colors && <p><strong>Colors:</strong> {animal.colors.join(', ')}</p>}
          {animal.breed_group && <p><strong>Breed Group:</strong> {animal.breed_group}</p>}
          {animal.size && <p><strong>Size:</strong> {animal.size}</p>}
          {animal.lifespan && <p><strong>Lifespan:</strong> {animal.lifespan}</p>}
        </div>
      </div>
    </div>
  );
};

export default AnimalPopup;
