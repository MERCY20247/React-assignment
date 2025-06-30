import React, { useState } from "react";

function TextAreaForm() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Message: </label>
        <textarea value={text} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TextAreaForm;
