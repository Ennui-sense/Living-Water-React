import clsx from "clsx";
import "./SortDropdownField.scss";

import type { ISortField } from "~/data/SortData";

interface SortDropdownFieldProps {
	sortField: ISortField
  isActive: boolean;
  onClick: (checkedField: ISortField) => void;
}

const SortDropdownField = ({
  isActive,
  onClick,
	sortField
}: SortDropdownFieldProps) => {
	const {value, id, label} = sortField
  return (
    <div className="sort-dropdown-field">
      <input
        type="radio"
        className={clsx("sort-dropdown-field__input", {
          "sort-dropdown-field__input--checked": isActive,
        })}
        id={value}
        name="sort"
        onClick={() => onClick(sortField)}
      />
      <label htmlFor={value} className="sort-dropdown-field__label">
        {label}
      </label>
    </div>
  );
};

export default SortDropdownField;
