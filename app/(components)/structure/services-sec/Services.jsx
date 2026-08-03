import ServicesBox from "../../shared/services-box/ServicesBox";

function Services() {
  return (
    <div className="py-15 lg:py-25">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <ServicesBox />
      </div>
    </div>
  );
}

export default Services;
