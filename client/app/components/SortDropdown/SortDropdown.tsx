import "./SortDropdown.scss";

import { SortData } from "~/data/SortData";

import SortDropdownField from "../SortDropdownField/SortDropdownField";

import type { ISortField } from "~/data/SortData";

import clsx from "clsx";

interface SortDropdownProps {
  className: string;
  activeSortField: ISortField;
  onFieldClick: (clickedField: ISortField) => void;
}

const SortDropdown = ({
  className,
  activeSortField,
  onFieldClick,
}: SortDropdownProps) => {
  return (
    <div className={clsx("sort-dropdown", className)}>
      <form className="sort-dropdown__form">
        {SortData.map((item) => (
          <SortDropdownField
            sortField={item}
            key={item.id}
            isActive={activeSortField.id === item.id}
            onClick={() => onFieldClick(item)}
          />
        ))}
      </form>
    </div>
  );
};

export default SortDropdown;
