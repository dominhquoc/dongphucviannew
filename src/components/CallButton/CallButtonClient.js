// components/CallButton/CallButtonClient.js
import React, { useState } from 'react';

const CallButtonClient = ({ onMakeCall }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const makeCall = () => {
    onMakeCall(phoneNumber);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Enter phone number"
      />
      <button onClick={makeCall}>Make Call</button>
    </div>
  );
};

export default CallButtonClient;
