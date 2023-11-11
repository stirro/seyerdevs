import React from 'react';

const contacts = [
  {
    name: 'Ing. Sergio Uriel Reyes Tirro',
    numero: '55 3108-5230',
    email: 'sergiotirro@outlook.com',
    linkedin: 'Sergio Uriel Reyes Tirro',
    github: 'stirro',
  },

];

const ContactListPopup = ({ isOpen, onClose }) => {
  return (
    <div className={`contact-popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Estemos en contacto!!</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <strong>{contact.name}</strong>
              <p>Número: <a href={`tel:${contact.numero}`}>{contact.numero}</a></p>
              <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              <p>LinkedIn: <a href={`https://www.linkedin.com/in/sergio-uriel-reyes-tirro-5b638021b/${contact.linkedin}`} target="_blank" rel="noopener noreferrer">{contact.linkedin}</a></p>
              <p>GitHub: <a href={`https://github.com/${contact.github}`} target="_blank" rel="noopener noreferrer">{contact.github}</a></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactListPopup;