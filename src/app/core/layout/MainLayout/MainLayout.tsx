import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const MainLayout = (props: any) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);
