import "./App.scss";
import classNames from "classnames";
import { useApp } from "./context/AppContext";
import AppRouter from "./routes/AppRouter";
// import Header from "./components/Header";
import NavBar from "./components/NavBar";

const namespace = "app";

function App() {
  const { theme } = useApp();
  const componentClassNames = classNames(namespace, {
    [`${namespace}--dark`]: theme === "dark",
  });

  return (
    <div className={componentClassNames}>
      {/* <Header slogan="Un sitio para encontrar todo lo que necesitas"></Header> */}
      <NavBar fixed />
      <AppRouter />
      {/* TODO: Import Footer component from /components/Footer */}
    </div>
  );
}

export default App;
