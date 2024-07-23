import React from "react";

const ButtonComponent = ({ buttonText, onClick }) => {
  return (
    <div>
      <button
        type="Button"
        onClick={onClick}
        className="mt-4 w-full bg-green-900 text-white py-2 px-4 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ButtonComponent;
