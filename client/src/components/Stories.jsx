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
    <div>
      <h2>Stories</h2>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <h3>{story.title}</h3>
            <p>{story.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAdd}>
        <input
          name="title"
          value={newStory.title}
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          value={newStory.content}
          placeholder="Content"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Story</button>
      </form>
    </div>
  );
};

export default Stories;
