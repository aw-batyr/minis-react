import { Catalog, Hero, Products, Slogan, Words } from "../components/home";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Words />
      <Products />
      <Slogan />
      <Catalog />
    </div>
  );
}
