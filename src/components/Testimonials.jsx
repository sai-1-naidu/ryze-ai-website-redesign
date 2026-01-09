const testimonials = [
  {
    text: "We replaced our basic chatbot with Ryze AI and honestly, the biggest win was fewer manual escalations.",
    author: "Sarah Chen",
    role: "Growth Lead",
    company: "TechStart Inc",
    featured: true,
    avatar: "👩‍💼"
  },
  {
    text: "Setup was straightforward. Took us less than a day to go live.",
    author: "Marcus Johnson",
    role: "Product Manager",
    company: "CloudFlow Solutions",
    avatar: "👨‍💼"
  },
  {
    text: "It doesn’t feel like a scripted bot, which was our main concern.",
    author: "Emma Rodriguez",
    role: "CEO",
    company: "Digital Hub Agency",
    avatar: "👩‍💻"
  }
];

export default function Testimonials() {
  return (
<section className="section-padding testimonials-bg">

      <div className="container">

        <h2 className="fw-bold mb-4">
          What teams say after using Ryze AI
        </h2>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-4">
              <div
                className="testimonial-card"
                style={{
                  padding: t.featured ? "2.5rem" : "2rem",
                  borderLeft: t.featured ? "4px solid #4f46e5" : "none"
                }}
              >
                <p className="testimonial-quote">
                  “{t.text}”
                </p>

                <div className="d-flex align-items-center mt-4">
                  <div className="testimonial-avatar me-3">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="testimonial-author">{t.author}</div>
                    <div className="text-muted small">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
