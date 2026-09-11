import Categories from "@/sections/Categories";
import Hero from "@/sections/Hero";

export const metadata = {
  headtitle: "Home",
  isHeaderFixed: true,
};

export default function () {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
}
