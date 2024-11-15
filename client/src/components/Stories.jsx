import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addStory } from './storiesSlice';

const Stories = () => {
  const stories = useSelector((state) => state.stories);
  const dispatch = useDispatch();

  const [newStory, setNewStory] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setNewStory({ ...newStory, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addStory({ ...newStory, id: Date.now() }));
    setNewStory({ title: '', content: '' });
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
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="content" placeholder="Content" onChange={handleChange} required />
        <button type="submit">Add Story</button>
      </form>
    </div>
  );
};

export default Stories;
