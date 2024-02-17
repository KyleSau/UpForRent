import Image from "next/image";

// Dummy Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    statement: "This service has transformed how we manage our rental listings!"
  },
  // Add more testimonials as needed
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      {/* Hero Section */}
      <section className="text-center p-10">
        <Image width={512} height={512} src="/logo.png" alt="Platforms on Vercel" className="w-48 mx-auto" />
        <h1 className="mt-5 mb-3 text-4xl font-bold">Transform Your Rental Listings with Ease</h1>
        <p className="mb-5">Create stunning websites for your short-term rental properties, optimized for visibility and guest engagement. Start building your online presence today!</p>
        <button className="btn btn-primary">Sign Up Free</button>
      </section>

      {/* Features Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* List features here */}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold">Benefits</h2>
        <ul className="list-disc pl-5">
          {/* List benefits here */}
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="mt-5 space-y-4">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id}>
              <p>"{testimonial.statement}"</p>
              <cite>- {testimonial.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Contact/Form Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <form className="mt-5">
          {/* Your form elements here */}
        </form>
      </section>

      {/* Footer */}
      <footer className="p-10">
        {/* Footer content */}
      </footer>
    </div>
  );
}
