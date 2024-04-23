import React from "react";

export default function Dropdown({ label, options, value, onChange }) {
  return (
    <div className="w-full gap-2 text-center ">
      <label className="flex flex-col items-center justify-center w-full gap-4">
        {label}
        <select
          value={value}
          onChange={onChange}
          className="w-full max-w-xs p-3 rounded-lg bg-primary"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
