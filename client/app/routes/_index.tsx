import Page from "~/layouts/Page/Page";
import Hero from "~/sections/Hero/Hero";
import About from "~/sections/About/About";
import Facts from "~/sections/Facts/Facts";

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
        <About />
        <Facts />
      </div>

      <div className="bg-white">
        <Hero />
      </div>
    </Page>
  );
}
