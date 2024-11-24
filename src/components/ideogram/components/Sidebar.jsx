import React from 'react';

const Sidebar = ({ categories, selectedCategory, setSelectedCategory, isSidebarOpen }) => {
  return (
    <div className={`lg:w-1/5  bg-white dark:bg-black text-white p-4 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer p-2 ${selectedCategory === category ? 'bg-blue-500' : 'hover:bg-gray-600 dark:hover:bg-gray-600'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
