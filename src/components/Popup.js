import React from 'react';

const contacts = [
  {
    name: 'Ing. Sergio Uriel Reyes Tirro',
    numero: '55 3108-5230',
    email: 'sergiotirro@outlook.com',
    linkedin: 'Sergio Uriel Reyes Tirro',
    github: 'STIRRO',
  },

];

const ContactListPopup = ({ isOpen, onClose }) => {
  return (
    <div className={`contact-popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Contact List</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <strong>{contact.name}</strong>
              <p>Número: {contact.numero}</p>
              <p>Email: {contact.email}</p>
              <p>LinkedIn: {contact.linkedin}</p>
              <p>GitHub: {contact.github}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactListPopup;