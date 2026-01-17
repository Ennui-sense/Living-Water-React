import "./Filters.scss";

import FiltersActivateButton from "../FiltersActivateButton/FiltersActivateButton";
import Dropdown from "../Dropdown/Dropdown";

import clsx from "clsx";

import { useState, useEffect, useRef } from "react";

import { FiltersData } from "~/data/FiltersData";

import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/swiper.css";

const Filters = () => {
  const [activeid, setActiveid] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const filtersRef = useRef<HTMLDivElement>(null);

  const handleClick = (id: number) => {
    setActiveid(activeid === id ? null : id);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const checkMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    checkMobile();

    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node)
      ) {
        setActiveid(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filtersRef]);

  return (
    <div className="filters" ref={filtersRef}>
      {isMobile ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          className="filters__list"
        >
          {FiltersData.map((filter) => (
            <SwiperSlide key={filter.id}>
              <FiltersActivateButton
                title={filter.label}
                onClick={() => handleClick(filter.id)}
                className={clsx("filters__activate-button", {
                  "filters-activate-button--focus": activeid === filter.id,
                })}
              />
              {activeid === filter.id && (
                <Dropdown
                  className="filters__dropdown"
                  variants={filter.variants}
                  category={filter.value}
                  type={filter.type}
                  unit={filter.unit}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className="filters__list">
          {FiltersData.map((filter) => (
            <li className="filters__item" key={filter.id}>
              <FiltersActivateButton
                title={filter.label}
                onClick={() => handleClick(filter.id)}
                className={clsx("filters__activate-button", {
                  "filters-activate-button--focus": activeid === filter.id,
                })}
              />
              {activeid === filter.id && (
                <Dropdown
                  className="filters__dropdown"
                  variants={filter.variants}
                  category={filter.value}
                  type={filter.type}
                  unit={filter.unit}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filters;
