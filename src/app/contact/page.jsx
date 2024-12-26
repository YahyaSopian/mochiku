import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
          <p className="text-center text-gray-600 mb-8">Got a question or feedback? We'd love to hear from you!</p>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
