import React, { useState } from "react";

function SelectForm() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOption);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select your option: </label>
        <select value={selectedOption} onChange={handleChange}>
          <option value="">--Choose an option--</option>
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SelectForm;
