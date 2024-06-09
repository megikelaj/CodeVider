import React, { useState } from 'react';
import Menu from './components/Menu';
import { AnimalGallery, AboutUs, ContactUs, AnimalPopup } from './components';
function App() {
  const [type, setType] = useState('Cat');
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <div className="App">
      <Menu setType={setType} />
      <AnimalGallery type={type} onAnimalClick={setSelectedAnimal} />
      {selectedAnimal && <AnimalPopup animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />}
      <AboutUs/>
      <ContactUs/>
    </div>
  );
}

export default App;
