import { useEffect } from "react";
import {
  Catalog,
  Hero,
  More,
  Products,
  Slogan,
  Words,
} from "../components/home";
import { useLoaderStore } from "../store/use-loader";

export default function Home() {
  const setLoading = useLoaderStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);

    return () => setLoading(false);
  }, []);

  return (
    <div>
      <Hero />
      <Words />
      <Products />
      <More />
      <Slogan />
      <Catalog />
    </div>
  );
}
