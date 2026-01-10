import clsx from "clsx";
import "./Dropdown.scss";
import type { IFilterVariant } from "~/data/FiltersData";
import { useState } from "react";
import type { IProduct } from "~/interfaces/IProduct";
import { useFilters } from "~/hooks/useFilters";

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
  const { addFilter, countProductsOfFilter } = useFilters();

  if (!variants) {
    return null;
  }

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
                onChange={() => addFilter(variant.value)}
              />
              <label
                htmlFor={variant.value}
                className="dropdown__checkbox-label"
              >
                {variant.label}
              </label>
            </div>

            <p className="dropdown__count">{countProductsOfFilter(variant.value)}</p>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Dropdown;
