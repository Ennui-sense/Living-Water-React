import "./DropdownCheckboxField.scss";

import clsx from "clsx";
import { useFilters } from "~/hooks/useFilters";

interface DropdownCheckboxFieldProps {
  value: string;
  label: string;
  category: string;
}

const DropdownCheckboxField = ({
  value,
  label,
  category,
}: DropdownCheckboxFieldProps) => {
  const { countProductsOfFilter, addFilter, filters } = useFilters();

  const activeFilters = filters[category] || [];
  const isActiveFilter = activeFilters.includes(value);

  const handleChange = (filter: string) => {
    addFilter(category, filter);
  };

  return (
    <div className="dropdown-checkbox-field">
      <div className="dropdown-checkbox-field__action">
        <input
          type="checkbox"
          name={value}
          id={value}
          className={clsx("dropdown-checkbox-field__input", {
            "dropdown-checkbox-field__input--checked": isActiveFilter,
          })}
          onChange={() => handleChange(value)}
        />
        <label htmlFor={value} className="dropdown-checkbox-field__label">
          {label}
        </label>
      </div>

      <p className="dropdown-checkbox-field__count">{countProductsOfFilter(value)}</p>
    </div>
  );
};

export default DropdownCheckboxField;
