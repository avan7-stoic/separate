import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStory } from '../redux/charitySlice';

const Stories = () => {
  const stories = useSelector((state) => state.charity.stories); // access stories from the Redux state
  const dispatch = useDispatch();

  const [newStory, setNewStory] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setNewStory({ ...newStory, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addStory({ ...newStory, id: Date.now() })); // dispatch the addStory action
    setNewStory({ title: '', content: '' }); // clear form after adding
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
