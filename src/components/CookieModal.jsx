import React, { useState, useEffect } from "react";

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the modal after the first visit
  useEffect(() => {
    const isFirstVisit = !localStorage.getItem("cookieAccepted");
    if (!isFirstVisit) {
      setIsVisible(false);
    }
  }, []);

  const handleHideModal = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 left-4 bg-[#4d4e50] text-white p-6 rounded-lg shadow-lg w-[440px]">
        <h2 className="text-xl font-semibold mb-4">
          BEFORE YOU CONTINUE TO DATA DYNAMO
        </h2>
        <p className="text-sm mb-8">
          By clicking "Accept All Cookies," you agree to the storing of cookies
          on your device to enhance site navigation, improve product
          functionality, and create a more user-centric experience. This data
          helps us better understand user preferences, determine user needs, and
          optimize our services.
        </p>
        {/* <button
          onClick={handleHideModal}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          ACCEPT ALL COOKIES
        </button> */}
        <div className="flex flex-col items-start gap-3">
          <a href="#" className="color-green-500 hover:underline text-sm">
            COOKIE SETTINGS →
          </a>
          <button
            onClick={handleHideModal}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            ACCEPT ALL COOKIES
          </button>
        </div>
      </div>
    )
  );
};

export default CookieModal;
