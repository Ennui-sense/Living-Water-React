import type { Route } from "./+types/products._index";

import Page from "~/layouts/Page/Page";
import Breadcrumbs from "~/components/Breadcrumbs/Breadcrumbs";
import Catalog from "~/sections/Catalog/Catalog";

export function meta() {
  return [
    { title: "Живая вода | Каталог" },
    { name: "description", content: "Products Page" },
  ];
}

export default function ProductsRoute() {
  return (
    <Page>
      <div className="bg-white">
        <Breadcrumbs
          path={[
            { title: "Каталог", id: 1, href: "/" },
            { title: "Оборудование", id: 2 },
          ]}
        />

        <Catalog />
      </div>
    </Page>
  );
}
