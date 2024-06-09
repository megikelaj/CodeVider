import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">Feel free to reach out to us with any questions or feedback.</p>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full mb-4 p-2 border border-gray-300 rounded"
            rows="4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
