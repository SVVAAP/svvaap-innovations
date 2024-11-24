import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CenterContent from './components/CenterContent';
import RightSidebar from './components/RightSidebar';

const Home = () => {
  const [categories] = useState(['Business', 'Projects', 'Games', 'Art', 'Technology']);
  const [selectedCategory, setSelectedCategory] = useState('Business');
  const [ideas, setIdeas] = useState([]);
  const [input, setInput] = useState('');
  const [likedIdeas, setLikedIdeas] = useState([]);
  const [userProfile] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    if (input.startsWith('/ideoai')) {
      const userIdea = input.replace('/ideoai', '').trim();
      const aiResponse = generateAIResponse(userIdea || selectedCategory);
      setIdeas([...ideas, { type: 'ai', text: aiResponse }]);
    } else {
      setIdeas([...ideas, { type: 'user', text: input }]);
    }

    setInput('');
  };

  const generateAIResponse = (userInput) => {
    return `AI Idea generated for "${userInput}" in ${selectedCategory}`;
  };

  const likeIdea = (idea) => {
    setLikedIdeas([...likedIdeas, idea]);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} h-screen flex flex-col bg-gray-100`}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        toggleSidebar={toggleSidebar}
        userProfile={userProfile}
      />
      <div className="flex flex-grow dark:bg-gray-900">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isSidebarOpen={isSidebarOpen}
        />
        <CenterContent
          ideas={ideas}
          selectedCategory={selectedCategory}
          input={input}
          setInput={setInput}
          handleSendMessage={handleSendMessage}
          likeIdea={likeIdea}
        />
        <RightSidebar likedIdeas={likedIdeas} userProfile={userProfile} />
      </div>
    </div>
  );
};

export default Home;
