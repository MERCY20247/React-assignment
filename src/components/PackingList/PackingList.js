import { useState } from 'react';
import './PackingList.css'; 

function PackingList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newItem = { id: Date.now(), name: input };
    setItems([...items, newItem]);
    setInput('');
  };

  return (
    <div className="packing-list">
      <h1>Packing List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add an item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No items yet!</p>
      )}
    </div>
  );
}

export default PackingList;
