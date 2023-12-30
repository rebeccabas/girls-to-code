import React, { useState } from 'react';

const AddingToList = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();

    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <form>
        <label className="bold text-xl">
          Enter:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button onClick={handleButtonClick}>Click Me</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <checkbox key={index}>{item}</checkbox>
        ))}
      </ul>
    </div>
  );
};

export default AddingToList;


