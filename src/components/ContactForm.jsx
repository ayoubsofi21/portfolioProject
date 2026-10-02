import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { contactInfo } from "../data/experience";
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    `Portfolio message from ${form.name || "visitor"}`
  )}&body=${encodeURIComponent(
    `${form.message}\n\n---\nSender: ${form.name}\nEmail: ${form.email}`
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      window.location.href = mailtoUrl;
      setStatus("fallback_sent");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey }
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 focus:bg-card transition-colors"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 focus:bg-card transition-colors"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 focus:bg-card transition-colors resize-none"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        data-cursor-hover
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-bg font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-accent-green">
          <CheckCircle2 size={16} /> Message sent — thank you, I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={16} />
          Something went wrong. Please check the EmailJS configuration or email me directly.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
