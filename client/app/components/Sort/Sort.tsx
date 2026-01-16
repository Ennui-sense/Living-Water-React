import "./Sort.scss";

import SortButton from "../SortButton/SortButton";
import SortDropdown from "../SortDropdown/SortDropdown";

import { useState, useRef, useEffect } from "react";

import type { ISortField } from "~/data/SortData";

import { SortData } from "~/data/SortData";

const Sort = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeSortField, setActiveSortField] = useState<ISortField>(
    SortData.filter((item) => item.id === 1)[0]
  );

  const handleClick = (clickedField: ISortField) => {
    setActiveSortField(
      activeSortField.id === clickedField.id ? activeSortField : clickedField
    );
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
