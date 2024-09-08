"use client";

const FormInput = ({ label, options, labelKey, optionIdKey, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:border-indigo-500"
        onChange={onChange}
      >
        <option value="">-- Select --</option>
        {options.map((option) => (
          <option key={option[optionIdKey]} value={option[optionIdKey]}>
            {option[labelKey]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormInput;
