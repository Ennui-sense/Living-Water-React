import "./ProductsCard.scss";

import Button from "../Button/Button";
import ButtonSquare from "../ButtonSquare/ButtonSquare";
import Notification from "../Notification/Notification";

import CompareIcon from "~/assets/icons/compare.svg?react";

import type { IProductsCard } from "~/data/ProductsCardsData";
import { useCart } from "~/hooks/useCart";

import { useCompare } from "~/hooks/useCompare";

import { useState, useEffect } from "react";

interface ProductsCardProps {
  product: IProductsCard;
}

const ProductsCard = ({ product }: ProductsCardProps) => {
  const { imageSrc, imageHoverSrc, isNew, title, price, sizes } = product;

  const { addToCart } = useCart();
  const { addToCompare, compareItems } = useCompare();

  const [visibleNotification, setVisibleNotification] =
    useState<boolean>(false);
  const [alreadyInCompare, setAlreadyInCompare] = useState<boolean>(false);

  const sizeLabels: Record<string, string> = {
    height: "Высота",
    width: "Ширина",
    depth: "Глубина",
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-RU");
  };

const handleClickByCompareButton = (product: IProductsCard) => {
  const exists = compareItems.some((item) => item.id === product.id);
  setAlreadyInCompare(exists);

  if (!exists) {
    addToCompare(product);
  }

  setVisibleNotification(true);
};

  useEffect(() => {
    if (!visibleNotification) return;

    const timer = setTimeout(() => {
      setVisibleNotification(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [visibleNotification]);

  const checkAvailabilityInCompare = (product: IProductsCard) => {
    const test = compareItems.some((item) => item.id === product.id);

    console.log(test);
    console.log(compareItems);

    return test;
  };

  return (
    <article className="products__card products-card">
      <div className="products-card__image-wrapper">
        {isNew && <Button isBadge>Новый</Button>}
        <img
          src={imageSrc}
          alt=""
          className="products-card__image"
          width={250}
          height={250}
          loading="lazy"
        />
        <img
          src={imageHoverSrc}
          alt=""
          className="products-card__image-hover"
          width={300}
          height={300}
          loading="lazy"
        />
      </div>
      <div className="products-card__body">
        <h3 className="products-card__title">{title}</h3>
        <p className="products-card__price">
          {formatPrice(price)}
          <span className="products-card__ruble">₽</span>
        </p>
        <div className="products-card__info">
          <div className="products-card__sizes">
            {Object.entries(sizes).map(([key, value]) => (
              <div className="products-card__size" key={key}>
                <p className="products-card__size-title">{sizeLabels[key]}</p>
                <p className="products-card__size-value">{value} см</p>
              </div>
            ))}
          </div>

          <div className="products-card__buttons">
            <Button onClick={() => addToCart({ ...product, count: 1 })}>
              Купить
            </Button>
            <ButtonSquare
              title="Добавить в сравнение"
              isLarge
              onClick={() => handleClickByCompareButton(product)}
            >
              <CompareIcon />
            </ButtonSquare>
          </div>
        </div>
      </div>

      <Notification
        title={title}
        imageSrc={imageSrc}
        availabilityInCompare={alreadyInCompare}
        isVisible={visibleNotification}
        closeModal={() => setVisibleNotification(false)}
      />
    </article>
  );
};

export default ProductsCard;
