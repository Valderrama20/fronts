import React, { useState } from 'react';

interface InputLabelProps {
  label: string;
  id: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string,
  name: string
}

const Input: React.FC<InputLabelProps> = ({ label, id, type = 'text', onChange, name , value }) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    if (value === '') setFocused(false);
  };

  return (
    <div className="relative w-full my-1.5">
      {/* Label */}
      <label
        htmlFor={id}
        className={`absolute left-2 transition-all duration-300 
        ${focused || value
            ? '-top-[10px] text-xs text-blue-600 bg-white px-1.5 font-bold '  // Estilo cuando está enfocado o con valor
            : 'top-2 text-gray-400'            // Estilo por defecto
        }`}
      >
        {label}
      </label>
      
      {/* Input */}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        required
      />
    </div>
  );
};

export default Input;
