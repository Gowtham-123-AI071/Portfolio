import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 shadow-xl">

          {/* Heading */}
          <h2 className="text-4xl font-bold text-purple-600 text-center">
            Let’s Work Together
          </h2>

          <p className="mt-4 text-center text-gray-600">
            Open to internships, full-time roles, and collaborations.
          </p>

          {/* Contact Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-10 grid gap-6"
          >
            {/* 🔑 Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="45db45f8-c45e-4a03-b026-73b29669d45d"
            />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-xl bg-white border border-gray-300
                         text-gray-800 outline-none focus:border-purple-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded-xl bg-white border border-gray-300
                         text-gray-800 outline-none focus:border-purple-500"
            />

            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-xl bg-white border border-gray-300
                         text-gray-800 outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold
                         hover:bg-purple-700 transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 text-lg">

            <a
              href="mailto:gowthammysonrgr@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition"
            >
              <FaEnvelope size={22} />
              <span>Gmail</span>
            </a>

            <a
              href="https://www.linkedin.com/in/gowtham-r-0ab8073a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <FaLinkedin size={22} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Gowtham-123-AI071"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-black transition"
            >
              <FaGithub size={22} />
              <span>GitHub</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
