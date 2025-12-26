import type { ReactNode } from "react";

import HeaderTop from "~/components/HeaderTop/HeaderTop";
import HeaderBottom from "~/components/HeaderBottom/HeaderBottom";
import Footer from "~/components/Footer/Footer";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Page;
