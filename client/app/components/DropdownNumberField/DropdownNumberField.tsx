import "./DropdownNumberField.scss";

import { useFilters } from "~/hooks/useFilters";

import { useEffect, useState, type ChangeEvent } from "react";

interface DropdownNumberFieldProps {
  value: string;
  label: string;
  category: string;
  unit?: string;
}

const DropdownNumberField = ({
  value,
  label,
  category,
  unit,
}: DropdownNumberFieldProps) => {
  const { minMaxCharacteristics, setRange, ranges } = useFilters();
  const [inputValue, setInputValue] = useState<string>("");
  
	const type = value.toLowerCase().includes("min") ? "min" : "max";

  useEffect(() => {
    const globalValue = ranges[category][type];
    setInputValue(globalValue !== null ? globalValue.toString() : "");
  }, [ranges, category, type]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value.replace(/\D/g, "");
    setInputValue(val);
  };

  const handleBlur = () => {
    const numValue = inputValue === "" ? null : Number(inputValue);

    setRange(category, type, numValue);
  };

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			(event.target as HTMLInputElement).blur()
		}
	}

  return (
    <div className="dropdown-number-field">
      <input
        type="text"
        inputMode="numeric"
        className="dropdown-number-field__input"
        name={value}
        id={value}
        placeholder={minMaxCharacteristics[value]?.toString() || "0"}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
				onKeyDown={handleKeyDown}
      />
			
      <label htmlFor={value} className="dropdown-number-field__label">
        {label}
      </label>
      <span className="dropdown-number-field__unit">{unit}</span>
    </div>
  );
};

export default DropdownNumberField;
