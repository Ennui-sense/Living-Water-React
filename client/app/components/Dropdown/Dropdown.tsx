import clsx from "clsx";
import "./Dropdown.scss";
import type { IFilterVariant } from "~/data/FiltersData";
import { useState } from "react";
import type { IProduct } from "~/interfaces/IProduct";

interface DropdownProps {
  className: string;
  variants: IFilterVariant[] | undefined;
  value: string;
  allProducts: IProduct[];
}

const Dropdown = ({
  className,
  variants,
  value,
  allProducts,
}: DropdownProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectOption = (value: string) => {
    if (selected.includes(value)) {
      setSelected((prev) => prev.filter((option) => option !== value));
    } else {
      setSelected((prev) => [...prev, value]);
    }
  };

  if (!variants) {
    return null;
  }

  const countProducts = (variantValue: string) => {
		let counter = 0;

    allProducts.map((product) => {
      for (const key in product) {
        if (key === value) {
          if (product[key].value === variantValue) {
						counter += 1
					}
        }
      }
    });

		return counter
  };

  return (
    <div className={clsx("dropdown", className)}>
      <form className="dropdown__form">
        {variants.map((variant) => (
          <div className="dropdown__field">
            <div className="dropdown__checkbox">
              <input
                type="checkbox"
                name={variant.value}
                id={variant.value}
                className="dropdown__checkbox-input"
                onChange={() => handleSelectOption(variant.value)}
              />
              <label
                htmlFor={variant.value}
                className="dropdown__checkbox-label"
              >
                {variant.label}
              </label>
            </div>

            <p className="dropdown__count">{countProducts(variant.value)}</p>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Dropdown;
