import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setSending(true);
    setError(null);
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/info@corewebinnovations.online",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        },
      );
      if (!res.ok) throw new Error("Network error");
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError("Could not send. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Begin"
              title={"Let's build the future, together."}
            />
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Have a vision? We'll engineer it. Tell us about your project and we'll
              respond within two working days.
            </p>

            <div className="mt-10 md:mt-12 space-y-6">
              <div className="flex items-start gap-4 border-t border-[rgba(240,215,140,0.12)] pt-6">
                <Mail size={18} className="text-gold mt-1 shrink-0" />
                <div className="min-w-0">
                  <div className="eyebrow mb-1">Email</div>
                  <div className="font-display text-base md:text-lg break-all">info@corewebinnovations.online</div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-[rgba(240,215,140,0.12)] pt-6">
                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                <div>
                  <div className="eyebrow mb-1">Studio</div>
                  <div className="font-display text-base md:text-lg">Remote · Worldwide</div>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-6 space-y-8"
          >
            {/* FormSubmit config */}
            <input type="hidden" name="_subject" value="New project enquiry — CoreWeb Innovations" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <Field label="Your Name" name="name" placeholder="How shall we address you" />
            <Field label="Email Address" name="email" type="email" placeholder="you@domain.com" />
            <Field label="Project Details" name="message" textarea placeholder="Tell us about your vision, timeline, and scope" />

            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center gap-3 px-7 py-4 bg-[#c9a84c] text-[#0d0d0d] font-500 hover:bg-[#f0d78c] transition-colors rounded-full disabled:opacity-60"
            >
              <span>
                {sent
                  ? "Thank you — message received"
                  : sending
                    ? "Sending…"
                    : "Send the brief"}
              </span>
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />
            </button>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}

function Field({ label, name, placeholder, type = "text", textarea }: FieldProps) {
  const [focus, setFocus] = useState(false);
  return (
    <label className="block">
      <div className="eyebrow mb-3">{label}</div>
      <div className="relative">
        {textarea ? (
          <textarea
            name={name}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={placeholder}
            rows={4}
            required
            className="w-full bg-transparent border-0 border-b border-[rgba(240,215,140,0.2)] py-3 text-foreground placeholder:text-foreground/30 focus:outline-none resize-none font-body"
          />
        ) : (
          <input
            type={type}
            name={name}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={placeholder}
            required
            className="w-full bg-transparent border-0 border-b border-[rgba(240,215,140,0.2)] py-3 text-foreground placeholder:text-foreground/30 focus:outline-none font-body"
          />
        )}
        <span
          className={`absolute left-0 right-0 bottom-0 h-px bg-[#c9a84c] origin-left transition-transform duration-500 ${focus ? "scale-x-100" : "scale-x-0"}`}
        />
      </div>
    </label>
  );
}
