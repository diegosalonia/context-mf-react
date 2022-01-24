import React from 'react';

import useStore from 'host/store';

const Header = () => {
  const {count, clear} = useStore()
  return (
  <header className="bg-blue-700 text-white font-bold text-3xl">
      <div className="flex-grow">Awesome Header</div>
      <div>
          {count}
          <button 
            className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
            onClick={clear}
          >
            Clear Cart
          </button>
      </div>
  </header>
  );
};

export default Header;
