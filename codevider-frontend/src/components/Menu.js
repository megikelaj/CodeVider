import React from 'react';

const Menu = ({ setType }) => {
    return (
        <div className="flex space-x-4 p-4 bg-gray-800 text-white">
            <button onClick={() => setType('Cat')}>Cats</button>
            <button onClick={() => setType('Dog')}>Dogs</button>
            <button onClick={() => setType('Bird')}>Birds</button>
            <button>
                <a href="#about-us">
                    About Us
                </a>
            </button>
            <button>
                <a href="#contact-us">
                    Contact Us
                </a>
            </button>

        </div>
    );
};

export default Menu;
