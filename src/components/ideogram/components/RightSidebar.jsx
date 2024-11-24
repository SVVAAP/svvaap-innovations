import React from 'react';

const RightSidebar = ({ likedIdeas, userProfile }) => {
  return (
    <div className="hidden lg:block lg:w-1/5 bg-white dark:bg-black text-white p-4">
      <h2 className="text-xl font-bold mb-4">Liked Ideas</h2>
      <ul>
        {likedIdeas.map((idea, index) => (
          <li key={index} className="p-2 bg-white dark:bg-gray-600 mb-2 rounded-lg shadow-lg">
            {idea}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Profile</h2>
        <p className="mt-2">Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
      </div>
    </div>
  );
};

export default RightSidebar;
