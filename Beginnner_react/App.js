import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';

const App = () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (option) => {
    setSelectedOption(option.value);
  };

  return (
    <div>
      <h1>Dropdown Menu Example</h1>
      <DropdownMenu options={options} onSelect={handleOptionChange} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;
