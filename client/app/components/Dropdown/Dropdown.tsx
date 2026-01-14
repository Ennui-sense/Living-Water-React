import clsx from "clsx";
import "./Dropdown.scss";
import type { IFilterVariant } from "~/data/FiltersData";

import DropdownCheckboxField from "../DropdownCheckboxField/DropdownCheckboxField";
import DropdownNumberField from "../DropdownNumberField/DropdownNumberField";

interface DropdownProps {
  className: string;
  variants: IFilterVariant[];
  category: string;
  type: "input" | "checkbox";
	unit?: string;
}

const Dropdown = ({ className, variants, category, type, unit }: DropdownProps) => {
  if (!variants) {
    return null;
  }

  return (
    <div className={clsx("dropdown", className)}>
      <form className="dropdown__form">
        {variants.map(({ label, value }) => {
          if (type === "checkbox") {
            return (
              <DropdownCheckboxField
                label={label}
                value={value}
                category={category}
              />
            );
          }

          return (
            <DropdownNumberField
              label={label}
              value={value}
              category={category}
							unit={unit}
            />
          );
        })}
      </form>
    </div>
  );
};

export default Dropdown;
