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
  const loading = useLoaderStore((state) => state.isLoading);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0, lerp: 0 });
    }
  }, [lenis]);

  const { redirectSection, setRedirect, sectionScroll } = useRedirectStore(
    (state) => state
  );
  console.log(redirectSection);

  useEffect(() => {
    if (!loading && sectionScroll) lenis?.scrollTo("#products");
  }, [sectionScroll, loading, lenis]);

  useEffect(() => {
    if (redirectSection && lenis) {
      lenis.scrollTo(redirectSection);
      setRedirect("");
    }
  }, [redirectSection, lenis]);

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
