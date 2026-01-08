import './SortButton.scss'
import SortIcon from "~/assets/icons/sort.svg?react";

const SortButton = () => {
  return (
    <button type="button" className="sort-button">
      Рекомендуем
      <SortIcon />
    </button>
  );
};

export default SortButton;
