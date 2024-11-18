import React, { useState } from 'react';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStory((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setStories((prev) => [...prev, { ...newStory, id: Date.now() }]); // Add new story to the list
    setNewStory({ title: '', content: '' }); // Reset form fields
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-pink-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Stories</h2>
      <ul className="space-y-4">
        {stories.map((story) => (
          <li key={story.id} className="p-4 bg-purple-100 rounded-lg shadow-sm hover:bg-purple-200 transition-all">
            <h3 className="text-xl font-semibold text-purple-800">{story.title}</h3>
            <p className="text-purple-600">{story.content}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={handleAdd} className="mt-6 space-y-4">
        <div>
          <input
            name="title"
            value={newStory.title}
            placeholder="Title"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <textarea
            name="content"
            value={newStory.content}
            placeholder="Content"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="5"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-200"
        >
          Add Story
        </button>
      </form>
    </div>
  );
};

export default Stories;
