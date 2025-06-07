import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/layout";
import ReactLenis from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <Header />

      <main className="flex-auto">
        <Outlet />
      </main>

      <Footer />
    </ReactLenis>
  );
}

export default App;
