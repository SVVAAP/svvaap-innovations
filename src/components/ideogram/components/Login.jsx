import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { getAuth, signInWithPopup, GithubAuthProvider, signInAnonymously } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import logo from "/img/ideogram2_logo.png"

const LoginPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const auth = getAuth();
  const db = getDatabase();

  // GitHub login
  const handleGitHubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserData(user);
      setShowPopup(true); // Show the popup to add username
    } catch (error) {
      console.error("GitHub Login Error:", error);
      setError("GitHub login failed. Please try again.");
    }
  };

  // Anonymous login
  const handleAnonymousLogin = async () => {
    try {
      const result = await signInAnonymously(auth);
      const user = result.user;
      setUserData(user);
      setShowPopup(true); // Show the popup to add username
    } catch (error) {
      console.error("Anonymous Login Error:", error);
      setError("Anonymous login failed. Please try again.");
    }
  };

  // Save user data with username
  const handleSaveUsername = async () => {
    if (!username.trim()) {
      setError("Username cannot be empty.");
      return;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      setError("Username can only contain letters, numbers, and underscores.");
      return;
    }

    try {
      // Check if username is unique
      const usernameRef = ref(db, `usernames/${username}`);
      const snapshot = await usernameRef.get();
      if (snapshot.exists()) {
        setError("Username is already taken.");
        return;
      }

      // Save user details in the database
      const userId = userData.uid;
      const userRef = ref(db, `users/${userId}`);
      await set(userRef, {
        username: username,
        email: userData.email || "Anonymous",
      });

      // Save username mapping
      await set(usernameRef, userId);

      // Redirect to home page
      navigate("/home");
    } catch (error) {
      console.error("Error saving username:", error);
      setError("Failed to save username. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-1 bg-black justify-center items-center">
        <img
          src={logo} // Replace with your logo file
          alt="X Logo"
          className=""
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col justify-center items-center bg-black text-white p-6">
        <h1 className="text-4xl font-bold mb-6">Happening now</h1>
        <h2 className="text-2xl font-semibold mb-8">Join today.</h2>

        {/* Sign-in Options */}
        <div className="space-y-4 w-full max-w-sm">
          <button
            onClick={handleGitHubLogin}
            className="w-full flex items-center justify-center bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200"
          >
            <img
              src="/github-icon.png" // Replace with GitHub icon
              alt="GitHub"
              className="w-5 h-5 mr-2"
            />
            Sign in with GitHub
          </button>
          <button
            onClick={handleAnonymousLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
          >
            Login Anonymously
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      {/* Username Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Set your username</h2>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Enter a unique username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              onClick={handleSaveUsername}
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
            >
              Save Username
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
