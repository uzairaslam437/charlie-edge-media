import { ServicesCard } from "./ServicesCard";

const ServicesDetails = [
    {
        src: "aircraft.jpg",
        title: "Social Media Management",
        description: "This holistic approach supports PR, marketing, business development",
        link: "/social-media"
    },
    {
        src: "aircraft.jpg",
        title: "Social Media Management",
        description: "This holistic approach supports PR, marketing, business development",
        link: "/social-media"
    },
    {
        src: "aircraft.jpg",
        title: "Social Media Management",
        description: "This holistic approach supports PR, marketing, business development",
        link: "/social-media"
    },{
        src: "aircraft.jpg",
        title: "Social Media Management",
        description: "This holistic approach supports PR, marketing, business development",
        link: "/social-media"
    },{
        src: "aircraft.jpg",
        title: "Social Media Management",
        description: "This holistic approach supports PR, marketing, business development",
        link: "/social-media"
    },{
        src: "aircraft.jpg",
        title: "Social Media Management",
        description: "This holistic approach supports PR, marketing, business development",
        link: "/social-media"
    },{
        src: "aircraft.jpg",
        title: "Social Media Management",
        description: "This holistic approach supports PR, marketing, business development",
        link: "/social-media"
    },{
        src: "aircraft.jpg",
        title: "Social Media Management",
        description: "This holistic approach supports PR, marketing, business development",
        link: "/social-media"
    }
]


export function Services() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 font-montserrat">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
        What we do
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed mb-10 text-center">
        We are defence and security PR professionals who get your message heard
        and seen. We support you to pursue and secure new business, keeping you
        well informed and ahead of the curve. The range of our services reflects
        our commitment to your success.
      </p>

      {/* Services Cards */}
      <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4 ">
        {ServicesDetails.map((service, index) => (
          <ServicesCard
            key={index}
            imageSrc={service.src}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
}
