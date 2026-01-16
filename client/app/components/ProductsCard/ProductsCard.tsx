import "./ProductsCard.scss";

import Button from "../Button/Button";
import ButtonSquare from "../ButtonSquare/ButtonSquare";
import Notification from "../Notification/Notification";

import CompareIcon from "~/assets/icons/compare.svg?react";

import { useCart } from "~/hooks/useCart";
import { useCompare } from "~/hooks/useCompare";
import { useState, useEffect } from "react";

import type { IProduct } from "~/interfaces/IProduct";

import { AnimatePresence } from "framer-motion";

interface ProductsCardProps {
  product: IProduct;
}

const ProductsCard = ({ product }: ProductsCardProps) => {
  const {
    category,
    tankVolume,
    type,
    placement,
    source,
    id,
    images,
    isNew,
    price,
    width,
    height,
    depth,
    title,
  } = product;

  const { addToCart } = useCart();
  const { addToCompare, compareItems } = useCompare();

  const [visibleNotification, setVisibleNotification] =
    useState<boolean>(false);
  const [alreadyInCompare, setAlreadyInCompare] = useState<boolean>(false);

  const sizes = {
    height: height,
    width: width,
    depth: depth,
  };

  const STRAPI_URL =
    import.meta.env.VITE_STRAPI_API_URL ?? "http://localhost:1337";

  const getStrapiMedia = (url?: string) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  };

  const imageSrc = getStrapiMedia(
    images.find((img) => img.url.includes("right"))?.url
  );

  const imageHoverSrc = getStrapiMedia(
    images.find((img) => img.url.includes("hover"))?.url
  );

  const sizeLabels: Record<string, string> = {
    height: "Высота",
    width: "Ширина",
    depth: "Глубина",
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-RU");
  };

  const handleClickByCompareButton = (product: IProduct) => {
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
          {formatPrice(Number(price))}{" "}
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

			<a href={`/products/${id}`} className="products-card__link"></a>

      <AnimatePresence>
        {visibleNotification && (
          <Notification
            key="notification"
            title={title}
            imageSrc={imageSrc}
            availabilityInCompare={alreadyInCompare}
            closeModal={() => setVisibleNotification(false)}
          />
        )}
      </AnimatePresence>
    </article>
  );
};

export default ProductsCard;
