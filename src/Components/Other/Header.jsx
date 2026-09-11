import React from "react";


const Header = (props) => {
  const Name = props.DD?.userName;
 

  return (
    <div className="flex items-end justify-between text-gray-300">
      <h1 className="text-2xl">
        Hello <br />
        {Name}
      </h1>

      <button
         onClick={props.handleLogout}
        className="bg-white text-lg font-medium text-black px-5 py-2 rounded-xl active:scale-50"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;