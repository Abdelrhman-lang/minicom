import StickyContent from "../(components)/features/sticky-content/StickyContent";
import Cart from "../(components)/shared/cart/Cart";
import Hero from "../(components)/structure/hero/Hero";

export default function Home() {
  return (
    <main>
      <Cart />
      <Hero />
      <StickyContent />
    </main>
  );
}
