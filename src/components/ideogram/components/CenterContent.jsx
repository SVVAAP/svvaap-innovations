import React, { useState } from 'react';

const CenterContent = ({ ideas, selectedCategory, input, setInput, handleSendMessage, likeIdea }) => {
  const [activeTab, setActiveTab] = useState('For You'); // Active category/tab

  const categories = ['For You', 'Following']; // Tab categories

  return (
    <div className="flex-1 flex flex-col p-4 bg-white dark:bg-black text-white dark:text-white">
      {/* Tabs for switching categories */}
      <div className="flex justify-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm font-semibold ${
              activeTab === category
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-400'
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Area */}
      <div className="flex-grow overflow-y-auto mb-4 space-y-4">
        {ideas.map((idea, index) => (
          <div
            key={index}
            className={`flex ${
              idea.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`p-4 rounded-lg ${
                idea.type === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-black dark:text-white'
              }`}
            >
              <p>{idea.text}</p>
            </div>
            {idea.type === 'user' && (
              <button
                className="ml-2 text-sm text-gray-500 hover:text-blue-500"
                onClick={() => likeIdea(idea.text)}
              >
                Like
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="border-t border-gray-300 dark:border-gray-700 p-4 bg-gray-100 dark:bg-gray-700 backdrop-filter backdrop-blur-md bg-opacity-70 dark:bg-opacity-30 shadow-lg rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          {/* Input Field */}
          <input
            type="text"
            className="flex-grow px-4 py-2 border text-black border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-700"
            placeholder="What is happening?!"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Post
          </button>
        </div>

        {/* Toolbar for attachments and options */}
        <div className="flex items-center space-x-4 text-gray-500 text-lg">
          <button className="hover:text-blue-500">
            📷 {/* Replace with icon */}
          </button>
          <button className="hover:text-blue-500">
            📊 {/* Replace with icon */}
          </button>
          <button className="hover:text-blue-500">
            🙂 {/* Replace with icon */}
          </button>
          <button className="hover:text-blue-500">
            📍 {/* Replace with icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterContent;
