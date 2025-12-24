import Page from "~/layouts/Page/Page";
import Hero from "~/sections/Hero/Hero";

export function meta() {
  return [
    { title: "Живая вода | Главная" },
    { name: "description", content: "Home Page" },
  ];
}

export default function IndexRoute() {
  return (
    <Page>
      <div className="bg-white">
        <Hero />
      </div>

      <div className="bg-white">
        <Hero />
      </div>
    </Page>
  );
}
