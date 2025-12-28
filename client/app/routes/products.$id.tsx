import type { Route } from "./+types/products.$id";

import qs from "qs";

import Page from "~/layouts/Page/Page";

interface IProduct {
  id: number;
  title: string;
}

export async function loader({ params }: Route.LoaderArgs) {
  const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        id: {
          $eq: Number(params.id),
        },
      },
    },
    { encodeValuesOnly: true }
  );

  const url = `${BASE_URL}/api/products?${query}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Response("Ошибка сервера", { status: 500 });
  }

  const data = await response.json();

  const product = data?.data?.[0];

  if (!product) {
    return { productData: null };
  }

  return {
    productData: product,
  };
}

export function meta({ loaderData }: Route.MetaArgs) {
  const currentProduct: IProduct | null = loaderData?.productData;

  const title = currentProduct?.title
    ? `Живая вода | ${currentProduct.title}`
    : "Страница несуществующего товара";
  const description = currentProduct?.title
    ? `${currentProduct.title} Page`
    : "Страница несуществующего товара";

  return [
    { title: title },
    { name: "description", content: description },
  ];
}

export default function ProductRoute({
  loaderData,
  params,
}: Route.ComponentProps) {
  // Используем params из Route.ComponentProps
  const ProductParam = params.id;

  // Данные из loader
  const currentProduct: IProduct = loaderData.productData;

  if (!currentProduct) {
    return (
      <>
        <h1>Такой товар не найден</h1>
        <p>Возможно, товар с id - "{ProductParam}" не существует.</p>
      </>
    );
  }

  return <Page>ТЫ НАХУЙ НА СТРАНИЦЕ - {currentProduct.title}</Page>;
}
