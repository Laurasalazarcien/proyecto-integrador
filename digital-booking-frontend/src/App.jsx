import "./App.scss";
import AppRouter from "./routes/AppRouter";

const namespace = "app";

function App() {
  return (
    <div className={namespace}>
      {/* TODO: Import Navbar component from /components/Navbar */}
      <AppRouter />
      {/* TODO: Import Footer component from /components/Footer */}
    </div>
  );
}

export default App;
