import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 w-full pt-28">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail size={22} />,
                  title: "Email",
                  value: "krishkrishnatrey@gmail.com",
                },
                {
                  icon: <Phone size={22} />,
                  title: "Phone",
                  value: "+91 70115 68790",
                },
                {
                  icon: <MapPin size={22} />,
                  title: "Location",
                  value: "India",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400 transition"
                >
                  <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.title}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label className="text-sm text-gray-400">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-2 p-3 rounded-lg bg-black border border-white/10 focus:border-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full mt-2 p-3 rounded-lg bg-black border border-white/10 focus:border-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full mt-2 p-3 rounded-lg bg-black border border-white/10 focus:border-blue-400 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-400 text-black font-semibold hover:opacity-90 transition"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
