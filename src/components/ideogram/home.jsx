import React, { useState } from 'react';

function IdeogramApp() {
  const [categories] = useState(['Business', 'Projects', 'Games', 'Art', 'Technology']);
  const [selectedCategory, setSelectedCategory] = useState('Business');
  const [ideas, setIdeas] = useState([]);
  const [input, setInput] = useState('');
  const [likedIdeas, setLikedIdeas] = useState([]);
  const [userProfile] = useState({ name: 'John Doe', email: 'john@example.com' });

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Check if the user used the AI command
    if (input.startsWith('/ideoai')) {
      const userIdea = input.replace('/ideoai', '').trim();
      const aiResponse = generateAIResponse(userIdea || selectedCategory);
      setIdeas([...ideas, { type: 'ai', text: aiResponse }]);
    } else {
      // Human generated idea
      setIdeas([...ideas, { type: 'user', text: input }]);
    }

    setInput(''); // Clear the input field
  };

  const generateAIResponse = (userInput) => {
    // Placeholder AI response logic, you can integrate with an actual AI API later
    return `AI Idea generated for "${userInput}" in ${selectedCategory}`;
  };

  const likeIdea = (idea) => {
    setLikedIdeas([...likedIdeas, idea]);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ideogram</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            <li><a href="#" className="hover:text-blue-400">Profile</a></li>
          </ul>
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <p>{userProfile.name}</p>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">Logout</button>
          </div>
        </div>
      </nav>

      <div className="flex flex-grow">
        {/* Left Sidebar - Categories */}
        <div className="w-1/5 bg-gray-800 text-white p-4">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer p-2 ${selectedCategory === category ? 'bg-blue-500' : 'hover:bg-gray-600'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Center Section - Display Ideas */}
        <div className="flex-1 flex flex-col p-4 bg-white">
          <h2 className="text-3xl font-bold mb-4">Ideas for {selectedCategory}</h2>
          <div className="flex-grow overflow-y-auto mb-4">
            {ideas.map((idea, index) => (
              <div key={index} className={`mb-4 ${idea.type === 'user' ? 'text-right' : 'text-left'}`}>
                <div
                  className={`inline-block p-3 rounded-lg ${idea.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
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
          <div className="flex border-t border-gray-300 p-4 bg-gray-100">
            <input
              type="text"
              className="flex-grow px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
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

        {/* Right Sidebar - Liked Ideas and Profile */}
        <div className="w-1/5 bg-gray-200 p-4">
          {/* Liked Ideas */}
          <h2 className="text-xl font-bold mb-4">Liked Ideas</h2>
          <ul>
            {likedIdeas.map((idea, index) => (
              <li key={index} className="p-2 bg-white mb-2 rounded-lg shadow-lg">
                {idea}
              </li>
            ))}
          </ul>

          {/* Profile */}
          <div className="mt-8">
            <h2 className="text-xl font-bold">Profile</h2>
            <p className="mt-2">Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeogramApp;
