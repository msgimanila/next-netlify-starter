// Chat.js
import React, { useState, useEffect } from 'react';
import ImageRow from './ImageRow'; // Adjust the import path as needed
function Content() {
  const images = [
  {
    src: 'image1.jpg',
    alt: 'Image 1',
  },
  {
    src: 'image2.jpg',
    alt: 'Image 2',
  },
  {
    src: 'image3.jpg',
    alt: 'Image 3',
  },
];



  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleNewMessageChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div><ImageRow images={images} />
    </div>
  );
}

export default Content;
