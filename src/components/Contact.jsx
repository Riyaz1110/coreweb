import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/corewebinnovations26@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Message from CoreWeb Innovations Website",
          _template: "table" // Optional: makes the email look like a neat table
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 4 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 4000);
      } else {
        setStatus('idle');
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setStatus('idle');
      alert("Network error. Please ensure you are connected to the internet and try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Let's build the <span className="text-gradient">future</span> together.</h2>
          <p>Ready to start your next big project? Get in touch with us.</p>

          <div className="contact-methods">
            <div className="method">
              <Mail className="text-cyan" />
              <span>corewebinnovations26@gmail.com</span>
            </div>
            <div className="method">
              <Phone className="text-purple" />
              <span>+91 9445972660</span>
            </div>
            <div className="method">
              <MapPin className="text-blue" />
              <span>Chennai, India</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required disabled={status === 'submitting'} />
            </div>
            <div className="input-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required disabled={status === 'submitting'} />
            </div>
            <div className="input-group">
              <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required disabled={status === 'submitting'}></textarea>
            </div>
            <button type="submit" className={`btn-glow submit-btn w-full ${status === 'success' ? 'success' : ''}`} disabled={status === 'submitting' || status === 'success'}>
              {status === 'idle' && <><span style={{ marginRight: '8px' }}>Send Message</span> <Send size={18} /></>}
              {status === 'submitting' && <><span style={{ marginRight: '8px' }}>Sending...</span> <Loader2 size={18} className="animate-spin" /></>}
              {status === 'success' && <><span style={{ marginRight: '8px' }}>Message Sent!</span> <CheckCircle2 size={18} className="text-cyan" /></>}
              <div className="btn-glow-effect"></div>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
