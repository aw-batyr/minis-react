import { Outlet } from "react-router-dom";
import { Footer, Header, SmoothScroll } from "./components/layout";

function App() {
  return (
    <SmoothScroll
      className="flex flex-col min-h-screen bg-light-bg"
      data-scroll-container
    >
      <Header />

      <main className="flex-auto">
        <Outlet />
      </main>

      <Footer />
    </SmoothScroll>
  );
}

export default App;
