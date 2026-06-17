'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactItems = [
    { label: 'Email', value: 'juniormsyoka35@gmail.com' },
    { label: 'Location', value: 'Mombasa, Kenya' },
    { label: 'Phone', value: '+254 748 579 736' },
    { label: 'GitHub', value: 'github.com/juniormsyoka' },
    { label: 'Availability', value: 'Open to opportunities', highlight: true },
  ];

  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-[rgba(240,237,232,0.08)]">
      <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#E8613A] mb-3">
        Contact
      </p>
      <h2 className="font-syne text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.025em] mb-1">
        Let's build something
      </h2>
      <p className="text-[#9A9186] mb-12 max-w-[500px]">
        Open to full-time roles, internships, and interesting freelance projects.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-16 items-start">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="flex gap-4 items-start pb-6 border-b border-[rgba(240,237,232,0.08)] last:border-b-0"
            >
              <span className="w-2 h-2 rounded-full bg-[#E8613A] mt-2 flex-shrink-0" />
              <div>
                <p className="text-[0.75rem] text-[#9A9186] tracking-[0.08em] uppercase">
                  {item.label}
                </p>
                <p className={`font-medium mt-0.5 text-[0.95rem] text-[#F0EDE8] ${item.highlight ? 'text-[#C4803A]' : ''}`}>
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="form-field">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-[#161411] border border-[rgba(240,237,232,0.08)] rounded-lg px-4 py-3.5 text-[#F0EDE8] font-inter text-[0.9rem] outline-none transition-colors focus:border-[#E8613A] placeholder:text-[#9A9186]"
              required
            />
          </div>
          <div className="form-field">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-[#161411] border border-[rgba(240,237,232,0.08)] rounded-lg px-4 py-3.5 text-[#F0EDE8] font-inter text-[0.9rem] outline-none transition-colors focus:border-[#E8613A] placeholder:text-[#9A9186]"
              required
            />
          </div>
          <div className="form-field">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity…"
              rows={4}
              className="w-full bg-[#161411] border border-[rgba(240,237,232,0.08)] rounded-lg px-4 py-3.5 text-[#F0EDE8] font-inter text-[0.9rem] outline-none transition-colors focus:border-[#E8613A] placeholder:text-[#9A9186] resize-vertical min-h-[120px]"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#E8613A] text-white border-none px-7 py-3.5 font-syne font-semibold text-[0.9rem] rounded transition-all hover:bg-[#d4522e] hover:-translate-y-px self-start ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : isSubmitted ? '✓ Sent!' : 'Send message →'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;