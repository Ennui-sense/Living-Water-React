import "./Categories.scss";

import clsx from "clsx";

import Filters from "../Filters/Filters";
import Sort from "../Sort/Sort";

interface CategoriesProps {
  className: string;
}

const Categories = ({ className }: CategoriesProps) => {
  return (
    <div className={clsx(className, "categories")}>
      <Filters />
			<Sort/>
    </div>
  );
};

export default Categories;
