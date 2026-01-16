import "./Sort.scss";

import SortButton from "../SortButton/SortButton";
import SortDropdown from "../SortDropdown/SortDropdown";

import { useState, useRef, useEffect } from "react";
import { useSort } from "~/hooks/useSort";

import type { ISortField } from "~/data/SortData";

import { SortData } from "~/data/SortData";

const Sort = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { activeSortCategory, setActiveSortCategory } = useSort();

  const activeSortField = SortData.find((item) => item.value === activeSortCategory) || SortData[0];

  const handleClick = (clickedField: ISortField) => {
    setActiveSortCategory(clickedField.value);
    setOpen(false);
  };

  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="sort" ref={sortRef}>
      <SortButton
        onClick={() => setOpen(true)}
        activeSortLabel={activeSortField.label}
      />
      {open && (
        <SortDropdown
          className={"sort__dropdown"}
          activeSortField={activeSortField}
          onFieldClick={handleClick}
        />
      )}
    </div>
  );
};

export default Sort;
