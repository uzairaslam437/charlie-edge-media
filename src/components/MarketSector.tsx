
export const MarketSector = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="font-montserrat text-3xl font-bold text-black">
          Market sectors
        </h2>
        <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
          As experienced defence and security PR specialists, CMS Strategic is
          trusted to provide bespoke services to a variety of companies, from
          prime contractors to SMEs.
        </p>
      </div>

      {/* First row */}
      <div className="grid md:grid-cols-2 items-center">
        {/* Left image */}
        <div className="h-72 w-full overflow-hidden">
          <img
            src="aircraft.jpg"
            alt="Styled"
            className="w-full h-full object-cover [clip-path:polygon(0%_0%,45%_0%,100%_100%,0%_100%)]"
          />
        </div>

        {/* Text */}
        <div>
          <h4 className="text-sm uppercase tracking-wide text-gray-700">
            Defence and Security
          </h4>
          <h3 className="font-montserrat text-2xl font-bold text-black mt-1">
            Raising brand awareness in defence
          </h3>
          <p className="mt-3 text-gray-500">
            CMS Strategic has an impressive track record of delivering effective
            communications programmes, supported by our network in defence
            media, industry, Armed Forces and the UK MoD.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-green-600 font-semibold hover:underline"
          >
            Learn More →
          </a>
        </div>

        {/* Right image */}
        <div className="ml-140 h-72 w-full overflow-hidden">
          <img
            src="aircraft.jpg"
            alt="Tank"
            className="w-full h-full object-cover [clip-path:polygon(0%_0%,100%_0%,100%_100%,45%_100%)]"
          />
        </div>
      </div>

      {/* Second row */}
      <div className="mt-20 grid md:grid-cols-2 items-center">
        {/* Left image */}
        

        {/* Text */}
        <div>
          <h4 className="text-sm uppercase tracking-wide text-gray-700">
            Defence and Security
          </h4>
          <h3 className="font-montserrat text-2xl font-bold text-black mt-1">
            Raising brand awareness in defence
          </h3>
          <p className="mt-3 text-gray-500">
            CMS Strategic has an impressive track record of delivering effective
            communications programmes, supported by our network in defence
            media, industry, Armed Forces and the UK MoD.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-green-600 font-semibold hover:underline"
          >
            Learn More →
          </a>
        </div>

        <div className="h-72 w-full overflow-hidden">
          <img
            src="aircraft.jpg"
            alt="Styled"
            className="w-full h-full object-cover [clip-path:polygon(45%_0%,100%_0%,100%_100%,0%_100%)]"
          />
        </div>

        {/* Right image */}
        <div className="h-72 w-full overflow-hidden">
          <img
            src="aircraft.jpg"
            alt="Tank"
            className="w-full h-full object-cover [clip-path:polygon(0%_0%,100%_0%,45%_100%,0%_100%)]"
          />
        </div>
      </div>
    </section>
  );
};
