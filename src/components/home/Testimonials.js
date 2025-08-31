import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      clientImg: "/images/home/testimonials/client1.png",
      clientAlt: "Client 1",
      logo: "/images/home/testimonials/logo1.svg",
      logoAlt: "Sooch Group",
      title: "Educational Institution",
      quote:
        "We were struggling with high temperatures and rising electricity bills in our classrooms. After switching to Vaayu, not only did the rooms stay consistently cool, but we also saw a significant drop in energy costs. The installation was smooth, and the air feels noticeably fresher. It’s the smartest upgrade we’ve made.",
      author: "— Principal, Saraswati Coaching Institute",
    },
    {
      clientImg: "/images/home/testimonials/client2.png",
      clientAlt: "Client 2",
      logo: "/images/home/testimonials/logo2.svg",
      logoAlt: "PMC Valley",
      title: "Industrial Client",
      quote:
        "Our manufacturing unit required a cooling system that could run reliably without constant maintenance. Vaayu delivered exactly that — efficient cooling, low water usage, and almost zero downtime. It's built to last, and it shows.",
      author: "— Operations Head, JVS Textiles Pvt. Ltd.",
    },
  ];

  return (
    <section className="relative w-full bg-white px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-4xl leading-snug font-bold text-gray-900 md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            From manufacturing giants to educational institutions, our clients rely on Vaayu to
            deliver sustainable cooling solutions that perform.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="flex flex-col gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="grid gap-6 md:grid-cols-4 md:items-stretch">
              {idx % 2 === 0 ? (
                <>
                  {/* Client Photo */}
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={t.clientImg}
                      alt={t.clientAlt}
                      width={300}
                      height={330}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Logo */}
                  <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-6">
                    <Image
                      src={t.logo}
                      alt={t.logoAlt}
                      width={140}
                      height={80}
                      className="h-auto w-auto object-contain"
                    />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col justify-center rounded-2xl border border-gray-200 bg-gray-50 p-6 md:col-span-2">
                    <h3 className="mb-3 text-base font-bold text-gray-900">{t.title}</h3>
                    <p className="mb-4 text-gray-700">"{t.quote}"</p>
                    <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Text */}
                  <div className="flex flex-col justify-center rounded-2xl border border-gray-200 bg-gray-50 p-6 md:col-span-2">
                    <h3 className="mb-3 text-base font-bold text-gray-900">{t.title}</h3>
                    <p className="mb-4 text-gray-700">"{t.quote}"</p>
                    <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                  </div>
                  {/* Logo */}
                  <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-6">
                    <Image
                      src={t.logo}
                      alt={t.logoAlt}
                      width={140}
                      height={80}
                      className="h-auto w-auto object-contain"
                    />
                  </div>
                  {/* Client Photo */}
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={t.clientImg}
                      alt={t.clientAlt}
                      width={300}
                      height={330}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
