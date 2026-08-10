import MarqueeAnimation from "../../features/animatin-marquee/MarqueeAnimation";
import SectionSubHeader from "../../shared/section-subHeader/SectionSubHeader";

function CollectionSection() {
  return (
    <section className="py-20">
      <SectionSubHeader text={"find the perfect piece for every space"} />

      <div className="mt-10">
        <MarqueeAnimation />
      </div>
    </section>
  );
}

export default CollectionSection;
