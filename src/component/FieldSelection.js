import React, { useState } from "react";

const FieldSelection = () => {
  const [fields, setFields] = useState([]);

  const handleAddField = () => {
    setFields([...fields, { name: "", value: "" }]);
  };

  return (
    <div>
      <ul>
        {fields.map((field) => (
          <li key={field.name}>
            <input
              type="text"
              name={field.name}
              value={field.value}
              onChange={(event) => {
                field.value = event.target.value;
              }}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleAddField}>Add Field</button>
    </div>
  );
};

export default FieldSelection;
