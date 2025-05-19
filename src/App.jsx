import { AllRoutes } from "./routes/AllRoutes.jsx";
import { Footer, Header } from "./components/index.js";

function App() {
  return (
    <div className="bg-Primary dark:bg-darkPrimary">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
