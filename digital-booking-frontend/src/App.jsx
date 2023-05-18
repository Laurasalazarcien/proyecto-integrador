import "./App.scss";
import classNames from "classnames";
import { useApp } from "./context/AppContext";
import AppRouter from "./routes/AppRouter";
// import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const namespace = "app";

function App() {
  const { theme } = useApp();
  const componentClassNames = classNames(namespace, {
    [`${namespace}--dark`]: theme === "dark",
  });

  const menuOptions = [
    {
      name: "Home",
      target: "/",
    },
    {
      name: "Add product",
      target: "/add-product",
    },
  ];

  return (
    <div className={componentClassNames}>
      {/* <Header slogan="Un sitio para encontrar todo lo que necesitas"></Header> */}
      <NavBar menuOptions={menuOptions} fixed />
      <AppRouter />
      <Footer/>
    </div>
  );
}

export default App;
