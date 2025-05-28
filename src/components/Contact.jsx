export default function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form action="https://formspree.io/f/your-id" method="POST" className="space-y-4">
        <input name="name" required placeholder="Your Name" className="border p-2 w-full" />
        <input name="email" type="email" required placeholder="Your Email" className="border p-2 w-full" />
        <textarea name="message" required placeholder="Your Message" className="border p-2 w-full h-32" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Send</button>
      </form>
    </section>
  );
}
