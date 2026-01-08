import "./Categories.scss";

import clsx from "clsx";

import Filters from "../Filters/Filters";
import SortButton from "../SortButton/SortButton";

interface CategoriesProps {
  className: string;
}

const Categories = ({ className }: CategoriesProps) => {
  return (
    <div className={clsx(className, "categories")}>
      <Filters />
			<SortButton/>
    </div>
  );
};

export default Categories;
