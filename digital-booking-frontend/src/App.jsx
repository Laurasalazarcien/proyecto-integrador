import "./App.scss";
import classNames from "classnames";
import { useApp } from "./context/AppContext";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

const namespace = "app";

function App() {
  const { theme } = useApp();
  const componentClassNames = classNames(namespace, {
    [`${namespace}--dark`]: theme === "dark",
  });

  return (
    <div className={componentClassNames}>
      <Header slogan="Un sitio para encontrar todo lo que necesitas"></Header>
      <AppRouter />
      <Footer/>
    </div>
  );
}

export default App;
