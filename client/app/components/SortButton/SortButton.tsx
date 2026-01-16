import "./SortButton.scss";
import SortIcon from "~/assets/icons/sort.svg?react";

interface SortButtonProps {
  onClick: () => void;
  activeSortLabel: string;
}

const SortButton = ({ onClick, activeSortLabel }: SortButtonProps) => {
  return (
    <>
      <button type="button" className="sort-button" onClick={onClick}>
        {activeSortLabel}
        <SortIcon />
      </button>
    </>
  );
};

export default SortButton;
