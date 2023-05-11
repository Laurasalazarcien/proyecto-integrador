import "./App.scss";
import classNames from "classnames";
import { useApp } from "./context/AppContext";
import AppRouter from "./routes/AppRouter";

const namespace = "app";

function App() {
  const { theme } = useApp();
  const componentClassNames = classNames(namespace, {
    [`${namespace}--dark`]: theme === "dark",
  });

  return (
    <div className={componentClassNames}>
      {/* TODO: Import Navbar component from /components/Navbar */}
      <AppRouter />
      {/* TODO: Import Footer component from /components/Footer */}
    </div>
  );
}

export default App;
