import Page from "~/layouts/Page/Page";
import Hero from "~/sections/Hero/Hero";
import About from "~/sections/About/About";
import Facts from "~/sections/Facts/Facts";
import Steps from "~/sections/Steps/Steps";
import Benefits from "~/sections/Benefits/Benefits";
import Products from "~/sections/Products/Products";
import Machine from "~/sections/Machine/Machine";

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
        <Steps />
        <Benefits />
        <Products />
      </div>

      <Machine />

      <div className="bg-white">
        <Hero />
      </div>
    </Page>
  );
}
