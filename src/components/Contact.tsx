import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        <p className="mt-6 text-gray-700">
          You can reach me by email at <a className="text-blue-600 underline" href="mailto:salome@lavine.com">salome@lavine.com</a>
          <br />
          or connect with me on <a className="text-blue-600 underline" href="https://www.linkedin.com/">LinkedIn</a>.
        </p>
      </div>
    </section>
  );
};

export default Contact;
