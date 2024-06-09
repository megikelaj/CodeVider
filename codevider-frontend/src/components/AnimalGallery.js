import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';

const AnimalGallery = ({ type, onAnimalClick }) => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/animals`)
      .then(response => response.json())
      .then(data => setAnimals(data.filter(el => el.type === type)))
      .catch(error => console.error('Error fetching data:', error));
  }, [type]);

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-4 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAnimals.map(animal => (
          <AnimalCard key={animal._id} animal={animal} onClick={onAnimalClick} />
        ))}
      </div>
    </div>
  );
};

export default AnimalGallery;
