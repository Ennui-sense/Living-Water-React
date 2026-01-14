import type { Route } from "./+types/products._index";
import type { IProduct } from "~/interfaces/IProduct";

import qs from "qs";

import Page from "~/layouts/Page/Page";
import Breadcrumbs from "~/components/Breadcrumbs/Breadcrumbs";
import Catalog from "~/sections/Catalog/Catalog";

export async function loader() {
  const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
  const path = "/api/products";
  const url = new URL(path, BASE_URL);

  url.search = qs.stringify(
    {
      populate: "*",
    },
    { encodeValuesOnly: true }
  );

  const response = await fetch(url.href);
  const data = await response.json();

  return {
    productsData: data.data,
  };
}

export function meta() {
  return [
    { title: "Живая вода | Каталог" },
    { name: "description", content: "Products Page" },
  ];
}

export default function ProductsRoute({ loaderData }: Route.ComponentProps) {
  const allProducts: IProduct[] = loaderData.productsData;

  // if (!allProducts || allProducts.length === 0) {
  //   return (
  //     <Page>
  //       <h1>Каталог</h1>
  //       <p>Товары не найдены</p>
  //     </Page>
  //   );
  // }

  // console.log(allProducts[6].images.find((item) => item.url.includes("left")));

  return (
    <Page>
      <div className="bg-white">
        <Breadcrumbs
          path={[
            { title: "Каталог", id: 1, href: "/" },
            { title: "Оборудование", id: 2 },
          ]}
        />

        <Catalog products={allProducts}/>
      </div>
    </Page>
  );
}
