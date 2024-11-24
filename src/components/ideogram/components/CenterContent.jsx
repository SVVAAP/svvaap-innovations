import React from 'react';

const CenterContent = ({ ideas, selectedCategory, input, setInput, handleSendMessage, likeIdea }) => {
  return (
    <div className="flex-1 flex flex-col p-4 bg-white dark:bg-black text-white  dark:text-white">
      <h2 className="text-3xl font-bold mb-4">Ideas for {selectedCategory}</h2>
      <div className="flex-grow overflow-y-auto mb-4">
        {ideas.map((idea, index) => (
          <div key={index} className={`mb-4 ${idea.type === 'user' ? 'text-right' : 'text-left'}`}>
            <div
              className={`inline-block p-3 rounded-lg ${idea.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-600 text-black dark:text-white'}`}
            >
              {idea.text}
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

      {/* Bottom Input - User types idea */}
      <div className="flex border-t rounded-lg border-gray-300 dark:border-gray-700 p-4 bg-gray-100 dark:bg-gray-700 backdrop-filter backdrop-blur-md bg-opacity-70 dark:bg-opacity-30 shadow-lg">

        <input
          type="text"
          className="flex-grow px-4 py-2 border text-black border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-700"
          placeholder="Type your idea here... (Use /ideoai to generate an AI idea)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CenterContent;
