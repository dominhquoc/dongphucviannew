// components/CallButton/CallButtonServer.js
import React from 'react';

const CallButtonServer = ({ phoneNumber }) => {
  const makeCall = () => {
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      window.open(`tel:${phoneNumber}`);
    } else {
      window.open(`https://zalo.me/phone/${phoneNumber}`);
    }
  };

  return (
    <button
      onClick={makeCall}
      className="fixed bottom-0 left-0 w-16 h-16 rounded-full bg-red-500 shadow-md inset-x-0 inset-y-0 shake-y-infinite shake-y-2s"
    >
      <i className="fa fa-phone"></i>
    </button>
  );
};

export default CallButtonServer;
