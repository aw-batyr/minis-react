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
import { useLenis } from "lenis/react";
import { useRedirectStore } from "../store/use-redirect";

export default function Home() {
  const setLoading = useLoaderStore((state) => state.setLoading);
  const lenis = useLenis();

  const { redirectSection, setRedirect } = useRedirectStore((state) => state);

  console.log(redirectSection);

  useEffect(() => {
    redirectSection && lenis?.scrollTo(redirectSection);

    return () => setRedirect("");
  }, [redirectSection]);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
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
